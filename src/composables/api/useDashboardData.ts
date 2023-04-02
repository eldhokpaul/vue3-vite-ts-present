import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import axios from '@utils/axios';
import type { AxiosResponse } from 'axios';
import type { Dashboard, Tab, Plugin } from '@ts-types/api';

export function useGetDashboardData() {
  return useQuery<AxiosResponse<Dashboard>>({
    queryKey: ['dashboard-data'],
    queryFn: () => axios.get('/dashboard'),
  });
}

export function useMutatePlugin() {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<{ tab: Tab }>>({
    mutationFn: (data) => axios.put('/plugin', data),
    onSuccess: (newData) => queryClient.setQueryData(['dashboard-data'], (prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        tabdata: {
          ...prevData.data.tabdata,
          [newData.data.tab.name]: newData.data.tab,
        },
      },
    })),
  });
}

export function useMutateToggleAllPlugin() {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<{ plugins: Plugin }>>({
    mutationFn: (data) => axios.put('/plugin/toggle-all', data),
    onSuccess: (newData) => queryClient.setQueryData(['dashboard-data'], (prevData: any) => ({
      ...prevData,
      data: {
        ...prevData.data,
        plugins: newData.data.plugins,
      },
    })),
  });
}

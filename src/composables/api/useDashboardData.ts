import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import axios from '@utils/axios';

export function useGetDashboardData() {
  return useQuery({
    queryKey: ['dashboard-data'],
    queryFn: () => axios.get('/campaign'),
  });
}

export function useMutatePlugin() {
  const queryClient = useQueryClient();
  return useMutation({
    // @ts-ignore
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
  return useMutation({
    // @ts-ignore
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

import { useQuery } from '@tanstack/vue-query';
import axios from '@utils/axios';

export function useGetDashboardData() {
  const datauery = useQuery({
    queryKey: ['dashboard-data'],
    queryFn: () => axios.get('/campaign'),
  });

  return datauery;
}

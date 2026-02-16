import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from '@/lib/api-client';

// Generic GET hook
export function useGet<T>(
  key: string | string[],
  url: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T, AxiosError>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: async () => {
      const response = await api.get<T>(url, config);
      return response.data;
    },
    ...options,
  });
}

// Generic POST hook
export function usePost<TData, TVariables = unknown>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseMutationOptions<TData, AxiosError, TVariables>
) {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: async (data) => {
      const response = await api.post<TData>(url, data, config);
      return response.data;
    },
    ...options,
  });
}

// Generic PUT hook
export function usePut<TData, TVariables = unknown>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseMutationOptions<TData, AxiosError, TVariables>
) {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: async (data) => {
      const response = await api.put<TData>(url, data, config);
      return response.data;
    },
    ...options,
  });
}

// Generic DELETE hook
export function useDelete<TData = unknown>(
  url: string,
  config?: AxiosRequestConfig,
  options?: UseMutationOptions<TData, AxiosError, void>
) {
  return useMutation<TData, AxiosError, void>({
    mutationFn: async () => {
      const response = await api.delete<TData>(url, config);
      return response.data;
    },
    ...options,
  });
}

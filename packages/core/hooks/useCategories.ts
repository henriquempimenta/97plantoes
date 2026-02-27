import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export const useCategories = () => {
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: api.categories.get,
  });

  return { categories, isLoading, error };
};

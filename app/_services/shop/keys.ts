// queryKeyを管理
import { type Location } from './types';

export const shopKeys = {
  all: ['shops'] as const,
  lists: () => [...shopKeys.all, 'list'] as const,
  list: (filters: string) => [...shopKeys.lists(), { filters }] as const,
  near: (position: Location) => [...shopKeys.lists(), position] as const,
  details: () => [...shopKeys.all, 'detail'] as const,
  detail: (id: number) => [...shopKeys.details(), id] as const,
} as const;

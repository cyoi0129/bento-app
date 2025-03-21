// queryKeyを管理

export const shopKeys = {
    all: ['shops'] as const,
    lists: () => [...shopKeys.all, 'list'] as const,
    list: (filters: string) => [...shopKeys.lists(), { filters }] as const,
    details: () => [...shopKeys.all, 'detail'] as const,
    detail: (id: number) => [...shopKeys.details(), id] as const,
  } as const;
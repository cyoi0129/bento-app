// queryKeyを管理

export const itemKeys = {
    all: ['items'] as const,
    lists: () => [...itemKeys.all, 'list'] as const,
    list: (filters: string) => [...itemKeys.lists(), { filters }] as const,
    details: () => [...itemKeys.all, 'detail'] as const,
    detail: (id: number) => [...itemKeys.details(), id] as const,
  } as const;
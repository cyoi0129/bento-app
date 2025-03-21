import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import Link from 'next/link';
import { itemKeys } from '../../_services/item/keys';
import { getShopItems } from '../../_services/item/functions';
import Items from '../../_components/Items';
import ShopDetail from '@/app/_components/ShopDetail';
import { getShopIds } from '@/app/_services/shop/functions';
import { shopKeys } from '@/app/_services/shop/keys';
import { getShopDetail } from '@/app/_services/shop/functions';
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const result = await getShopIds();
  return result;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const ShopPage: FC<PageProps> = async ({ params }) => {
  const id = (await params).id;
  const shop = Number(id);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: itemKeys.detail(shop),
    queryFn: () => getShopItems(shop),
  });
  await queryClient.prefetchQuery({
    queryKey: shopKeys.detail(shop),
    queryFn: () => getShopDetail(shop),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShopDetail id={shop} />
      <Items id={shop} />
      <Link href="/">back2top</Link>
    </HydrationBoundary>
  );
};

export default ShopPage;

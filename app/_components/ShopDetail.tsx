'use client';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { shopKeys } from '../_services/shop/keys';
import { getShopDetailSelector } from '../_services/shop/selectors';
import { getShopDetail } from '../_services/shop/functions';

type ComponentProps = {
  id: number;
};

const ShopDetail: FC<ComponentProps> = (props) => {
  const { id } = props;
  const { data } = useQuery({ queryKey: shopKeys.detail(id), queryFn: () => getShopDetail(id) });
  if (!data) return null;
  const shop = getShopDetailSelector(data);
  if (!shop) return null;
  return (
    <>
      <h3>{shop.name}</h3>
      <p>{shop.description}</p>
      <div>
        <dl>
          <dt>Phone</dt>
          <dd>{shop.phone}</dd>
          <dt>Address</dt>
          <dd>{shop.address}</dd>
          <dt>Business Date</dt>
          <dd>{`${shop.day.join('|')} - ${shop.time}`}</dd>
          <dt>Payment</dt>
          <dd>{shop.payment.join('|')}</dd>
          <dt>Feature</dt>
          <dd>{shop.feature.join('|')}</dd>
        </dl>
      </div>
    </>
  );
};

export default ShopDetail;

'use client';
import { FC } from 'react';
import { ShopType } from '../_services/shop/types';
import Link from 'next/link';

type ListShopItemProps = {
  data: ShopType;
};

const ListShopItem: FC<ListShopItemProps> = (props) => {
  const { data } = props;
  return (
    <li>
      <Link href={`/shop/${data.id}`}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div>
          <dl>
            <dt>Phone</dt>
            <dd>{data.phone}</dd>
            <dt>Address</dt>
            <dd>{data.address}</dd>
            <dt>Business Time</dt>
            <dd>{`${data.day.join('|')} - ${data.time}`}</dd>
            <dt>Payment</dt>
            <dd>{data.payment.join('|')}</dd>
            <dt>Feature</dt>
            <dd>{data.feature.join('|')}</dd>
          </dl>
        </div>
      </Link>
    </li>
  );
};

export default ListShopItem;

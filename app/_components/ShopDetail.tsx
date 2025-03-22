'use client';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { shopKeys } from '../_services/shop/keys';
import { getShopDetailSelector } from '../_services/shop/selectors';
import { getShopDetail } from '../_services/shop/functions';
import { FaPhoneAlt, FaCalendar, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdRestaurantMenu } from 'react-icons/md';
import styles from './shop.module.scss';

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
    <div className={styles.shop}>
      <h1 className={styles.title}>{shop.name}</h1>
      <div className={styles.image}>
        <img src={`/images${shop.image}`} alt={shop.name} />
      </div>
      <p className={styles.description}>{shop.description}</p>
      <dl className={styles.detail}>
        <dt>
          <FaPhoneAlt />
        </dt>
        <dd>{shop.phone}</dd>
        <dt>
          <FaLocationDot />
        </dt>
        <dd>{shop.address}</dd>
        <dt>
          <FaCalendar />
        </dt>
        <dd>{`${shop.day.join(' | ')} - ${shop.time}`}</dd>
        <dt>
          <FaMoneyCheckAlt />
        </dt>
        <dd>{shop.payment.join(' | ')}</dd>
        <dt>
          <MdRestaurantMenu />
        </dt>
        <dd>{shop.feature.join(' | ')}</dd>
      </dl>
    </div>
  );
};

export default ShopDetail;

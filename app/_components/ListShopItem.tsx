'use client';
import { FC } from 'react';
import { ShopType } from '../_services/shop/types';
import { FaPhoneAlt, FaCalendar, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';
import styles from './modal.module.scss';

type ListShopItemProps = {
  data: ShopType | undefined;
};

const ListShopItem: FC<ListShopItemProps> = (props) => {
  const { data } = props;
  if (!data) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{data.name}</h2>
        <div className={styles.image}>
          <img src={`/images${data.image}`} alt={data.name} />
        </div>
        <p className={styles.description}>{data.description}</p>
        <dl className={styles.detail}>
          <dt>
            <FaPhoneAlt />
          </dt>
          <dd>{data.phone}</dd>
          <dt>
            <FaLocationDot />
          </dt>
          <dd>{data.address}</dd>
          <dt>
            <FaCalendar />
          </dt>
          <dd>{`${data.day.join(' | ')} - ${data.time}`}</dd>
          <dt>
            <FaMoneyCheckAlt />
          </dt>
          <dd>{data.payment.join(' | ')}</dd>
          <dt>
            <MdRestaurantMenu />
          </dt>
          <dd>{data.feature.join(' | ')}</dd>
        </dl>
        <p className="link">
          <Link href={`/shop/${data.id}`}>詳細を見る</Link>
        </p>
      </div>
    </div>
  );
};

export default ListShopItem;

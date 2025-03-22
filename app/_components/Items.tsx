'use client';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { itemKeys } from '../_services/item/keys';
import { getShopItems } from '../_services/item/functions';
import { getItemsSelector } from '../_services/item/selectors';
import styles from './item.module.scss';

type ComponentProps = {
  id: number;
};

const Items: FC<ComponentProps> = (props) => {
  const { id } = props;
  const { data } = useQuery({ queryKey: itemKeys.detail(id), queryFn: () => getShopItems(id) });
  if (!data) return null;
  return data ? (
    <ul className={styles.list}>
      {getItemsSelector(data).map((item) => (
        <li className={styles.item} key={item.id}>
          <p className={styles.image}>
            <img src={`/images${item.image}`} alt={item.name} />
          </p>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.price}>{item.price.toLocaleString()}</p>
          <dl className={styles.detail}>
            {item.calorie === 0 ? null : (
              <>
                <dt>カロリー</dt>
                <dd>{item.calorie.toLocaleString()} kcal</dd>
              </>
            )}
            {item.carbo === 0 ? null : (
              <>
                <dt>糖質</dt>
                <dd>{item.carbo} g</dd>
              </>
            )}
            {item.protein === 0 ? null : (
              <>
                <dt>タンパク質</dt>
                <dd>{item.protein} g</dd>
              </>
            )}
            {item.fat === 0 ? null : (
              <>
                <dt>脂質</dt>
                <dd>{item.fat} g</dd>
              </>
            )}
            {item.salt === 0 ? null : (
              <>
                <dt>塩分</dt>
                <dd>{item.salt} g</dd>
              </>
            )}
            {item.fiber === 0 ? null : (
              <>
                <dt>食物繊維</dt>
                <dd>{item.fiber} g</dd>
              </>
            )}
          </dl>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Items;

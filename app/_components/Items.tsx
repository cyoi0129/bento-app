'use client';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { itemKeys } from '../_services/item/keys';
import { getShopItems } from '../_services/item/functions';
import { getItemsSelector } from '../_services/item/selectors';

type ComponentProps = {
  id: number;
};

const Items: FC<ComponentProps> = (props) => {
  const { id } = props;
  const { data } = useQuery({ queryKey: itemKeys.detail(id), queryFn: () => getShopItems(id) });
  if (!data) return null;
  return data ? (
    <ul>
      {getItemsSelector(data).map((item) => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <dl>
            <dt>Calorie</dt>
            <dd>{item.calorie}</dd>
            <dt>Carbo</dt>
            <dd>{item.carbo}</dd>
            <dt>Protein</dt>
            <dd>{item.protein}</dd>
            <dt>Fat</dt>
            <dd>{item.fat}</dd>
            <dt>Salt</dt>
            <dd>{item.salt}</dd>
            <dt>FIber</dt>
            <dd>{item.fiber}</dd>
          </dl>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Items;

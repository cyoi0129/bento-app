'use client';
import { FC, useState } from 'react';

const WEEKDAY = ['日', '月', '火', '水', '木', '金', '土'];
const PAYMENT = ['現金', 'クレジットカード', 'コード決済', '電子マネー'];
const FEATURE = ['低価格', '無添加', '低カロリー', '減塩', '低脂質', '高タンパク', 'オーガニック野菜', '雑穀米', 'ヴィーガン'];
type Filter = {
  isCurrent: boolean;
  payment: string[];
  feature: string[];
};

const Filter: FC = () => {
  const current = WEEKDAY[new Date().getDay()];
  const [currentFilter, setCurrentFilter] = useState<boolean>(false);
  const [paymentFilter, setPaymentFilter] = useState<string[]>([]);
  const [featureFilter, setFeatureFilter] = useState<string[]>([]);
  return <div></div>;
};

export default Filter;

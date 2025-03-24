'use client';
import { FC, useState } from 'react';
import styles from './filter.module.scss';

const WEEKDAY = ['日', '月', '火', '水', '木', '金', '土'];
const PAYMENT = ['現金', 'クレジットカード', 'コード決済', '電子マネー'];
const FEATURE = ['低価格', '無添加', '低カロリー', '減塩', '低脂質', '高タンパク', 'オーガニック野菜', '雑穀米', 'ヴィーガン'];
type Filter = {
  isCurrent: boolean;
  payment: string[];
  feature: string[];
};

type FilterData = {
  current: string;
  payment: string[];
  feature: string[];
};

type FilterProps = {
  show: boolean;
  doFilter: (filter: FilterData) => void;
};

const Filter: FC<FilterProps> = (props) => {
  const { show, doFilter } = props;
  const current = WEEKDAY[new Date().getDay()];
  const [currentFilter, setCurrentFilter] = useState<boolean>(false);
  const [paymentFilter, setPaymentFilter] = useState<string[]>([]);
  const [featureFilter, setFeatureFilter] = useState<string[]>([]);
  const handlePayment = (target: string) => {
    if (paymentFilter.includes(target)) {
      setPaymentFilter(paymentFilter.filter((item) => item !== target));
    } else {
      setPaymentFilter([target, ...paymentFilter]);
    }
  };
  const handleFeature = (target: string) => {
    if (featureFilter.includes(target)) {
      setFeatureFilter(featureFilter.filter((item) => item !== target));
    } else {
      setFeatureFilter([target, ...featureFilter]);
    }
  };
  const handleFilter = () => {
    doFilter({
      current: currentFilter ? current : '',
      payment: paymentFilter,
      feature: featureFilter,
    });
  };
  return (
    <div className={show ? styles.filter : styles.hidden}>
      <div className={styles.current}>
        <input type="checkbox" id="current" name="current" defaultChecked={currentFilter} onChange={() => setCurrentFilter(!currentFilter)} />
        <label htmlFor="current">本日営業</label>
      </div>
      <h3 className={styles.title}>支払方法</h3>
      <ul className={styles.list}>
        {PAYMENT.map((payment, index) => (
          <li key={index}>
            <input type="checkbox" id={`payment_${index}`} name="payment" defaultChecked={paymentFilter.includes(payment)} onChange={() => handlePayment(payment)} />
            <label htmlFor={`payment_${index}`}>{payment}</label>
          </li>
        ))}
      </ul>
      <h3 className={styles.title}>特徴</h3>
      <ul className={styles.list}>
        {FEATURE.map((feature, index) => (
          <li key={index}>
            <input type="checkbox" id={`feature_${index}`} name="feature" defaultChecked={featureFilter.includes(feature)} onChange={() => handleFeature(feature)} />
            <label htmlFor={`feature_${index}`}>{feature}</label>
          </li>
        ))}
      </ul>
      <p className={styles.action} onClick={handleFilter}>
        絞り込み
      </p>
    </div>
  );
};

export default Filter;

import Image from 'next/image';
import styles from './page.module.scss';
import ShopList from './_components/ShopList';
export default function Home() {
  return (
    <main className={styles.main}>
      <ShopList />
      <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
    </main>
  );
}

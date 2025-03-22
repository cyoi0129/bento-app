import styles from './page.module.scss';
import ShopList from './_components/ShopList';
export default function Home() {
  return (
    <main className={styles.main}>
      <ShopList />
    </main>
  );
}

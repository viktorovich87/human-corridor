import Head from 'next/head';

import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';

import styles from './styles.module.scss';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  title = '',
}) => {
  return (
    <>
      <div className={styles.body}>
        <Head>
          <title>{title} Human Corridor</title>
        </Head>
        <Navbar title={'Main Resources'} />
        <main className={styles.main}>
          <div className={styles.inner}>
            {children}
          </div>
        </main>

      </div>
      <Footer />
    </>

  );
}

export default DefaultLayout;
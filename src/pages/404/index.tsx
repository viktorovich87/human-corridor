import type { NextPage } from 'next';
import Link from 'next/link';

import DefaultLayout from '../../infrastructure/layouts/default/default-layout.component';
import Button from '../../infrastructure/components/button/button.component';

import styles from './style.module.scss';

const NotFoundPage: NextPage = () => {
  return (
    <DefaultLayout title="Page Not Found - ">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.h1Title} >404</h1>
          <h2 className={styles.text404} >Oops! it seems you follow backlink</h2>
          <Link href={'/'}>
            <a className={styles.actionLink}>
              <span> Home Page </span>
            </a>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default NotFoundPage;

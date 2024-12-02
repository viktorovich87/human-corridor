import React from 'react';
import noResults from '../../../assets/images/no-result-found.svg';
import Image from 'next/image';
import styles from './styles.module.scss';


const NoResultFind: React.FC<{}> = ({ }) => {
  return (
    <div className={styles.noResultsWrapper}>
      <div className={styles.noResultsContent}>
        <Image src={noResults} />
        <div className={styles.noResultTitle}>
          No Results Found
        </div>
        <div className={styles.noResultSubTitle}>
          There are no results at this time for your area. We have teams working
          diligently to find the right resources for all who need them.
        </div>
      </div>

    </div>

  );
};

export default NoResultFind;
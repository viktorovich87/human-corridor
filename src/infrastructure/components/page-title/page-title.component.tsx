import React from 'react';

import styles from './styles.module.scss';

export interface PageTitleProps {
  title: string;
  subTitle: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ 
  title = '',
  subTitle = '',
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subTitle}>
        {subTitle}
      </span>
      <h1 className={styles.title}>{title}</h1>
    </div>
    
  );
};

export default PageTitle;
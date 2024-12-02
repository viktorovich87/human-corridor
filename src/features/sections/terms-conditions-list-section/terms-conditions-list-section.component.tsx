import React from 'react';

import styles from './style.module.scss';

export interface TermsConditionsListSectionProps {
  title?: string;
  list?: {
    title: string;
    content: string;
  }[];
};

const TermsConditionsListSection: React.FC<TermsConditionsListSectionProps> = ({
  title = 'Terms and Conditions title',
  list = [
    {
      title: 'Content title',
      content: 'Content',
    },
  ]

}) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inner}>
        {list.map((item) => ( 
          <div className={styles.innerItemWrapper} key={item.title}>
            <h4 className={styles.subHeading}> {item.title} </h4>
            <p className={styles.textContent}> {item.content} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsConditionsListSection;
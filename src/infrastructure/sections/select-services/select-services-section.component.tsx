import React from 'react';
import Image from 'next/image';

import PageTitle from '../../components/page-title/page-title.component';
import styles from './styles.module.scss';

export interface Services {
  icon: any;
  title: string;
  href?: string;
  show?: boolean
};

export interface SelectServicesSectionProps {
  title?: string;
  subheading?: string;
  servicePageCategory?: string;
  services?: Services[];
};

const SelectServicesSection: React.FC<SelectServicesSectionProps> = ({
  title = 'Main Resources',
  subheading = 'Human Corridor',
  services = [],
}) => {

  return (
    <section className={styles.wrapper}>
      <PageTitle title={title} subTitle={subheading} />
      <div className={styles.inner}>
        {services.map((serviceItem, index) => {
          const { href, title, icon, show } = serviceItem
          return (
            <a href={href} key={title}>
              <div className={styles.itemCard}>
                <div className={styles.itemIcon}>
                  <Image alt={title} src={icon?.default?.src} width='100%' height='100%' />
                </div>
                <span className={styles.itemTitle}>
                  {title}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  );
};

export default SelectServicesSection;
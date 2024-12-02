import React from 'react';
import Image from 'next/image';
import brandBanner from '../../../assets/images/banner.png';
import styles from './about-us.module.scss';

export interface Description {
  title?: string;
  list?: {
    subTitle?: string;
    description?: string;
  }[];
};

export interface AboutUsSectionProps {
  aboutUsDescription?: Description[];
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  aboutUsDescription = [],
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          {aboutUsDescription.map((aboutUsDescriptionGroup, index) => {
            return (
              <div key={aboutUsDescriptionGroup.title}>
                <p className={styles.title}> {aboutUsDescriptionGroup.title} </p>
                {aboutUsDescriptionGroup.list?.map((item, index) => (
                  <div key={item.subTitle}>
                    <div className={styles.subTitle} > {item.subTitle} </div>
                    <p className={styles.descriptionText}> {item.description} </p>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
        <a href='https://hub.c-who.org/human-corridor' className={styles.banner}>
          <Image src={brandBanner} />
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;
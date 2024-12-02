import Image from 'next/image';

import {currentYear} from '../../../hooks/useDate';

import logoFullSrc from '../../../assets/images/logo-full-gray.svg';

import HC_CWHO_LOGO from '../../../assets/images/HC_CWHO_LOGO.png'

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Image src={HC_CWHO_LOGO} />
        </div>
        <span className={styles.copyright}> © All rights reserved {currentYear()} </span>
          <a href="/terms-conditions" className={styles.legalLinks} >
            Terms and Conditions 
          </a>
        <div className={styles.copyrightWrapperMobile} >
          <span className={styles.copyrightMobile}> © All rights reserved {currentYear()} </span>
          <a href="/terms-conditions" className={styles.legalLinksMobile} >
            Terms and Conditions 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
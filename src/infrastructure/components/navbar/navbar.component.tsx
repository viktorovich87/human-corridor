import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import cn from 'classnames';
import {Dropdown} from "react-bootstrap";
import { Squash as Hamburger } from 'hamburger-react'

import FormInput from '../form-components/form-input/from-input.component';

import styles from './styles.module.scss';

import logoFullSrc from '../../../assets/images/logo-full.svg';
import brandBanner from '../../../assets/images/banner.png';

import mainServices from '../../../data/main-services';

export interface NavbarProps {
  title: string;
  position?: 'static' | 'initial';
};

const Navbar: React.FC<NavbarProps> = ({ 
  position = 'static',
  title = 'Main Resources',
}) => {
  const router = useRouter();
  const [windowScrollY, setWindowScrollY] = React.useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false)

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return ( 
    <nav 
      className={cn({
        [styles.wrapper]: true,
        [styles.wrapperElevated]: windowScrollY !== 0 || isMobileMenuActive,
      })}
      style={{ position }}
    >
      <div className={styles.bar}>
        <div className={styles.left}> 
        <div className={styles.logoContainer}>
          <Dropdown ref={wrapperRef}>
            <Dropdown.Toggle id="dropdown-basic">
              <Hamburger 
                toggled={isOpen} 
                toggle={setOpen}
                color="#394452"
                rounded
                label="Show menu"
                size={30}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu 
              className={cn({
                [styles.menuInner]: isOpen,
                [styles.menuInnerNone]: !isOpen,
              })}
            >
              <h4 className={styles.h4Title}>
                {title}
              </h4>
              <div className={styles.menuWrapper}>
                <div className={styles.menuItemsWrapper}>
                  {mainServices.map((menuItem, index) => {
                    const ServicesIcon = menuItem.icon?.default?.src;
                    return (
                      <Dropdown.Item className={styles.menuItemContainer} href={menuItem.href} key={menuItem.title}>
                        <Image alt={menuItem.title} src={ServicesIcon} width='20px' height='20px'/>
                        <div className={styles.menuItemRight} >
                          <div className={styles.menuItemTitle}> {menuItem.title} </div>
                          <span className={styles.menuItemDescription}> {menuItem.description} </span>
                        </div>
                      </Dropdown.Item>
                    )
                  })}
                </div>
                <a href="https://hub.c-who.org/human-corridor" className={styles.bannerMenuWrapper}>
                  <Image src={brandBanner} alt="Human Corridor Banner" />
                </a>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <a href="/" className={styles.logoWrapper}>
            <Image src={logoFullSrc} alt="Human Corridor" />
          </a>
          </div>
        </div>
        {/* <FormInput label='hello' name='hello' id='hello' type='text'/> */}
      </div>
    </nav>
  );
};

export default Navbar;
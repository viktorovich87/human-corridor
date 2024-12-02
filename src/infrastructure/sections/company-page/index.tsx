import React from 'react';
// import { setGlobalApiUrl } from "../../../store/actionCreators/mainActionCreator";
// import { getTestText } from "../../../store/selectors/mainSelector"
// import { useDispatch } from "react-redux";
import Image from 'next/image';
import brandBanner from '../../../assets/images/banner.png';
import styles from './styles.module.scss';
import spinner from '../../../assets/images/spinner.gif';

import Breadcrumbs from 'nextjs-breadcrumbs';

export interface CompanyCommonPageProps {
  companyInfo?: any;
};

const CompanyCommonPage: React.FC<CompanyCommonPageProps> = ({
  companyInfo,
}) => {

  const {
    name,
    address,
    city,
    link,
    workInterval,
    country,
    isVerified,
    id,
    description,
    phoneNumber,
    category,
    tips
  } = companyInfo;

  const renderWorkTimeLeftContainer = (times: []) => {
    const content = (times || []).map((timeLine, index) => {
      if (index <= 2) {
        return (
          <div key={index}>
            <div>
              <div className={styles.workTimeLine}>
                {timeLine}
              </div>
            </div>
          </div>
        )
      }
    })
    return content
  }

  const renderIsFetching = () => {
    return <div className="spinner-container">
      <Image src={spinner} alt="spinner" className="spinner" />
    </div>
  }

  const renderWorkTimeRightContainer = (times: []) => {
    const content = (times || []).map((timeLine, index) => {
      if (index > 2) {
        return (
          <div key={index}>
            <div>
              <div className={styles.workTimeLine}>
                {timeLine}
              </div>
            </div>
          </div>
        )
      }
    })
    return content
  }

  const companyContainer = () => {
    return (
      <div >
        <div className={styles.title}> {name || 'N/A'}  </div>
        <div >
          <div className={styles.subTitle} > General Information </div>
          <div className={styles.descriptionText}>
            {description || 'N/A'}
          </div>
        </div>

        <div >
          <div className={styles.subTitle} > Business hours </div>
          <div className={styles.descriptionText}>

            {workInterval ?
              <>
                <div>{renderWorkTimeLeftContainer(workInterval)}</div>
                <div>{renderWorkTimeRightContainer(workInterval)}</div>
              </> :
              <p className={styles.workTimeLine} > N/A </p>
            }
          </div>
        </div>

        <div>
          <div className={styles.subTitle} > Contact Information </div>
          <div className={styles.descriptionText}>
            {address ?
              <div className={styles.companyContacts}>
                Address:
                <b>
                  <a className={styles.adressLink} href={`https://www.google.com/maps/place/${address}`}>
                    <span> {address}, {city} </span>
                  </a>
                </b>
              </div>
              : " "
            }
            {phoneNumber && <div className={styles.companyContacts} > <span>Phone number: </span>
              <a href={`tel:${phoneNumber}`} className={styles.address}>
                <b>{phoneNumber} </b>
              </a>
            </div>}
            
            {link &&
              <div>
                Website: <a href={link} className={styles.companyLink}>{link}</a>
              </div>
            }
          </div>
        </div>

        {tips &&
          <div>
            <div className={styles.subTitle} >Tips </div>
            <div className={styles.descriptionText}>
              {tips}
            </div>
          </div>
        }

      </div>
    )
  }

  const content = !companyInfo.id ? renderIsFetching() : companyContainer()

  return (
    <section className={styles.section}>
      <div className={styles.breadcrumbsWrapper}>
        <Breadcrumbs
            labelsToUppercase
            rootLabel={'Resources'}
            //omitRootLabel={true}
            transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
        />
        <span className={styles.lastBreadcrumbsLabel}> {name} </span>
      </div>
      <div className={styles.inner}>
        <div>
          {content}
        </div>
        <a href="https://hub.c-who.org/human-corridor" className={styles.banner}>
          <Image src={brandBanner} />
        </a>
      </div>
    </section>
  );
};

export default CompanyCommonPage;
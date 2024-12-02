// import React, { useState } from 'react';
// import { ICompanyInfo } from "./types"
// import cn from 'classnames';
// import { useRouter } from 'next/router'

// import { flagsByLang } from '../../../hooks/useFlagsByLang';
// import { gotToLink } from '../../../hooks/useGoTo';
// import { randomKey } from '../../../hooks/useMathRandom';

// import verified from "./icons/verified.svg"
// import directions from "./icons/directions.svg"
// import web from "./icons/web.svg"
// import phone from "./icons/phone.svg"
// import offSiteBlue from "./icons/off-site-blue.svg"
// import onSiteWhite from "./icons/on-site-white.svg"
// import offSiteWhite from "./icons/off-site-white.svg"
// import onSiteBlue from "./icons/on-site-blue.svg"
// import warning from "./icons/warning.svg"
// import error from "./icons/error.svg";

// import styles from './company-brick.module.scss';

// const CompanyBrick: React.FC<ICompanyInfo> = ({
//   info,
//   rootHref,
//   onlyDescription = false,
// }) => {

//   const router = useRouter()
//   const [redirect, setRedirect] = useState(false)
//   const [redirectId, setRedirectId] = useState("")

//   const isVerifiedInfoCompany = info.isVerified ? '1' : '2';

//   redirect && router.push(`${rootHref}/${redirectId}${isVerifiedInfoCompany}`)
  
//   const setredirectInfo = (id: string) => {
//     setRedirect(true)
//     setRedirectId(id)
//   }

//   const renderWorkTimeLeftContainer = (times: []) => {
//     const content = (times || []).map((timeLine, index) => {
//       if (index <= 2) {
//         return (
//           <div key={index}>
//             <div>
//               <div className={styles.workTimeLine}>
//                 {timeLine}
//               </div>
//             </div>
//           </div>
//         )
//       }
//     })
//     return content
//   }

//   const renderWorkTimeRightContainer = (times: []) => {
//     const content = (times || []).map((timeLine, index) => {
//       if (index > 2) {
//         return (
//           <div key={index}>
//             <div>
//               <div className={styles.workTimeLine}>
//                 {timeLine}
//               </div>
//             </div>
//           </div>
//         )
//       }
//     })
//     return content
//   }

//   const renderWorkTimeAllContainer = (times: []) => {
//     const content = (times || []).map((timeLine, index) => {
//       if (index > 0) {
//         return (
//           <div key={index}>
//             <div>
//               <div className={styles.workTimeLine}>
//                 {timeLine}
//               </div>
//             </div>
//           </div>
//         )
//       }
//     })
//     return content
//   }

//   const status = "red" //red, green
//   const statusLable = "Open Soon" // Open, Closed
//   //const activeSite = true
//   const [activeSite, setActiveSite] = React.useState(false);

//   const renderFullCompanyBrick = () => {

//     const {
//       name,
//       address,
//       city,
//       link,
//       workInterval,
//       translationOnSite,
//       translationOnCall,
//       isVerified,
//       id,
//       description,
//       phoneNumber
//     } = info;
   
//     const key = randomKey;

//     return (
//       <div
//         className={styles.section}
//         onClick={() => setredirectInfo(id)}
//         key={key}
//       >
//         <div className={styles.topInner}>
//           <div className={styles.nameWrapper}>
//             <div className={styles.companyName}>
//               {name}
//               {isVerified &&
//                 <img src={verified.src} />
//               }
//             </div>
//             <div
//               className={cn({
//                 [styles.openStatus]: true,
//                 [styles[status]]: true,
//               })}
//             >
//               {statusLable}
//             </div>
//           </div>
//           <div className={styles.description}>
//             {description}
//           </div>

//           <div className={styles.bottomInfoWrapper}>
//             <div>
//               <div className={styles.workTitle}>
//                 Work Hours
//               </div>
//               <div className={styles.companyWorkTime}>
//                 {workInterval ?
//                   <>
//                     <div className={styles.workTime}>{renderWorkTimeLeftContainer(workInterval)}</div>
//                     <div className={styles.workTime}>{renderWorkTimeRightContainer(workInterval)}</div>
//                     <div className={styles.workTimeMobile}>
//                       {renderWorkTimeAllContainer(workInterval)}
//                     </div>
//                   </> :
//                   <p className={styles.workTimeLine} > N/A </p>
//                 }
//               </div>
//             </div>

//             {translationOnCall && translationOnSite &&
//               <div className={styles.translationServiceContainer}>
//                 <div className={styles.translationTitle}>
//                   Translation Services
//                 </div>
//                 <div className={styles.onOffSiteContainer}>
//                   <div
//                     className={cn({
//                       [styles.active]: activeSite,
//                     })}
//                     onClick={e => {
//                       e.preventDefault();
//                       setActiveSite(true);
//                       e.stopPropagation();
//                     }}
//                   >
//                     {!activeSite ? <img src={offSiteBlue.src} /> : <img src={offSiteWhite.src} />}
//                     off-site
//                   </div>
//                   <div
//                     className={cn({
//                       [styles.active]: !activeSite,
//                     })}
//                     onClick={e => {
//                       e.preventDefault();
//                       setActiveSite(false);
//                       e.stopPropagation();
//                     }}
//                   >
//                     {!activeSite ? <img src={onSiteWhite.src} /> : <img src={onSiteBlue.src} />}
//                     on-site
//                   </div>
//                 </div>

//                 {!activeSite ? (
//                   <>
//                     {!translationOnSite ?
//                       <div className={styles.errorInfoContainer}>
//                         <img src={error.src} />
//                         <div className={styles.infoContainerMessage}>
//                           No On-Site translation services
//                         </div>
//                       </div> :
//                       <div className={styles.languagesContainer}>
//                         {translationOnSite.map((lang: string) => {
//                           return <img src={flagsByLang(lang).src} />
//                         })}
//                       </div>
//                     }
//                   </>
//                 ) : (
//                   <>
//                     <div>
//                       {translationOnCall == 'all' || 'All' || 'ALL' ?
//                         <div className={styles.infoContainer}>
//                           <img src={warning.src} />
//                           <span>
//                             All translations available, 5-120 <br />minute wait times
//                             {/* {translationOnCall.map((lang: string) => {
//                           return <img src={flagsByLang(lang).src} />
//                           })} */}
//                           </span>
//                         </div> : translationOnCall ?
//                           <div className={styles.languagesContainer}>
//                             {translationOnCall.map((lang: string) => {
//                               return <img src={flagsByLang(lang).src} />
//                             })}
//                           </div> :
//                           <div className={styles.errorInfoContainer}>
//                             <img src={error.src} />
//                             <div className={styles.infoContainerMessage}>
//                               No Off-Site translation services
//                             </div>
//                           </div>
//                       }
//                     </div>

//                   </>
//                 )}
//               </div>
//             }
//           </div>
//         </div>

//         <div className={styles.bottomContainer}>
//           <div className={styles.topInnerInfo}>
//             {phoneNumber &&
//               <div
//                 onClick={e => {
//                   gotToLink(phoneNumber, "phone")
//                   e.stopPropagation();
//                 }}
//                 className={styles.address}
//               >
//                 <img src={phone.src} />
//                 {phoneNumber}
//               </div>
//             }

//             {link &&
//               <div
//                 onClick={e => {
//                   gotToLink(link, "webSite")
//                   e.stopPropagation();
//                 }}
//                 className={styles.address}
//               >
//                 <img src={web.src} />
//                 Website
//               </div>
//             }
//           </div>

//           <div
//             onClick={e => {
//               gotToLink(address, "address")
//               e.stopPropagation();
//             }} 
//             className={styles.address}
//           >
//             <img src={directions.src} />
//             {address}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderOnlyDescription = () => {
//     const { title, id, description, link } = info
//     return (
//       <div
//         className={styles.onlyDescription}
//         onClick={() => setredirectInfo(id)}
//       >
//         <div className={styles.topInner}>
//           <div className={styles.nameWrapper}>
//             <div className={styles.companyName}>
//               {title}

//             </div>
//             <div className={styles.companyDescription}>
//               {description}
//             </div>
//             <div>
//               {link &&
//                 // <a href={link} className={styles.address}>
//                 //   {link}
//                 // </a>
//                 <div
//                 onClick={e => {
//                   gotToLink(link, "webSite")
//                   e.stopPropagation();
//                 }} 
//                 className={styles.address}
//               >
//                 <img src={web.src} />
//                 {link}
//               </div>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const content = onlyDescription ? renderOnlyDescription() : renderFullCompanyBrick();

//   return content;
// };

// export default CompanyBrick;

import React, { useState } from 'react';
import { ICompanyInfo } from "./types"
import cn from 'classnames';
import { useRouter } from 'next/router'

import { flagsByLang } from '../../../hooks/useFlagsByLang';
import { gotToLink } from '../../../hooks/useGoTo';
import { randomKey } from '../../../hooks/useMathRandom';

import verified from "./icons/verified.svg"
import directions from "./icons/directions.svg"
import web from "./icons/web.svg"
import phone from "./icons/phone.svg"
import offSiteBlue from "./icons/off-site-blue.svg"
import onSiteWhite from "./icons/on-site-white.svg"
import offSiteWhite from "./icons/off-site-white.svg"
import onSiteBlue from "./icons/on-site-blue.svg"
import warning from "./icons/warning.svg"
import error from "./icons/error.svg";
import Link from 'next/link'

import styles from './company-brick.module.scss';

const CompanyBrick: React.FC<ICompanyInfo> = ({
  info,
  rootHref,
  onlyDescription = false,
}) => {

  const router = useRouter()
  const [redirect, setRedirect] = useState(false)
  const [redirectId, setRedirectId] = useState("")

  const isVerifiedInfoCompany = info.isVerified ? '1' : '2';

  // redirect && router.push(`${rootHref}/${redirectId}${isVerifiedInfoCompany}`)

  const setredirectInfo = (id: string) => {
    // setRedirect(true)
    setRedirectId(id)

  }

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

  const renderWorkTimeAllContainer = (times: []) => {
    const content = (times || []).map((timeLine, index) => {
      if (index > 0) {
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

  const status = "red" //red, green
  const statusLable = "Open Soon" // Open, Closed
  //const activeSite = true
  const [activeSite, setActiveSite] = React.useState(false);

  const renderFullCompanyBrick = () => {

    const {
      name,
      address,
      city,
      link,
      workInterval,
      translationOnSite,
      translationOnCall,
      isVerified,
      id,
      description,
      phoneNumber
    } = info;

    const key = randomKey;

    return (
      <a href={`${rootHref}/${id}${isVerifiedInfoCompany}`}>
        <div
          className={styles.section}
          onClick={() => setredirectInfo(id)}
          key={key}
        >
          <div className={styles.topInner}>
            <div className={styles.nameWrapper}>
              <div className={styles.companyName}>
                {name}
                {isVerified &&
                  <img src={verified.src} />
                }
              </div>
              <div
                className={cn({
                  [styles.openStatus]: true,
                  [styles[status]]: true,
                })}
              >
                {statusLable}
              </div>
            </div>
            <div className={styles.description}>
              {description}
            </div>

            <div className={styles.bottomInfoWrapper}>
              <div>
                <div className={styles.workTitle}>
                  Work Hours
                </div>
                <div className={styles.companyWorkTime}>
                  {workInterval ?
                    <>
                      <div className={styles.workTime}>{renderWorkTimeLeftContainer(workInterval)}</div>
                      <div className={styles.workTime}>{renderWorkTimeRightContainer(workInterval)}</div>
                      <div className={styles.workTimeMobile}>
                        {renderWorkTimeAllContainer(workInterval)}
                      </div>
                    </> :
                    <p className={styles.workTimeLine} > N/A </p>
                  }
                </div>
              </div>

              {translationOnCall && translationOnSite &&
                <div className={styles.translationServiceContainer}>
                  <div className={styles.translationTitle}>
                    Translation Services
                  </div>
                  <div className={styles.onOffSiteContainer}>
                    <div
                      className={cn({
                        [styles.active]: activeSite,
                      })}
                      onClick={e => {
                        e.preventDefault();
                        setActiveSite(true);
                        e.stopPropagation();
                      }}
                    >
                      {!activeSite ? <img src={offSiteBlue.src} /> : <img src={offSiteWhite.src} />}
                      off-site
                    </div>
                    <div
                      className={cn({
                        [styles.active]: !activeSite,
                      })}
                      onClick={e => {
                        e.preventDefault();
                        setActiveSite(false);
                        e.stopPropagation();
                      }}
                    >
                      {!activeSite ? <img src={onSiteWhite.src} /> : <img src={onSiteBlue.src} />}
                      on-site
                    </div>
                  </div>

                  {!activeSite ? (
                    <>
                      {!translationOnSite ?
                        <div className={styles.errorInfoContainer}>
                          <img src={error.src} />
                          <div className={styles.infoContainerMessage}>
                            No On-Site translation services
                          </div>
                        </div> :
                        <div className={styles.languagesContainer}>
                          {translationOnSite.map((lang: string) => {
                            return <img src={flagsByLang(lang).src} />
                          })}
                        </div>
                      }
                    </>
                  ) : (
                    <>
                      <div>
                        {translationOnCall == 'all' || 'All' || 'ALL' ?
                          <div className={styles.infoContainer}>
                            <img src={warning.src} />
                            <span>
                              All translations available, 5-120 <br />minute wait times
                              {/* {translationOnCall.map((lang: string) => {
                          return <img src={flagsByLang(lang).src} />
                          })} */}
                            </span>
                          </div> : translationOnCall ?
                            <div className={styles.languagesContainer}>
                              {translationOnCall.map((lang: string) => {
                                return <img src={flagsByLang(lang).src} />
                              })}
                            </div> :
                            <div className={styles.errorInfoContainer}>
                              <img src={error.src} />
                              <div className={styles.infoContainerMessage}>
                                No Off-Site translation services
                              </div>
                            </div>
                        }
                      </div>

                    </>
                  )}
                </div>
              }
            </div>
          </div>

          <div className={styles.bottomContainer}>
            {phoneNumber && link && 
              <div className={styles.topInnerInfo}>
                {phoneNumber &&
                  <div
                    onClick={e => {
                      gotToLink(phoneNumber, "phone")
                      e.stopPropagation();
                    }}
                    className={styles.address}
                  >
                    <img src={phone.src} />
                    {phoneNumber}
                  </div>
                }

                {link &&
                  <div
                    onClick={e => {
                      gotToLink(link, "webSite")
                      e.stopPropagation();
                    }}
                    className={styles.address}
                  >
                    <img src={web.src} />
                    Website
                  </div>
                }
              </div>
            }

            {address && 
              <div
                onClick={e => {
                  gotToLink(address, "address")
                  e.stopPropagation();
                }}
                className={styles.address}
              >
              <img src={directions.src} />
                {address}
              </div>
            }
          </div>
        </div>
      </a>
    )
  }

  const renderOnlyDescription = () => {
    const { title, id, description, link } = info
    return (
      <div
        className={styles.onlyDescription}
        onClick={() => setredirectInfo(id)}
      >
        <div className={styles.topInner}>
          <div className={styles.nameWrapper}>
            <div className={styles.companyName}>
              {title}
            </div>
            <div className={styles.companyDescription}>
              {description}
            </div>
            <div>
              {link &&
                // <a href={link} className={styles.address}>
                //   {link}
                // </a>
                <div
                  onClick={e => {
                    gotToLink(link, "webSite")
                    e.stopPropagation();
                  }}
                  className={styles.address}
                >
                  <img src={web.src} />
                  {link}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  const content = onlyDescription ? renderOnlyDescription() : renderFullCompanyBrick();

  return content;
};

export default CompanyBrick;
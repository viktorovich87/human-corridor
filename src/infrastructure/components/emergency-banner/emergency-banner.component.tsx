import Image from 'next/image';
import {currentYear} from '../../../hooks/useDate';
import alert from '../../../assets/images/icons/alert.svg';
import styles from './emergency-banner.module.scss';
import { getEmergencyText } from "../../../store/selectors/mainSelector"
import { useSelector } from "react-redux";

const EmergencyBanner = () => {

  const emergencyText = useSelector(getEmergencyText);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerIcon}>
        <Image src={alert} height={150} width={166}/>
      </div>
      <p className={styles.emergencyMessage} >
        {emergencyText || "In case of Emergency, please dial 911"} </p>
    </div>
  );
};

export default EmergencyBanner;
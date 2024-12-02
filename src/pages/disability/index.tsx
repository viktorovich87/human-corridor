import type { NextPage } from 'next';
import disabilityServices from '../../data/disability-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const DisabilityServicesPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Disability Resources'}
      servicePageCategory={'disability'}
      services={disabilityServices}
    />
  );
}

export default DisabilityServicesPage;
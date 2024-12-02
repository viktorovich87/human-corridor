import type { NextPage } from 'next';
import healthServices from '../../data/health-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const HealthPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Physical & Mental Health'}
      servicePageCategory={'healthServices'}
      services={healthServices}
    />
  );
}

export default HealthPage;
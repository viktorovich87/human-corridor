import type { NextPage } from 'next';
import legalServices from '../../data/legal-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const FinancialResourcesPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Financial Resources'}
      servicePageCategory={'financial'}
      services={legalServices}
    />
  );
}

export default FinancialResourcesPage;
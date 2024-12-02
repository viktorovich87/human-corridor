import type { NextPage } from 'next';
import legalServices from '../../data/legal-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const FoodAssistancePage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Legal Resources'}
      servicePageCategory={'legal'}
      services={legalServices}
    />
  );
}

export default FoodAssistancePage;

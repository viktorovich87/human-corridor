import type { NextPage } from 'next';
import foodAssistanceServices from '../../data/food-assistance-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const FoodAssistancePage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Food Assistance'}
      servicePageCategory={'foodAssistance'}
      services={foodAssistanceServices}
    />
  );
}

export default FoodAssistancePage;
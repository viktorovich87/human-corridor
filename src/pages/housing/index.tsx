import type { NextPage } from 'next';
import housingServices from '../../data/housing-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const HousingPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Housing'}
      servicePageCategory={'housing'}
      services={housingServices}
    />
  );
}

export default HousingPage;
import type { NextPage } from 'next';
import educationServices from '../../data/education-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const EducationPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Education Resources'}
      servicePageCategory={'education'}
      services={educationServices}
    />
  );
}

export default EducationPage;
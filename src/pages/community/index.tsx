import type { NextPage } from 'next';
import сommunityServices from '../../data/community-services';
import CommonPageWithCategories from "../../features/sections/common-page-with-categories"

const CommunityPage: NextPage = () => {
  return (
    <CommonPageWithCategories
      title={'Сommunity'}
      servicePageCategory={'community'}
      services={сommunityServices}
    />
  );
}

export default CommunityPage;
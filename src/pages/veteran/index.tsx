import type { NextPage } from 'next';
import CommonPageWhitoutSubcategory from "../../features/sections/common-page-without-categories"

const VeteranPage: NextPage = () => {
  const titleValue = 'Veteran Resources';
  return (
    <CommonPageWhitoutSubcategory
      title={titleValue}
      url={"VETERANS"}
      rootHref={'veteran'}
      defaultValue={titleValue}
      urlCategories={"VETERANS_CATEGORIES"}
      myCategoryId={40}
    />
  );
}

export default VeteranPage;

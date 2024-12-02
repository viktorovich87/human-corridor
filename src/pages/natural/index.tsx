import type { NextPage } from 'next';
import CommonPageWhitoutSubcategory from "../../features/sections/common-page-without-categories"

const NaturalPage: NextPage = () => {
  const titleValue = 'Natural Disaster';
  return (
    <CommonPageWhitoutSubcategory
      title={titleValue}
      url={"NATURAL"}
      rootHref={'natural'}
      defaultValue={titleValue}
      urlCategories={"NATURAL_CATEGORIES"}
      myCategoryId={39}
    />
  );
}

export default NaturalPage;

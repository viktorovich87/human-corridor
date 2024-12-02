import React from "react"
import type { NextPage } from 'next';
import housingServices from '../../../data/housing-services';
import SubCategoryPageWithSearchForm from "../../../infrastructure/components/subcategory-page-with-search-form"

export const getStaticProps = (context: any) => {
  const page = context.params.page
  return {
    props: {
      id: page
    }
  }
}

export const getStaticPaths = () => {
  const paths = housingServices.map(item => {
    return {
      params: {
        page: item.page.toString()
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

const CommonPageSubcategory: NextPage = ({ id }: any) => {
  return <SubCategoryPageWithSearchForm
    services={housingServices}
    urlCategories={"HOUSING_ASSISTANCE_CATEGORIES"}
    {...{ id }}
  />;
}

export default CommonPageSubcategory;
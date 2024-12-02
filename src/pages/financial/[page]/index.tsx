import React from "react"
import type { NextPage } from 'next';
import legalServices from '../../../data/legal-services';
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
  const paths = legalServices.map(item => {
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
    services={legalServices}
    urlCategories={"FINANCIAL_ASSISTANCE"}
    {...{ id }}
  />;
}

export default CommonPageSubcategory;
import React from "react"
import type { NextPage } from 'next';
import educationServices from '../../../data/education-services';
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
  const paths = educationServices.map(item => {
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
    services={educationServices}
    urlCategories={"EDUCATION_CATEGORIES"}
    {...{ id }}
  />;
}

export default CommonPageSubcategory;
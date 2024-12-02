import React from "react"
import type { NextPage } from 'next';
import SubCategoryPageWithSearchForm from "../../../infrastructure/components/subcategory-page-with-search-form"
import foodAssistanceServices from '../../../data/food-assistance-services';

export const getStaticProps = (context: any) => {
    const page = context.params.page
    return {
        props: {
            id: page
        }
    }
}

export const getStaticPaths = () => {
    const paths = foodAssistanceServices.map(item => {
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
        services={foodAssistanceServices}
        urlCategories={"FOOD_CATEGORIES"}
        {...{ id }}
    />;
}

export default CommonPageSubcategory;
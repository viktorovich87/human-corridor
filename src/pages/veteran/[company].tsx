import React, { useState, useEffect } from 'react';
import CompanyCommonPage from "../../infrastructure/sections/company-page"
import DefaultLayout from '../../infrastructure/layouts/default/default-layout.component';
import { useRouter } from 'next/router'
import * as apiUrls from "../../pages/api/urls"
import axiosFetch from "../../axios"

export interface CompanyPageProps {
    company?: string;
};


export const getStaticProps = (context: any) => {

    const company = context.params.company
    return {
        props: {
            company
        }
    }
}

export async function getStaticPaths() {

    return {
        paths: [],
        fallback: true,
    };
}


const CompanyPage: React.FC<CompanyPageProps> = ({
    company
}) => {
   
    const [companyInfo, setCompanyInfo] = useState({})

    const istInfoCompanyVerified = company?.slice(-1) === '1' ? '?verified' : '';

    const newCompanyID = company?.substring(0, company.length - 1);

    useEffect(() => {

        const GET_COMPANY_INFO_URL = apiUrls.default?.["VETERANS_ID"]

        async function fetchCompanyInfo() {
            await axiosFetch(`${GET_COMPANY_INFO_URL}${newCompanyID}${istInfoCompanyVerified}`).then((result) => {
                setCompanyInfo(result)
            })
        }
        
        fetchCompanyInfo()
    }, [company])

    return (
        <DefaultLayout title="">
            <CompanyCommonPage {...{ companyInfo }} />
        </DefaultLayout>
    );
};

export default CompanyPage;
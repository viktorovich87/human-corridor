import React, { useState, useEffect } from 'react';
import CompanyCommonPage from "../../../infrastructure/sections/company-page"
import DefaultLayout from '../../../infrastructure/layouts/default/default-layout.component';
import communityServices from '../../../data/community-services';
import { useRouter } from 'next/router'
import * as apiUrls from "../../../pages/api/urls"
import axiosFetch from "../../../axios"

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
    const { asPath } = useRouter()
    const splitedPath = asPath.split("/");
    const path = `${splitedPath[1]}/${splitedPath[2]}`

    const [companyInfo, setCompanyInfo] = useState({})

    const istInfoCompanyVerified = company?.slice(-1) === '1' ? '?verified' : '';

    const newCompanyID = company?.substring(0, company.length - 1);

    useEffect(() => {
        let href
        for (let index = 0; index < communityServices.length; index++) {
            const isSelectedItem = communityServices[index].href.includes(path);
            if (isSelectedItem) {
                href = communityServices[index].getCompanyInfo
            }
        }

        const GET_COMPANY_INFO_URL = apiUrls.default?.[href as keyof typeof apiUrls.default]

        async function fetchCompanyInfo() {
            await axiosFetch(`${GET_COMPANY_INFO_URL}${newCompanyID}${istInfoCompanyVerified}`).then((result) => {
                setCompanyInfo(result)
            })
        }
        
        fetchCompanyInfo()
    }, [company, path])

    return (
        <DefaultLayout title="">
            <CompanyCommonPage {...{ companyInfo }} />
        </DefaultLayout>
    );
};

export default CompanyPage;
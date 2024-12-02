import React from 'react';
import CompanyCommonPage from "../../../infrastructure/sections/company-page"
import DefaultLayout from '../../../infrastructure/layouts/default/default-layout.component';
import Breadcrumbs from 'nextjs-breadcrumbs';

export interface CompanyPageProps {
    title?: string;
};

const CompanyPage: React.FC<CompanyPageProps> = ({
    title = 'Main Resources',
}) => {

    return (
        <DefaultLayout title="">
            <Breadcrumbs
                labelsToUppercase
                rootLabel="Resources "
                transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
            />
            <CompanyCommonPage companyInfo={{}}/>
        </DefaultLayout>
    );
};

export default CompanyPage;
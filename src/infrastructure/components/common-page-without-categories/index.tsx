import React, { useState } from "react"
import Breadcrumbs from 'nextjs-breadcrumbs';
import DefaultLayout from '../../../infrastructure/layouts/default/default-layout.component';
import Image from 'next/image';
import PageTitle from '../../../infrastructure/components/page-title/page-title.component';
import SearchFormSection from '../../../infrastructure/sections/search-form/search-form-section.component';
import CompanyBrick from "../../../infrastructure/components/company-brick/company.component"
import AboutUsSection from '../../../infrastructure/sections/about-us/about-us-section.component';
import spinner from '../../../assets/images/spinner.gif';
import aboutUsData from '../../../data/default-page-content/about-us';
import styles from './style.module.scss'
import brandBanner from '../../../assets/images/banner.svg';
import NoResultFind from "../../../infrastructure/components/no-results-find/no-results-find.component"
import { ICommonPageWithoutCategories } from "./types"

import { getPageNumber } from "../../../hooks/useSetPaginationPageNumbers"
import { sliceData } from "../../../hooks/useSliceCompanyData"
import Paginate from "../../../infrastructure/components/pagination"

const CommonPageWhitoutSubcategory: React.FC<ICommonPageWithoutCategories> = ({
    title,
    url,
    defaultValue
}) => {

    const [companiesList, setCompaniesList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [notFindContainer, showNotFindContainer] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
    const paginate = (page: any) => setCurrentPage(page)
    const pageNumbers = getPageNumber(companiesList, postPerPage)

    const renderCompanies = () => {
        const companiesData = sliceData(currentPage, postPerPage, companiesList)
        const content = (companiesData || []).map((company: any, index: any) => {
            return (
                <div key={index}>
                    <CompanyBrick
                        key={company.name}
                        info={company}
                    />
                </div>
            )
        })

        return content
    }

    const renderCompaniesContent = () => {

        const content = notFindContainer ? <NoResultFind /> : renderCompanies()

        return (
            <div className={styles.resultContainer} id="resultContainer">
                <div className={styles.resultCompaniesContainer}>
                    {content}
                </div>
                <a href="https://hub.c-who.org/human-corridor" className={styles.banner}>
                    <Image src={brandBanner} alt={""} />
                </a>
            </div>
        )
    }

    const renderIsFetching = () => {
        return <div className={styles.spinnerContainer}>
            <Image src={spinner} alt="spinner" />
        </div>
    }

    const content = companiesList.length === 0 ?
        <AboutUsSection aboutUsDescription={aboutUsData} /> :
        renderCompaniesContent()

    return (
        <DefaultLayout title="">
            <Breadcrumbs
                labelsToUppercase
                rootLabel="Resources "
                transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
            />
            <section className={styles.wrapper} >
                <PageTitle title={title || ""} subTitle='Human Corridor' />
                <SearchFormSection
                    urlCategories={""}
                    selectData={[]}
                    {...{ url }}
                    {...{ defaultValue }}
                    {...{ setCompaniesList }}
                    {...{ setIsFetching }}
                    {...{ showNotFindContainer }}
                    resetCurrentPageToStart={() => setCurrentPage(1)}
                />
                {isFetching ? renderIsFetching() : content}
            </section>

            {companiesList.length > 0 && <Paginate
                {...{ pageNumbers }}
                {...{ paginate }}
                {...{ currentPage }}
            />}

        </DefaultLayout>

    );
}

export default CommonPageWhitoutSubcategory;


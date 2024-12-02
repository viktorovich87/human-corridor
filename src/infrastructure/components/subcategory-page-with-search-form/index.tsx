
import React, { useState } from "react"
import type { NextPage } from 'next';
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
import brandBanner from '../../../assets/images/banner.png';
import NoResultFind from "../../../infrastructure/components/no-results-find/no-results-find.component"
import { getPageNumber } from "../../../hooks/useSetPaginationPageNumbers"
import { sliceData } from "../../../hooks/useSliceCompanyData";
import Paginate from "../../../infrastructure/components/pagination"
import { useSelector } from "react-redux";
import { getGlobalPageTitle, getGlobalSearchCompanies, getShowOnlyBrick } from "../../../store/selectors/mainSelector"
import { ISubCategoryPageWithSearchForm } from "./types"
import { scrollToElement } from "../../../hooks/useScrollToElem"
import EmergencyBanner from '../../../infrastructure/components/emergency-banner/emergency-banner.component';

const SubCategoryPageWithSearchForm: React.FC<ISubCategoryPageWithSearchForm> = ({
    id, urlCategories, services
}) => {

    const globalSearchCompanies = useSelector(getGlobalSearchCompanies);

    const [companiesList, setCompaniesList] = useState(globalSearchCompanies)
    // const [categoriesList, setCategoriesList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [notFindContainer, showNotFindContainer] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
    const paginate = (page: any) => onChangePage(page)
    const pageNumbers = getPageNumber(companiesList, postPerPage)

    const onChangePage = (page: number) => {
        setCurrentPage(page)
        setTimeout(() => {
            scrollToElement("searchPanel")
        }, 500);
    }

    const pageData = services?.find((item: any) => item.page === id)
    const onlyDescription = useSelector(getShowOnlyBrick);
    const globalPageTitle = useSelector(getGlobalPageTitle);
    const renderCompanies = () => {
        const companiesData = sliceData(currentPage, postPerPage, companiesList)
        const content = (companiesData || []).map((company: any, index: number) => {
            return (
                <div key={index}>
                    <CompanyBrick
                        key={company.name}
                        info={company}
                        rootHref={pageData?.href}
                        {...{ onlyDescription }}
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
                {globalPageTitle.title === 'Emergency Medical' ?
                    <a href="https://hub.c-who.org/human-corridor" className={styles.banner911}>
                        <EmergencyBanner />
                    </a> :
                    <a href="https://hub.c-who.org/human-corridor" className={styles.banner}>
                        <Image src={brandBanner} alt={""} />
                    </a>
                }


            </div>
        )
    }

    const renderIsFetching = () => {
        return <div className="spinner-container">
            <Image src={spinner} alt="spinner" className="spinner" />
        </div>
    }

    const content = companiesList.length === 0 && !notFindContainer ?
        <AboutUsSection aboutUsDescription={aboutUsData} /> :
        renderCompaniesContent()

    return (
        <DefaultLayout title="">
            <div className={styles.breadcrumbsWrapper}>
                <Breadcrumbs
                    labelsToUppercase
                    rootLabel={'Resources'}
                    //omitRootLabel={true}
                    transformLabel={(title) => "\xa0" + title + "\xa0" + '/'}
                />
            <span className={styles.lastBreadcrumbsLabel}> {globalPageTitle.title} </span>
            </div>
            
            <section className={styles.wrapper} >
                <PageTitle title={globalPageTitle.title || pageData?.title} subTitle='Human Corridor' />
                <SearchFormSection
                    selectData={services}
                    url={pageData?.apiUrl}
                    defaultValue={pageData?.title}
                    {...{ urlCategories }}
                    {...{ setCompaniesList }}
                    {...{ setIsFetching }}
                    {...{ showNotFindContainer }}
                    resetCurrentPageToStart={() => setCurrentPage(1)}
                />

                {isFetching ? renderIsFetching() : content}
                {companiesList.length > 0 && <Paginate
                    {...{ pageNumbers }}
                    {...{ paginate }}
                    {...{ currentPage }}
                />}
            </section>

        </DefaultLayout>

    );
}

export default SubCategoryPageWithSearchForm;


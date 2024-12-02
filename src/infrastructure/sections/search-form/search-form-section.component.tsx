import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";

import FormInput from '../../components/form-components/form-input/from-input.component';
import InputLabel from '../../components/form-components/input-label/from-input.component';
import Select from "../../components/form-components/select/select.component"
import Button from '../../components/button/button.component';

import GlobalSubcategoryStructure from "../../../interfaces"
import * as apiUrls from "../../../pages/api/urls"
import axiosFetch from "../../../axios"
import mapPoint from '../../../assets/images/map-point.svg';
import spinner from '../../../assets/images/spinner.gif';
import { getGlobalPageTitle, getGlobalSearchCategory, getGlobalSearchCity } from "../../../store/selectors/mainSelector"
import {
  showCompanyBrickOnlyDescription,
  setEmergencyText,
  setPageTitle
} from "../../../store/actionCreators/mainActionCreator";
import { scrollToElement } from "../../../hooks/useScrollToElem"
import { setGlobalSearchCategory, setGlobalSearchCity, setGlobalSearchCompanies } from "../../../store/actionCreators/mainActionCreator";

import styles from './styles.module.scss';

export interface SearchCardFormSectionProps {
  globalTitle?: string,
  selectData?: GlobalSubcategoryStructure[],
  url?: string
  defaultValue?: string
  setCompaniesList?: any;
  setCategoriesList?: any;
  setIsFetching?: any;
  showNotFindContainer?: any;
  urlCategories?: string
  resetCurrentPageToStart?: any
  myCategoryId?: number
};

const SearchCardFormSection: React.FC<SearchCardFormSectionProps> = ({
  selectData,
  url,
  defaultValue,
  globalTitle,
  setCompaniesList,
  // setCategoriesList,
  setIsFetching,
  showNotFindContainer,
  urlCategories,
  resetCurrentPageToStart,
  myCategoryId = 0
}) => {

  const [selectedItem, setSelectedValue] = useState({ title: defaultValue, index: 1 })
  const [selectedCategory, setSelectedCategory] = useState({ title: "All", index: 0 })
  const [loadingCategoryList, setLoadingCategoryList] = useState(false)

  const globalPageTitle = useSelector(getGlobalPageTitle);
  const globalSearchCategory = useSelector(getGlobalSearchCategory);
  const globalSearchCity = useSelector(getGlobalSearchCity);

  const dispatch = useDispatch();

  const [categoriesList, setCategoriesList] = useState([])
  const [cityValue, setCityValue] = useState(globalSearchCity)
  const [citiesList, setCitiesList] = useState([])

  useEffect(() => {
    dispatch(setPageTitle(defaultValue, 1))
    let categoryIdByDefault
    if (globalPageTitle.title.length > 0) {
      categoryIdByDefault = selectData?.find(item => item.title === globalPageTitle.title)
    } else {
      categoryIdByDefault = selectData?.find(item => item.apiUrl === url)
    }

    const URL_CATEGORIES = apiUrls.default?.[urlCategories as keyof typeof apiUrls.default]
    const replacedText = myCategoryId > 0 ? myCategoryId || "" : categoryIdByDefault?.myCategoryId || ""
    const finalUrlCategories = URL_CATEGORIES.replace(":type", replacedText.toString());

    async function fetchCategories() {
      await axiosFetch(finalUrlCategories).then((result) => {
        const allSelectedCategory: any = ["All", ...result];

        setCategoriesList(allSelectedCategory)

        if (allSelectedCategory[0]) {
          setSelectedCategory(allSelectedCategory[0])
        }
      })
    }

    fetchCategories()

  }, [])

  const fetchApi = async () => {
    setIsFetching(true)
    showNotFindContainer(false)
    dispatch(setGlobalSearchCity(cityValue))

    resetCurrentPageToStart()
    const isShowCompanyBrickOnlyDescription = globalPageTitle.title === "Know Your Rights"

    // console.log('globalPageTitle', globalPageTitle.title);
    // console.log('selectedItem', selectedItem);
    dispatch(showCompanyBrickOnlyDescription(isShowCompanyBrickOnlyDescription))

    if (selectedItem.title === 'Emergency Medical') {
      fetchEmergencyBannerInfo();
    }
    fetchCompanyList()
  }

  const fetchEmergencyBannerInfo = async () => {
    const URL_EMERGENCY_MESSAGE = apiUrls.default?.['HEALTH_EMERGENCY_MESSAGE'];

    await axiosFetch(`${URL_EMERGENCY_MESSAGE}${cityValue}`).then((result) => {
      dispatch(setEmergencyText(result))
    })
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode === 13) {
      fetchApi()
    }
  }

  const fetchCategories = (index: number) => {
    dispatch(setGlobalSearchCategory())
    setLoadingCategoryList(true)
    const URL_CATEGORIES = apiUrls.default?.[urlCategories as keyof typeof apiUrls.default]
    const finalUrlCategories = URL_CATEGORIES.replace(":type", index.toString());

    axiosFetch(finalUrlCategories).then((result) => {
      const allSelectedCategory: any = ["All", ...result];

      setCategoriesList(allSelectedCategory)
      setLoadingCategoryList(false)

      if (allSelectedCategory[0]) {
        setSelectedCategory(allSelectedCategory[0])
      }

    }).catch(() => {
      setLoadingCategoryList(false)
    });

  }

  const fetchCompanyList = () => {
    const getApiUrl = selectData?.find(item => item.title === selectedItem.title)
    const getUrl = getApiUrl?.apiUrl || url
    const URL = apiUrls.default?.[getUrl as keyof typeof apiUrls.default]
    const finalUrl = `${URL}${cityValue.toLowerCase()}`

    const customCategory = selectedCategory?.title || selectedCategory
    const customFinalApiUrl = finalUrl.replace(":category", customCategory.toString());

    axiosFetch(customFinalApiUrl).then((result) => {

      setIsFetching(false)
      setCompaniesList(result);
      dispatch(setGlobalSearchCompanies(result)) 
      if (result.length === 0) {
        showNotFindContainer(true)
      }
      setTimeout(() => {
        scrollToElement("searchPanel")
      }, 500);

    }).catch(() => {

      showNotFindContainer(true)
      setIsFetching(false)

    });
  }
  const afterSelectFetchCategories = (value: any) => {
    setSelectedValue(value)
    fetchCategories(value.index)
  }

  const onCityChange = (value: string) => {
    const URL = apiUrls.default?.["CITIES_LIST"]
    axiosFetch(`${URL}${value}`).then((result) => {
      setCitiesList(result)
    }).catch(() => {
      setCitiesList([])
    });
  }

  const haveCity = citiesList.find((city: any) => city.cityName === cityValue)
  const disabled = cityValue.length === 0 || !haveCity;

  return (
    <section className={styles.wrapper} id="searchPanel">
      <div className={styles.inner} onKeyPress={cityValue.length === 0 ? () => { } : handleKeyPress}>
        <div className={styles.columnWrapper}>
          <InputLabel label='City' />
          <FormInput
            name={'city'}
            id={'city'}
            type={'text'}
            valueByDefault={cityValue}
            insertedValue={setCityValue}
            imageBackground={mapPoint}
            onChange={onCityChange}
            placeholder={'E.g. Des Moines'}
            cities={citiesList || []}
          />
        </div>

        <div className={styles.columnWrapper}>
          <InputLabel label={`Type of  ${globalPageTitle.title}`} />
          <Select
            items={selectData}
            // defaultRequestByFirstSubCategory={selectData[0] }
            selectedItem={afterSelectFetchCategories}
            // defaultValue={selectedItem.title}
            defaultValue={globalPageTitle.title || selectedItem.title}
          />
        </div>

        <div className={styles.columnWrapper}>
          <InputLabel label='Category' />
          <div className={styles.spinnerSelect}>
            {loadingCategoryList && <Image src={spinner} alt="spinner" className="spinner" />}
            <Select
              items={categoriesList}
              // defaultRequestByFirstSubCategory={0}
              selectedItem={setSelectedCategory}
              defaultValue={globalSearchCategory || categoriesList[0]}
              blockElement={!!categoriesList[0]}
              opacity={loadingCategoryList}
            />
          </div>

        </div>

        <Button
          backBtn={false} 
          label='Search'
          onClick={() => fetchApi()}
          {...{ disabled }}        
          />

      </div>
    </section>
  );
};

export default SearchCardFormSection;
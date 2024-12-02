import {
  SET_API_URL,
  SET_PAGE_TITLE,
  SHOW_COMPANY_BRICK_ONLY_DESCRIPTION,
  SET_EMERGENCY_TEXT,
  SET_GLOBAL_SEARCH_CATEGORY,
  SET_GLOBAL_SEARCH_CITY,
  SET_GLOBAL_SEARCH_COMPANIES
} from "../actions";

export const setGlobalApiUrl = (apiUrl) => {

  return { type: SET_API_URL, payload: apiUrl };
};

export const setPageTitle = (title, myCategoryId) => {
  return { type: SET_PAGE_TITLE, payload: { title, myCategoryId } };
}

export const setGlobalSearchCategory = (title = "") => {
  return { type: SET_GLOBAL_SEARCH_CATEGORY, payload: title };
}

export const setGlobalSearchCity = (city = "") => {
  return { type: SET_GLOBAL_SEARCH_CITY, payload: city };
}

export const setGlobalSearchCompanies = (companies = []) => {
  return { type: SET_GLOBAL_SEARCH_COMPANIES, payload: companies };
}


export const showCompanyBrickOnlyDescription = (state) => {
  return { type: SHOW_COMPANY_BRICK_ONLY_DESCRIPTION, payload: state };
}

export const setEmergencyText = (text) => {
  return { type: SET_EMERGENCY_TEXT, payload: text };
}

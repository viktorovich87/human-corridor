import {
  SET_API_URL,
  SET_PAGE_TITLE,
  SHOW_COMPANY_BRICK_ONLY_DESCRIPTION,
  SET_EMERGENCY_TEXT,
  SET_GLOBAL_SEARCH_CATEGORY,
  SET_GLOBAL_SEARCH_CITY,
  SET_GLOBAL_SEARCH_COMPANIES
} from "../actions";

const initialState = {
  apiUrl: "",
  globalPageTitle: {
    title: "",
    myCategoryId: 0,
  },
  globalSearchCategory: "",
  globalSearchCity: "",
  showOnlyBrick: false,
  emergencyText: "",
  globalSearchCompanies: []
};

export default function mainReducer(state = initialState, action) {

  switch (action.type) {

    case SET_API_URL: {
      return { ...state, apiUrl: action.payload };
    }

    case SET_PAGE_TITLE: {
      return {
        ...state,
        globalPageTitle: {
          title: action.payload.title,
          myCategoryId: action.payload.myCategoryId
        }
      };
    }

    case SET_GLOBAL_SEARCH_CATEGORY: {
      return { ...state, globalSearchCategory: action.payload };
    }

    case SET_GLOBAL_SEARCH_CITY: {
      return { ...state, globalSearchCity: action.payload };
    }

    case SET_GLOBAL_SEARCH_COMPANIES: {
      return { ...state, globalSearchCompanies: action.payload };
    }

    case SHOW_COMPANY_BRICK_ONLY_DESCRIPTION: {
      return { ...state, showOnlyBrick: action.payload };
    }

    case SET_EMERGENCY_TEXT: {
      return { ...state, emergencyText: action.payload };
    }
    default:
      return state;
  }
}

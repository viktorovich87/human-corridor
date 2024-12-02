const getMainReducerState = (state) => {
    return state?.mainReducer;
};

export const getTestText = (state) => {
    return getMainReducerState(state).testText;
}; 

export const getGlobalPageTitle = (state) => {
    return getMainReducerState(state).globalPageTitle  ?? "";
}; 

export const getGlobalSearchCategory = (state) => {
    return getMainReducerState(state).globalSearchCategory  ?? "";
};

export const getGlobalSearchCity = (state) => {
    return getMainReducerState(state).globalSearchCity  ?? "";
};

export const getGlobalSearchCompanies = (state) => {
    return getMainReducerState(state).globalSearchCompanies  ?? "";
};

export const getShowOnlyBrick = (state) => {
    return getMainReducerState(state).showOnlyBrick  ?? false;
}; 

export const getEmergencyText = (state) => {
    return getMainReducerState(state).emergencyText  ?? "";
}; 
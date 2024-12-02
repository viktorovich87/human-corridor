const housingServices = [
  {
    "icon": require("../assets/images/icons/housing/electrical_services.svg") as any,
    "title": "Utility Assistance",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/housing/utility-assistance",
    "apiUrl": "HOUSING_UTILITIES",
    "getCompanyInfo": "HOUSING_UTILITIES_ID",
    "page": "utility-assistance",
    "myCategoryId": 28
  },
  {
    "icon": require("../assets/images/icons/housing/house.svg") as any,
    "title": "Housing Assistance",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/housing/assistance",
    "apiUrl": "HOUSING_ASSISTANCE",
    "getCompanyInfo": "HOUSING_ASSISTANCE_ID",
    "page": "assistance",
    "myCategoryId": 27
  },
  {
    "icon": require("../assets/images/icons/housing/payments.svg") as any,
    "title": "Rent Payment Assistance",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/housing/rent-payment",
    "apiUrl": "HOUSING_RENT_ASSISTANCE",
    "getCompanyInfo": "HOUSING_RENT_ASSISTANCE_ID",
    "page": "rent-payment",
    "myCategoryId": 26
  }
];

export default housingServices;
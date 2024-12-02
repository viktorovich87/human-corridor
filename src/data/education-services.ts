const educationServices = [
  {
    "icon": require("../assets/images/icons/education/human-male-board.svg") as any,
    "title": "Schools",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/education/school",
    "apiUrl": "EDUCATION_SCHOOL",
    "getCompanyInfo": "EDUCATION_SCHOOL_ID",
    "page": "school",
    "myCategoryId": 10
  },
  {
    "icon": require("../assets/images/icons/education/human-female-boy.svg") as any,
    "title": "Pre-Schools",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/education/kindergarten",
    "apiUrl": "EDUCATION_KINDERGARTEN",
    "getCompanyInfo": "EDUCATION_KINDERGARTEN_ID",
    "page": "kindergarten",
    "myCategoryId": 10
  },
  {
    "icon": require("../assets/images/icons/education/build_circle.svg") as any,
    "title": "Trade Schools",
    "description": "Lorem ipsum dolor sit amet, consecte adipiscing elit",
    "href": "/education/trade",
    "apiUrl": "EDUCATION_TRADE_SCHOOL",
    "getCompanyInfo": "EDUCATION_TRADE_SCHOOL_ID",
    "page": "trade",
    "myCategoryId": 11
  }
];

export default educationServices;
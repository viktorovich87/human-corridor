const API_URL = "http://44.235.135.139:4200"

const FOOD_BANK = API_URL + "/food/bank/:category/in/";
const FOOD_SOUP_KITCHEN = API_URL + "/food/soup/:category/in/";
const FOOD_STAMPS = API_URL + "/food/stamps/:category/in/";
const FOOD_COOKING_CLASSES = API_URL + "/food/free/classes/:category/in/";
const FOOD_GREENS = API_URL + "/food/free/greens/:category/in/";

const FOOD_BANK_ID = API_URL + "/food/bank/";
const FOOD_SOUP_KITCHEN_ID = API_URL + "/food/soup/";
const FOOD_STAMPS_ID = API_URL + "/food/stamps/";
const FOOD_COOKING_CLASSES_ID = API_URL + "/food/free/classes/";
const FOOD_GREENS_ID = API_URL + "/food/free/greens/";

const FOOD_CATEGORIES = API_URL + "/food/:type/categories/";


const COOKING_CLASSES = API_URL + "/food/cooking-glasses/in/";
const VEGGIE_RX = API_URL + "/food/veggie-rx/in/";


const COMMUNITY_CHILD_CARE = API_URL + "/community/child/care/:category/in/";
const COMMUNITY_CHILD_CARE_ID = API_URL + "/community/child/care/";
const COMMUNITY_DIAPER = API_URL + "/community/diaper/bank/:category/in/";
const COMMUNITY_DIAPER_ID = API_URL + "/community/diaper/bank/";
const COMMUNITY_CENTER = API_URL + "/community/center/:category/in/";
const COMMUNITY_CENTER_ID = API_URL + "/community/center/";
const COMMUNITY_SHELTER = API_URL + "/community/shelter/:category/in/";
const COMMUNITY_SHELTER_ID = API_URL + "/community/shelter/";
const COMMUNITY_MATERIAL_GOODS = API_URL + "/community/material/goods/:category/in/";
const COMMUNITY_MATERIAL_GOODS_ID = API_URL + "/community/material/goods/";

const COMMUNITY_MENTAL_HEALTH = API_URL + "/community/mental/health/:category/in/:locality";
const COMMUNITY_MENTAL_HEALTH_ID = API_URL + "/community/mental/health/:placeId";
// const RELOCATE_TO_COUNTRY1 = API_URL + "/escape/from/:city1/:country1/to/:city2/:country2";
// const RELOCATE_TO_CITY1 = API_URL + "/escape/from/:city1/to/:city2/";

// const RELOCATE_TO_COUNTRY = (city1: string, country1: string, city2: string, country2: string) => {
//     return API_URL + `/escape/from/:${city1}/:${country1}/to/:${city2}/${country2}`
// }

// const RELOCATE_TO_CITY = (city1: string, country1: string, city2: string, country2: string) => {
//     return API_URL + `/escape/from/:${city1}/:${country1}/to/:${city2}/${country2}`
// }

const LEGAL_EMIGRATION = API_URL + "/legal/emigration/:category/in/";
const LEGAL_CRIMINAL_DEFENCE = API_URL + "/legal/criminal/defence/:category/in/";
const LEGAL_DIVORCE = API_URL + "/legal/divorce/:category/in/";
const LEGAL_YOUR_RIGHTS = API_URL + "/legal/rights/:category/in/";


const LEGAL_EMIGRATION_ID = API_URL + "/legal/emigration/";
const LEGAL_CRIMINAL_DEFENCE_ID = API_URL + "/legal/criminal/defence/";
const LEGAL_DIVORCE_ID = API_URL + "/legal/divorce/";
const LEGAL_YOUR_RIGHTS_ID = API_URL + "/legal/rights/";
const LEGAL_HUMAN_RIGHTS = API_URL + "/legal/human/rights/:category/in/";
const LEGAL_HUMAN_RIGHTS_ID = API_URL + "/legal/human/rights/";
const LEGAL_RESTRAINING_ORDERS = API_URL + "/legal/restraining/orders/:category/in/";
const LEGAL_RESTRAINING_ORDERS_ID = API_URL + "/legal/restraining/orders/";
const LEGAL_DOMESTIC_VIOLENCE = API_URL + "/legal/domestic/violence/:category/in/";
const LEGAL_DOMESTIC_VIOLENCE_ID = API_URL + "/legal/domestic/violence/";
const LEGAL_HUMAN_TRAFFICKING = API_URL + "/legal/human/trafficking/:category/in/";
const LEGAL_HUMAN_TRAFFICKING_ID = API_URL + "/legal/human/trafficking/";
const LEGAL_CHILD_SUPPORT = API_URL + "/legal/child/support/:category/in/";
const LEGAL_CHILD_SUPPORT_ID = API_URL + "/legal/child/support/";
const LEGAL_CHILD_PROTECTION = API_URL + "/legal/child/protection/:category/in/";
const LEGAL_CHILD_PROTECTION_ID = API_URL + "/legal/child/protection/";
const LEGAL_VULNERABLE_ADULT_PROTECTION = API_URL + "/legal/vulnerable/adult/protection/:category/in/";
const LEGAL_VULNERABLE_ADULT_PROTECTION_ID = API_URL + "/legal/vulnerable/adult/protection/";

const EDUCATION_KINDERGARTEN = API_URL + "/education/kindergarten/:category/in/";
const EDUCATION_SCHOOL = API_URL + "/education/school/:category/in/";
// const EDUCATION_TRADE = API_URL + "/education/trade/:category/in/";


const EDUCATION_KINDERGARTEN_ID = API_URL + "/education/kindergarten/";
const EDUCATION_SCHOOL_ID = API_URL + "/education/school/";
const EDUCATION_TRADE_SCHOOL = API_URL + "/education/school/trade/:category/in/";
const EDUCATION_TRADE_SCHOOL_ID = API_URL + "/education/school/trade/";

//local emergency services contact data
const HEALTH_EMERGENCY = API_URL + "/health/emergency/:category/in/";
// GET 911 Message Banner
const HEALTH_EMERGENCY_MESSAGE = API_URL + "/emergency/in/";
// const HEALTH_GENERAL = API_URL + "/health/general/:category/in/";
const HEALTH_MENTAL = API_URL + "/health/mental/:category/in/";
const HEALTH_DRUGS = API_URL + "/health/drugs/:category/in/";
const HEALTH_ABUSE = API_URL + "/health/abuse/domestic/:category/in/";
const HEALTH_SEX_ABUSE = API_URL + "/health/abuse/sexual/:category/in/";
const HEALTH_SUPPLIES = API_URL + "/health/supplies/:category/in/";
const HEALTH_MENTAL_ID = API_URL + "/health/mental/";
const HEALTH_DRUGS_ID = API_URL + "/health/drugs/";

const HEALTH_ABUSE_ID = API_URL + "/health/abuse/domestic/";
const HEALTH_SEX_ABUSE_ID = API_URL + "/health/abuse/sexual/";
const HEALTH_SUPPLIES_ID = API_URL + "/health/supplies/";
const HEALTH_COVERAGE = API_URL + "/health/coverage/:category/in/";
const HEALTH_COVERAGE_ID = API_URL + "/health/coverage/";
const HEALTH_AGING = API_URL + "/health/aging/:category/in/";
const HEALTH_AGING_ID = API_URL + "/health/aging/";

const HEALTH_EMERGENCY_ID = API_URL + "/health/emergency/";
const HEALTH_PHYSICAL = API_URL + "/health/physical/:category/in/";
const HEALTH_PHYSICAL_ID = API_URL + "/health/physical/";

const DISABILITY_DEVELOPMENTAL = API_URL + "/disability/developmental/:category/in/";
const DISABILITY_DEVELOPMENTAL_ID = API_URL + "/disability/developmental/";
const DISABILITY_HEARING = API_URL + "/disability/hearing/:category/in/";
const DISABILITY_HEARING_ID = API_URL + "/disability/hearing/";
const DISABILITY_VISION = API_URL + "/disability/vision/:category/in/";
const DISABILITY_VISION_ID = API_URL + "/disability/vision/";

const VETERANS_CATEGORIES = API_URL + "/veterans/:type/categories";
const NATURAL_CATEGORIES = API_URL + "/disaster/:type/categories";//need to change when will be API
const NATURAL = API_URL + "/disaster/:category/in/";
const VETERANS = API_URL + "/veterans/:category/in/";
const VETERANS_ID = API_URL + "/veterans/";
const NATURAL_ID = API_URL + "/disaster/";

const COMMUNITY_CATEGORIES = API_URL + "/community/:type/categories";
const LEGAL_CATEGORIES = API_URL + "/legal/:type/categories";
const EDUCATION_CATEGORIES = API_URL + "/education/:type/categories";
const HEALTH_CATEGORIES = API_URL + "/health/:type/categories";
const DISABILITY_CATEGORIES = API_URL + "/disability/:type/categories";
// const FINANCIAL_ASSISTANCE = API_URL + "/financial/:type/categories"; //need to change when will be API
const HOUSING_ASSISTANCE_CATEGORIES = API_URL + "/housing/:type/categories"; //need to change when will be API


const HOUSING_UTILITIES = API_URL + "/housing/utilities/:category/in/"
const HOUSING_UTILITIES_ID = API_URL + "/housing/utilities/"
const HOUSING_ASSISTANCE = API_URL + "/housing/assistance/:category/in/"
const HOUSING_ASSISTANCE_ID = API_URL + "/housing/assistance/"
const HOUSING_RENT_ASSISTANCE = API_URL + "/housing/rent/assistance/:category/in/"
const HOUSING_RENT_ASSISTANCE_ID = API_URL + "/housing/rent/assistance/"

const CITIES_LIST = API_URL + "/cities/?search=";

const data = {
    FOOD_BANK,
    FOOD_SOUP_KITCHEN,
    FOOD_STAMPS,
    COOKING_CLASSES,
    VEGGIE_RX,
    // RELOCATE_TO_COUNTRY,
    // RELOCATE_TO_CITY,
    CITIES_LIST,
    LEGAL_EMIGRATION,
    LEGAL_CRIMINAL_DEFENCE,
    LEGAL_DIVORCE,
    LEGAL_YOUR_RIGHTS,
    EDUCATION_KINDERGARTEN,
    EDUCATION_SCHOOL,
    // EDUCATION_TRADE,
    HEALTH_EMERGENCY,
    HEALTH_EMERGENCY_MESSAGE,
    // HEALTH_GENERAL,
    HEALTH_MENTAL,
    HEALTH_DRUGS,
    HEALTH_ABUSE,
    HEALTH_SEX_ABUSE,
    HEALTH_SUPPLIES,
    LEGAL_EMIGRATION_ID,
    LEGAL_CRIMINAL_DEFENCE_ID,
    LEGAL_DIVORCE_ID,
    LEGAL_YOUR_RIGHTS_ID,
    LEGAL_HUMAN_RIGHTS,
    LEGAL_HUMAN_RIGHTS_ID,
    LEGAL_RESTRAINING_ORDERS,
    LEGAL_RESTRAINING_ORDERS_ID,
    LEGAL_DOMESTIC_VIOLENCE,
    LEGAL_DOMESTIC_VIOLENCE_ID,
    LEGAL_HUMAN_TRAFFICKING,
    LEGAL_HUMAN_TRAFFICKING_ID,
    LEGAL_CHILD_SUPPORT,
    LEGAL_CHILD_SUPPORT_ID,
    LEGAL_CHILD_PROTECTION,
    LEGAL_CHILD_PROTECTION_ID,
    LEGAL_VULNERABLE_ADULT_PROTECTION,
    LEGAL_VULNERABLE_ADULT_PROTECTION_ID,

    EDUCATION_KINDERGARTEN_ID,
    EDUCATION_SCHOOL_ID,
    EDUCATION_TRADE_SCHOOL,
    EDUCATION_TRADE_SCHOOL_ID,
    HEALTH_MENTAL_ID,
    HEALTH_DRUGS_ID,

    HEALTH_ABUSE_ID,
    HEALTH_SEX_ABUSE_ID,
    HEALTH_SUPPLIES_ID,
    HEALTH_COVERAGE,
    HEALTH_COVERAGE_ID,
    HEALTH_AGING,
    HEALTH_AGING_ID,

    HEALTH_EMERGENCY_ID,
    HEALTH_PHYSICAL,
    HEALTH_PHYSICAL_ID,

    DISABILITY_DEVELOPMENTAL,
    DISABILITY_DEVELOPMENTAL_ID,
    DISABILITY_HEARING,
    DISABILITY_HEARING_ID,
    DISABILITY_VISION,
    DISABILITY_VISION_ID,

    VETERANS_CATEGORIES,
    VETERANS,
    NATURAL,
    VETERANS_ID,
    NATURAL_ID,
    NATURAL_CATEGORIES,

    FOOD_CATEGORIES,
    COMMUNITY_CATEGORIES,
    LEGAL_CATEGORIES,
    EDUCATION_CATEGORIES,
    HEALTH_CATEGORIES,
    DISABILITY_CATEGORIES,
    // FINANCIAL_ASSISTANCE,
    HOUSING_ASSISTANCE_CATEGORIES,

    HOUSING_UTILITIES,
    HOUSING_UTILITIES_ID,
    HOUSING_ASSISTANCE,
    HOUSING_ASSISTANCE_ID,
    HOUSING_RENT_ASSISTANCE,
    HOUSING_RENT_ASSISTANCE_ID,

    FOOD_BANK_ID,
    FOOD_SOUP_KITCHEN_ID,
    FOOD_STAMPS_ID,
    FOOD_COOKING_CLASSES,
    FOOD_COOKING_CLASSES_ID,
    FOOD_GREENS,
    FOOD_GREENS_ID,

    COMMUNITY_CHILD_CARE,
    COMMUNITY_CHILD_CARE_ID,
    COMMUNITY_DIAPER,
    COMMUNITY_DIAPER_ID,
    COMMUNITY_CENTER,
    COMMUNITY_CENTER_ID,
    COMMUNITY_SHELTER,
    COMMUNITY_SHELTER_ID,
    COMMUNITY_MATERIAL_GOODS,
    COMMUNITY_MATERIAL_GOODS_ID,
    COMMUNITY_MENTAL_HEALTH,
    COMMUNITY_MENTAL_HEALTH_ID
}

export default data;
import rus from "../assets/images/icons/flags/russia.svg";
import eng from "../assets/images/icons/flags/england.svg";
import jpn from "../assets/images/icons/flags/japan.svg";
import ger from "../assets/images/icons/flags/germany.svg";
import jan from "../assets/images/icons/flags/indonesia.svg";
import frn from "../assets/images/icons/flags/france.svg";
import vie from "../assets/images/icons/flags/vietnam.svg";
import spn from "../assets/images/icons/flags/spain.svg";
import ukr from "../assets/images/icons/flags/ukraine.svg";


export const flagsByLang = (translationOnSite: string) => {
  switch(translationOnSite as any) {
    case 'RUS': return rus;
    case 'ENG': return eng;
    case 'JPN': return jpn;
    case 'GER': return ger;
    case 'JAN': return jan;
    case 'FRN': return frn;
    case 'VIE': return vie;
    case 'SPN': return spn;
    case 'UKR': return ukr;
    default: return '';
  }
}
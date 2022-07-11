import { Headers_titles, Home_page, Mid_menu, Product } from "./interfaces";

const SELECTORS_HOME_PAGE: Home_page = {
  CATALOG: "span.b-main-navigation__text",
};

const SELECTORS_MID_MENU: Mid_menu = {
  ELECTRONICS: "ul [data-id='1']",
  AUTO_MOTO: "ul [data-id='6']",
  WORK_OFFICE: "ul [data-id='9']",
};

const SELECTORS_PRODUCT: Product = {
  TABLETS: "a[href$='tabletpc']",
  CONSOLE: "a[href$='console']",
  CAR_BATTERY: "a[href$='carbattery']",
  OFFICE_CHAIRS: "div[data-id='9'] a[href$='office_chair']",
  IP_CAMERAS: "div[data-id='9'] a[href$='ipcamera']",
};

const SELECTORS_HEADERS_TITLES: Headers_titles = {
  HEADERS_PRODUCT: "[class='schema-header']",
};

export {
  SELECTORS_HOME_PAGE,
  SELECTORS_MID_MENU,
  SELECTORS_HEADERS_TITLES,
  SELECTORS_PRODUCT,
};

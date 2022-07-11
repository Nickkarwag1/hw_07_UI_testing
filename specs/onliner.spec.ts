import { driver } from "../config/webdriver";
import { BASE_URL } from "../constants/url";
import { expect } from "chai";
import { TITLES } from "../constants/titles";
import {
  SELECTORS_HOME_PAGE,
  SELECTORS_MID_MENU,
  SELECTORS_HEADERS_TITLES,
  SELECTORS_PRODUCT,
} from "../constants/selectors";
import { LEFT_SIDE_BAR } from "../constants/leftSideBar";
import {
  clickCatalog,
  clickLeftSideMenu,
  clickMidMenu,
  clickProduct,
  getTitleProduct,
} from "../pages/catalog";

describe("Onliner tests", async () => {
  before("Catalog page should be opened", async () => {
    await driver.manage().window().maximize();
    await driver.get(BASE_URL);

    await clickCatalog(SELECTORS_HOME_PAGE.CATALOG);

    const catalogTitle = await driver.getTitle();
    expect(catalogTitle).to.eql(TITLES.CATALOG);
  });

  it("Tablets page should be opened", async () => {
    try {
      await clickMidMenu(SELECTORS_MID_MENU.ELECTRONICS);

      await clickLeftSideMenu(LEFT_SIDE_BAR.TABLETS_EBOOKS);

      await clickProduct(SELECTORS_PRODUCT.TABLETS);

      const getTitleTablets = await getTitleProduct(
        SELECTORS_HEADERS_TITLES.HEADERS_PRODUCT
      );
      expect(getTitleTablets).to.eql(TITLES.TABLETS);

      await driver.getWindowHandle();
    } catch (err: any) {
      console.log(err.message);
    }
  });

  it("Gaming consoles page should be opened", async () => {
    try {
      await clickMidMenu(SELECTORS_MID_MENU.ELECTRONICS);

      await clickLeftSideMenu(LEFT_SIDE_BAR.VIDEOGAMES);

      await clickProduct(SELECTORS_PRODUCT.CONSOLE);

      const getTitleConsole = await getTitleProduct(
        SELECTORS_HEADERS_TITLES.HEADERS_PRODUCT
      );
      expect(getTitleConsole).to.eql(TITLES.CONSOLE);

      await driver.getWindowHandle();
    } catch (err: any) {
      console.log(err.message);
    }
  });

  it("Batteries car page should be opened", async () => {
    try {
      await clickMidMenu(SELECTORS_MID_MENU.AUTO_MOTO);

      await clickLeftSideMenu(LEFT_SIDE_BAR.SPARES);

      await clickProduct(SELECTORS_PRODUCT.CAR_BATTERY);

      const getTitleCarBattery = await getTitleProduct(
        SELECTORS_HEADERS_TITLES.HEADERS_PRODUCT
      );
      expect(getTitleCarBattery).to.eql(TITLES.CAR_BATTERY);

      await driver.getWindowHandle();
    } catch (err: any) {
      console.log(err.message);
    }
  });

  it("Office chairs page should be opened", async () => {
    try {
      await clickMidMenu(SELECTORS_MID_MENU.WORK_OFFICE);

      await clickLeftSideMenu(LEFT_SIDE_BAR.OFFICE_FURNITURE);

      await clickProduct(SELECTORS_PRODUCT.OFFICE_CHAIRS);

      const getTitleOfficeChairs = await getTitleProduct(
        SELECTORS_HEADERS_TITLES.HEADERS_PRODUCT
      );
      expect(getTitleOfficeChairs).to.eql(TITLES.OFFICE_CHAIRS);

      await driver.getWindowHandle();
    } catch (err: any) {
      console.log(err.message);
    }
  });

  it("IP cameras page should be opened", async () => {
    try {
      await clickMidMenu(SELECTORS_MID_MENU.WORK_OFFICE);

      await clickLeftSideMenu(LEFT_SIDE_BAR.VIDEO_SURVEILLANCE);

      await clickProduct(SELECTORS_PRODUCT.IP_CAMERAS);

      const getTitleIpCameras = await getTitleProduct(
        SELECTORS_HEADERS_TITLES.HEADERS_PRODUCT
      );
      expect(getTitleIpCameras).to.eql(TITLES.IP_CAMERAS);

      await driver.quit();
    } catch (err: any) {
      console.log(err.message);
    }
  });
});

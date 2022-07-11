import { By, until, WebElement } from "selenium-webdriver";
import { driver } from "../config/webdriver";

async function clickCatalog(selector: string) {
  const elementCatalog: WebElement = await driver.findElement(By.css(selector));
  await driver.wait(until.elementIsVisible(elementCatalog));
  await elementCatalog.click();
}

async function clickMidMenu(selector: string) {
  const middleMenu = await driver.findElement(By.css(selector));
  await middleMenu.click();
}

async function clickLeftSideMenu(chapterName: string) {
  const leftMenu = await driver.findElement(
    By.xpath(
      `//div[contains(@class, 'list__aside-title') and normalize-space(text()) = '${chapterName}']`
    )
  );
  await driver.wait(until.elementIsVisible(leftMenu));
  await leftMenu.click();
}

async function clickProduct(selector: string) {
  const product = await driver.findElement(By.css(selector));
  await driver.wait(until.elementIsVisible(product));
  await product.click();
}

async function getTitleProduct(selector: string) {
  const titleProduct = await driver.findElement(By.css(selector));
  await driver.wait(until.elementIsVisible(titleProduct));
  return driver.getTitle();
}

export {
  clickCatalog,
  clickMidMenu,
  clickLeftSideMenu,
  clickProduct,
  getTitleProduct,
};

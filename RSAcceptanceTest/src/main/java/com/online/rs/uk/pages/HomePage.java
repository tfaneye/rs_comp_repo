package com.online.rs.uk.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by inet-tech on 10/01/18.
 */
public class HomePage extends BasePage {


    private By searchItemField = By.id("searchTerm");
    private By searchButtonField = By.id("btnSearch");
    private By itemDetailField = By.linkText("541-6781");
    private By quickSearchField = By.name("stocknum");
    private By qtyField = By.name("qty");
    private By basketButton = By.id("quickOrderBtn");

    public HomePage(WebDriver driver) {
        super(driver);
    }

    public SearchedItemDetailPage searchForAnItem(String name){

        driver.findElement(searchItemField).sendKeys(name);
        driver.findElement(searchButtonField).click();
        driver.findElement(itemDetailField).click();

        return new SearchedItemDetailPage(driver);

    }

    public MyBasketPage searchForItemByStockNumber(String itemNumber, String quantity){
        driver.findElement(quickSearchField).sendKeys(itemNumber);
        driver.findElement(qtyField).sendKeys(quantity);
        driver.findElement(basketButton).click();
        return new MyBasketPage(driver);
    }

    public SearchedItemDetailPage searchItemByCategory(String name){
        driver.findElement(searchItemField).sendKeys(name);
        driver.findElement(searchButtonField).click();

        return new SearchedItemDetailPage(driver);

    }



}

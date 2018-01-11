package com.online.rs.uk.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by inet-tech on 11/01/18.
 */
public class MyBasketPage extends BasePage {

    private String itemName = null;

    private By itemDetailsName = By.tagName("a");

    public MyBasketPage(WebDriver driver) {
        super(driver);
    }

    public String validateBasketItem(String itemDetails) {
        List<WebElement> itemTags = driver.findElements(itemDetailsName);
        for (WebElement itemTag : itemTags) {
            if (itemTag.getText().toLowerCase().contains(itemDetails.toLowerCase())) {
                itemName = itemTag.getText();
                break;
            }
        }
        return itemName;
    }
}

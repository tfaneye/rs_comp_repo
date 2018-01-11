package com.online.rs.uk.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by inet-tech on 11/01/18.
 */
public class SearchedItemDetailPage extends BasePage {

    private String realPrice;


    private By priceField = By.className("price");
    private By brandField = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/a[1]");
    private By selectBrandField = By.xpath("//*[@id=\"4294967118\"]/span[1]");

    private By applyFilterButtonField = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/div/div[2]/div/div[6]/rs-apply-button/button");
    private By brandNameField = By.linkText("Ansell");
    private By gloveSizeField = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/a[3]");
    private By sizeField = By.xpath("//*[@id=\"4292097927\"]/span[1]");
    private By applySizeFilter = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/div/div[2]/div/div[7]/rs-apply-button/button");
    private By gloveMaterialField = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/a[4]");
    private By selectGloveMaterialField = By.xpath("//*[@id=\"4293564101\"]/input");
    private By applyGloveMaterialField = By.xpath("//*[@id=\"filters\"]/div/div/rs-facets/div/div[2]/div/div[7]/rs-apply-button/button");


    public SearchedItemDetailPage(WebDriver driver) {
        super(driver);
    }

    public String validateSearchedItem(String price){

        List<WebElement> priceTags = driver.findElements(priceField);
        for (WebElement priceTag : priceTags) {
            if (priceTag.getText().contains(price)){
                realPrice = priceTag.getText();
                break;


            }
        }
        return realPrice;
    }

    public SearchedItemDetailPage filterItemByBrand(String name){
        driver.findElement(brandField).click();
        driver.findElement(selectBrandField).click();
        driver.findElement(applyFilterButtonField).click();
        return new SearchedItemDetailPage(driver);
    }

    public boolean validateFilter(String brand){
        return driver.getPageSource().toLowerCase().contains(brand.toLowerCase());
       /* WebElement brandElement = driver.findElement(brandNameField);
        return brandElement.getText().toLowerCase().contains(brand.toLowerCase());*/
    }

    public SearchedItemDetailPage filterByGloveSize(String gloveSize){
        driver.findElement(gloveSizeField).click();
        driver.findElement(sizeField).click();
        driver.findElement(applySizeFilter).click();


        return new SearchedItemDetailPage(driver);
    }

    public boolean validateGloveSizeFilter(String size){
        return driver.getPageSource().toLowerCase().contains(size.toLowerCase());
    }

    public SearchedItemDetailPage filterSearchByGloveMaterial(String name){
        driver.findElement(gloveMaterialField).click();
        driver.findElement(selectGloveMaterialField).click();
        driver.findElement(applyGloveMaterialField).click();

        return new SearchedItemDetailPage(driver);
    }

    public boolean validateFilterGloveMaterial(String gloveMaterial){
        return driver.getPageSource().toLowerCase().contains(gloveMaterial.toLowerCase());
    }
}

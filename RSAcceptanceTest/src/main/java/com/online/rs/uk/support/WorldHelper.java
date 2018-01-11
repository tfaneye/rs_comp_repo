package com.online.rs.uk.support;

import com.online.rs.uk.pages.BasePage;
import com.online.rs.uk.pages.HomePage;
import org.openqa.selenium.WebDriver;

/**
 * Created by inet-tech on 10/01/18.
 */
public class WorldHelper {

    private BasePage basePage;
    protected WebDriver driver;
    private HomePage homePage;

    public BasePage getBasePage(){
        if(basePage == null){
            basePage = new BasePage(driver);
        }
        return basePage;
    }

    public HomePage getHomePage(){
        if(homePage == null){
            homePage = new HomePage(driver);
        }
        return homePage;
    }
}

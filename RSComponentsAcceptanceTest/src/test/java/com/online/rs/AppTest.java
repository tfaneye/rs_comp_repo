package com.online.rs;

import com.online.rs.pages.BasePage;

import org.junit.Test;
import org.openqa.selenium.WebDriver;


/**
 * Unit test for simple App.
 */
public class AppTest
{

    private WebDriver driver;

    @Test
    public void Testsuite() {

        BasePage basePage = new BasePage(driver);

        basePage.initialiseBrowser().setUpBrowser();
    }

}

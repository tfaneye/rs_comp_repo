package com.online.rs;

import com.online.rs.pages.BasePage;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

public class RsTest {

    private WebDriver driver;

    @Test
    public void runTest(){

        BasePage basePage = new BasePage(driver);

        basePage.initialiseBrowser().setUpBrowser().loadHomePage();

    }
}

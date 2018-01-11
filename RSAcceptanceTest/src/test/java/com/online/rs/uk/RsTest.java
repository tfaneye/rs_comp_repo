package com.online.rs.uk;

import com.online.rs.uk.pages.BasePage;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

/**
 * Created by inet-tech on 10/01/18.
 */
public class RsTest {

    private WebDriver driver;

    @Test
    public void runTest(){

        BasePage basePage = new BasePage(driver);

        basePage.initialiseBrowser().setUpBrowser().loadHomePage();

    }
}

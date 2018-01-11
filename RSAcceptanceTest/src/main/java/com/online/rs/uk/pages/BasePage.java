package com.online.rs.uk.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

/**
 * Created by inet-tech on 10/01/18.
 */
public class BasePage {

    protected static WebDriver driver;
    private static FileInputStream fis;
    private static Properties prop = new Properties();

    public BasePage(WebDriver driver){

        this.driver = driver;

    }

    public BasePage initialiseBrowser() {

        if (driver == null){

            try {
                fis = new FileInputStream(System.getProperty("user.dir") + "/src/main/resources/env_data.properties");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }

            try {
                prop.load(fis);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        if (prop.getProperty("browser").toLowerCase().contains("chrome")){
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") +"/drivers/chromeDriver/chromedriver");
            driver = new ChromeDriver();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }else if (prop.getProperty("browser").toLowerCase().contains("firefox")){
            System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") +"/drivers/firefoxDriver/geckodriver");
            driver = new FirefoxDriver();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }

        return new BasePage(driver);
    }

    public BasePage setUpBrowser(){
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        return new BasePage(driver);

    }

    public void tearDownBrowser(){
        if (driver != null){
            driver.quit();
        }
    }

    public HomePage loadHomePage(){
        driver.navigate().to(prop.getProperty("appUrl"));
        return new HomePage(driver);

    }
}

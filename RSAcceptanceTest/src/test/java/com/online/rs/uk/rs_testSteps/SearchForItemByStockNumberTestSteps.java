package com.online.rs.uk.rs_testSteps;

import com.online.rs.uk.pages.HomePage;
import com.online.rs.uk.pages.MyBasketPage;
import com.online.rs.uk.support.WorldHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by inet-tech on 11/01/18.
 */
public class SearchForItemByStockNumberTestSteps {

    private final WorldHelper helper;
    private MyBasketPage myBasketPage;
    private HomePage homePage;

    public SearchForItemByStockNumberTestSteps(WorldHelper helper){
        this.helper = helper;

    }

    @Given("^I am on the default page of the application$")
    public void iAmOnTheDefaultPageOfTheApplication() throws Throwable {
        homePage = helper
                .getBasePage()
                .loadHomePage();
    }

    @When("^I search for an item by RS stock \"([^\"]*)\" and \"([^\"]*)\" and click on Add to Basket button$")
    public void iSearchForAnItemByRSStockAndAndClickOnAddToBasketButton(String number, String quantity) throws Throwable {
        myBasketPage = homePage
                .searchForItemByStockNumber(number, quantity);

    }

    @Then("^I should be able to see details of the item searched \"([^\"]*)\" in the basket$")
    public void iShouldBeAbleToSeeDetailsOfTheItemSearchedInTheBasket(String details) throws Throwable {
        //myBasketPage.validateBasketItem(details);

        Assert.assertEquals("No such item found", details, myBasketPage.validateBasketItem(details.toLowerCase()));

    }
}

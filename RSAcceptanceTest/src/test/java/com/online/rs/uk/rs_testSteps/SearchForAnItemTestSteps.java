package com.online.rs.uk.rs_testSteps;

import com.online.rs.uk.pages.HomePage;
import com.online.rs.uk.pages.SearchedItemDetailPage;
import com.online.rs.uk.support.WorldHelper;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

/**
 * Created by inet-tech on 10/01/18.
 */
public class SearchForAnItemTestSteps {

    private final WorldHelper helper;
    private HomePage homePage;
    private SearchedItemDetailPage searchItemDetailPage;

    public SearchForAnItemTestSteps(WorldHelper helper){
        this.helper = helper;
    }

    @Given("^I am on the home page of the application$")
    public void iAmOnTheHomePageOfTheApplication() throws Throwable {
        homePage = helper
                .getBasePage()
                .loadHomePage();
    }

    @When("^I search for an item by name$")
    public void iSearchForAnItemByName(DataTable table) throws Throwable {

        List<List<String>> productInfo = table.raw();
        String itemName = productInfo.get(1).get(0);

        searchItemDetailPage = homePage
                .searchForAnItem(itemName);

    }

    @Then("^I should be able to see the Item price$")
    public void iShouldBeAbleToSeeTheItemPrice(DataTable table) throws Throwable {

        List<List<String>> productInfo = table.raw();
        String itemPrice = productInfo.get(1).get(0);

        Assert.assertEquals("no such price", itemPrice, searchItemDetailPage.validateSearchedItem(itemPrice));
    }


}

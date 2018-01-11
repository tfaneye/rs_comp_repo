package com.online.rs.uk.rs_testSteps;

import com.online.rs.uk.pages.HomePage;
import com.online.rs.uk.pages.SearchedItemDetailPage;
import com.online.rs.uk.support.WorldHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by inet-tech on 11/01/18.
 */
public class FilterASearchByBrandTestSteps {

    private final WorldHelper helper;
    private HomePage homePage;
    private SearchedItemDetailPage searchedItemDetailPage;

    public FilterASearchByBrandTestSteps(WorldHelper helper) {
        this.helper = helper;
    }

    @Given("^I have searched for a product by category \"([^\"]*)\"$")
    public void iHaveSearchedForAProductByCategory(String categoryName) throws Throwable {
        searchedItemDetailPage = helper
                .getBasePage()
                .loadHomePage()
                .searchItemByCategory(categoryName);
    }

    @When("^I filter by brand \"([^\"]*)\"$")
    public void iFilterByBrand(String name) throws Throwable {
        searchedItemDetailPage
                .filterItemByBrand(name.toLowerCase());
    }

    @Then("^I should see the \"([^\"]*)\" in the description$")
    public void iShouldSeeTheInTheDescription(String brand) throws Throwable {
        Assert.assertTrue("No such brand name exist", searchedItemDetailPage.validateFilter(brand.toLowerCase()));
    }
}

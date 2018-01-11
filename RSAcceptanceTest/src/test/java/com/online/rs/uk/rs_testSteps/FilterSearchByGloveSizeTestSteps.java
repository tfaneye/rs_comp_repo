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
public class FilterSearchByGloveSizeTestSteps {

    private final WorldHelper helper;
    private HomePage homePage;
    private SearchedItemDetailPage searchedItemDetailPage;

    public FilterSearchByGloveSizeTestSteps(WorldHelper helper) {
        this.helper = helper;
    }

    @Given("^I a have searched for a particular product by category \"([^\"]*)\"$")
    public void iAHaveSearchedForAParticularProductByCategory(String categoryName) throws Throwable {
        searchedItemDetailPage = helper
                .getBasePage()
                .loadHomePage()
                .searchItemByCategory(categoryName);

    }

    @When("^I filter by glove size \"([^\"]*)\"$")
    public void iFilterByGloveSize(String gloveSize) throws Throwable {
        searchedItemDetailPage
                .filterByGloveSize(gloveSize);

    }

    @Then("^I should see the \"([^\"]*)\" in the Glove Size section$")
    public void iShouldSeeTheInTheGloveSizeSection(String size) throws Throwable {
        Assert.assertTrue(searchedItemDetailPage.validateGloveSizeFilter(size.toLowerCase()));

    }
}

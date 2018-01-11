package com.online.rs.uk.rs_testSteps;

import com.online.rs.uk.pages.SearchedItemDetailPage;
import com.online.rs.uk.support.WorldHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class FilterGloveSearchBySafetyTestSteps {

    private final WorldHelper helper;
    private SearchedItemDetailPage searchedItemDetailPage;

    public FilterGloveSearchBySafetyTestSteps(WorldHelper helper) {
        this.helper = helper;
    }

    @Given("^I have searched for an item by category \"([^\"]*)\"$")
    public void iHaveSearchedForAnItemByCategory(String categoryName) throws Throwable {
        searchedItemDetailPage = helper
                .getBasePage()
                .loadHomePage()
                .searchItemByCategory(categoryName);
    }

    @When("^I filter by Glove Material \"([^\"]*)\"$")
    public void iFilterByGloveMaterial(String name) throws Throwable {
        searchedItemDetailPage
                .filterSearchByGloveMaterial(name);
    }

    @Then("^I should see the \"([^\"]*)\" in Glove Material column$")
    public void iShouldSeeTheInGloveMaterialColumn(String gloveMaterial) throws Throwable {
        Assert.assertTrue("No such item found", searchedItemDetailPage.validateFilterGloveMaterial(gloveMaterial.toLowerCase()));
    }
}

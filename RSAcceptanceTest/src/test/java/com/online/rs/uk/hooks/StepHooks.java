package com.online.rs.uk.hooks;

import com.online.rs.uk.pages.BasePage;
import com.online.rs.uk.support.WorldHelper;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by inet-tech on 10/01/18.
 */
public class StepHooks {

    private BasePage basePage;
    private final WorldHelper helper;

    public StepHooks(WorldHelper helper){
        this.helper = helper;

    }

    @Before
    public void setUpTest(){
        basePage = helper
                .getBasePage()
                .initialiseBrowser()
                 .setUpBrowser();

    }

    @After
    public void cleanUpTest(){
        basePage
                .tearDownBrowser();

    }
}

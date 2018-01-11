package com.online.rs.uk;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by inet-tech on 10/01/18.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        dryRun = false,
        monochrome = true,
        plugin = {"pretty",
                "html:target/cucumber-reports/report-html",
                "json:target/cucumber-reports/report-json.json",
                "junit:target/cucumber-reports/report-xml.xml"},
        features = {"src/test/resources"}
        ,snippets = SnippetType.CAMELCASE
        ,tags = {"@wip"}
)

public class RsRunnerCukesTest {
}

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("rs_features/FilterSearchByBrand.feature");
formatter.feature({
  "line": 2,
  "name": "Filter search by brand name",
  "description": "As a customer\nI want to filter a search\nSo that I can group them by brand names",
  "id": "filter-search-by-brand-name",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Filter a search by brand name test",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I a have searched for a product by category \"\u003ccategoryName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by brand \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"\u003cbrand\u003e\" in the description",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "Test data",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data",
  "rows": [
    {
      "cells": [
        "categoryName",
        "name",
        "brand"
      ],
      "line": 12,
      "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;1"
    },
    {
      "cells": [
        "Reusable gloves",
        "Ansell",
        "Ansell"
      ],
      "line": 13,
      "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16313865980,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Filter a search by brand name test",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I a have searched for a product by category \"Reusable gloves\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by brand \"Ansell\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"Ansell\" in the description",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Reusable gloves",
      "offset": 45
    }
  ],
  "location": "FilterASearchByBrandTestSteps.iAHaveSearchedForAProductByCategory(String)"
});
formatter.result({
  "duration": 18169396103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ansell",
      "offset": 19
    }
  ],
  "location": "FilterASearchByBrandTestSteps.iFilterByBrand(String)"
});
formatter.result({
  "duration": 3994818451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ansell",
      "offset": 18
    }
  ],
  "location": "FilterASearchByBrandTestSteps.iShouldSeeTheInTheDescription(String)"
});
formatter.result({
  "duration": 3033051304,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 4.4.0-104-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027inettech-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-104-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506092 (733a02544d189e..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 63.0.3239.84, webStorageEnabled: true}\nSession ID: c32fcf90e4c064243c23fad6c5253ca7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\n\tat com.online.rs.uk.pages.SearchedItemDetailPage.validateFilter(SearchedItemDetailPage.java:63)\n\tat com.online.rs.uk.rs_testSteps.FilterASearchByBrandTestSteps.iShouldSeeTheInTheDescription(FilterASearchByBrandTestSteps.java:40)\n\tat ✽.Then I should see the \"Ansell\" in the description(rs_features/FilterSearchByBrand.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "duration": 174833537,
  "status": "passed"
});
formatter.uri("rs_features/FilterSearchByGloveSize.feature");
formatter.feature({
  "line": 2,
  "name": "Filter search by brand name",
  "description": "As a customer\nI want to filter a search\nSo that I can group them by brand names",
  "id": "filter-search-by-brand-name",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Filter a search by brand name test",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I a have searched for a particular product by category \"\u003ccategoryName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by glove size \"\u003cgloveSize\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"\u003csize\u003e\" in the Glove Size section",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "Test data",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data",
  "rows": [
    {
      "cells": [
        "categoryName",
        "gloveSize",
        "size"
      ],
      "line": 12,
      "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;1"
    },
    {
      "cells": [
        "Reusable gloves",
        "One Size",
        "One Size"
      ],
      "line": 13,
      "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6330651998,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Filter a search by brand name test",
  "description": "",
  "id": "filter-search-by-brand-name;filter-a-search-by-brand-name-test;test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I a have searched for a particular product by category \"Reusable gloves\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by glove size \"One Size\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"One Size\" in the Glove Size section",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Reusable gloves",
      "offset": 56
    }
  ],
  "location": "FilterSearchByGloveSizeTestSteps.iAHaveSearchedForAParticularProductByCategory(String)"
});
formatter.result({
  "duration": 12959881222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One Size",
      "offset": 24
    }
  ],
  "location": "FilterSearchByGloveSizeTestSteps.iFilterByGloveSize(String)"
});
formatter.result({
  "duration": 3236216569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One Size",
      "offset": 18
    }
  ],
  "location": "FilterSearchByGloveSizeTestSteps.iShouldSeeTheInTheGloveSizeSection(String)"
});
formatter.result({
  "duration": 987056435,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat com.online.rs.uk.rs_testSteps.FilterSearchByGloveSizeTestSteps.iShouldSeeTheInTheGloveSizeSection(FilterSearchByGloveSizeTestSteps.java:42)\n\tat ✽.Then I should see the \"One Size\" in the Glove Size section(rs_features/FilterSearchByGloveSize.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "duration": 737417877,
  "status": "passed"
});
formatter.uri("rs_features/SearchForAnItemByName.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for an item by name",
  "description": "As a customer\nI want to search for an item by name\nSo that I acn add them to basket",
  "id": "searching-for-an-item-by-name",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5916191468,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for an item test",
  "description": "",
  "id": "searching-for-an-item-by-name;search-for-an-item-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the home page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for an item by name",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 10
    },
    {
      "cells": [
        "RS Pro 125 mm Chrome Molybdenum Steel Circlip Pliers"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to see the Item price",
  "rows": [
    {
      "cells": [
        "price"
      ],
      "line": 13
    },
    {
      "cells": [
        "£11.01"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchForAnItemTestSteps.iAmOnTheHomePageOfTheApplication()"
});
formatter.result({
  "duration": 5694595545,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAnItemTestSteps.iSearchForAnItemByName(DataTable)"
});
formatter.result({
  "duration": 16644498793,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAnItemTestSteps.iShouldBeAbleToSeeTheItemPrice(DataTable)"
});
formatter.result({
  "duration": 763262448,
  "status": "passed"
});
formatter.after({
  "duration": 277293544,
  "status": "passed"
});
formatter.uri("rs_features/SearchForItemByRSStockNumber.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for an item byRS Stock Number using Quick Order search",
  "description": "As a customer\nI want to search for an item using RS Stock Number only\nSo that I can add item to basket",
  "id": "searching-for-an-item-byrs-stock-number-using-quick-order-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6420647316,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for an item by stock number test",
  "description": "",
  "id": "searching-for-an-item-byrs-stock-number-using-quick-order-search;search-for-an-item-by-stock-number-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the default page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for an item by RS stock \"912-0239\" and \"1\" and click on Add to Basket button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see details of the item searched \"FLIR E4 Thermal Imaging Camera, Temp Range: -20 → +250 °C 80 x 60pixel RS Cal\" in the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchForItemByStockNumberTestSteps.iAmOnTheDefaultPageOfTheApplication()"
});
formatter.result({
  "duration": 5115172329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "912-0239",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "SearchForItemByStockNumberTestSteps.iSearchForAnItemByRSStockAndAndClickOnAddToBasketButton(String,String)"
});
formatter.result({
  "duration": 9456308807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FLIR E4 Thermal Imaging Camera, Temp Range: -20 → +250 °C 80 x 60pixel RS Cal",
      "offset": 54
    }
  ],
  "location": "SearchForItemByStockNumberTestSteps.iShouldBeAbleToSeeDetailsOfTheItemSearchedInTheBasket(String)"
});
formatter.result({
  "duration": 27633789883,
  "status": "passed"
});
formatter.after({
  "duration": 299936665,
  "status": "passed"
});
});
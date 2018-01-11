$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("rs_features/FilterGloveSearchBySafety.feature");
formatter.feature({
  "line": 2,
  "name": "Filter search by Glove Material",
  "description": "As a customer\nI want to filter asearch\nSo that I can group items into glove material category",
  "id": "filter-search-by-glove-material",
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
  "name": "Filter a search by glove material test",
  "description": "",
  "id": "filter-search-by-glove-material;filter-a-search-by-glove-material-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I have searched for an item by category \"\u003ccategoryName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by Glove Material \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"\u003cgloveMaterial\u003e\" in Glove Material column",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "Test data",
  "description": "",
  "id": "filter-search-by-glove-material;filter-a-search-by-glove-material-test;test-data",
  "rows": [
    {
      "cells": [
        "categoryName",
        "name",
        "gloveMaterial"
      ],
      "line": 12,
      "id": "filter-search-by-glove-material;filter-a-search-by-glove-material-test;test-data;1"
    },
    {
      "cells": [
        "Reusable gloves",
        "Acrylic",
        "Acrylic"
      ],
      "line": 13,
      "id": "filter-search-by-glove-material;filter-a-search-by-glove-material-test;test-data;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11546409278,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Filter a search by glove material test",
  "description": "",
  "id": "filter-search-by-glove-material;filter-a-search-by-glove-material-test;test-data;2",
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
  "name": "I have searched for an item by category \"Reusable gloves\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filter by Glove Material \"Acrylic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"Acrylic\" in Glove Material column",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Reusable gloves",
      "offset": 41
    }
  ],
  "location": "FilterGloveSearchBySafetyTestSteps.iHaveSearchedForAnItemByCategory(String)"
});
formatter.result({
  "duration": 17242192743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrylic",
      "offset": 28
    }
  ],
  "location": "FilterGloveSearchBySafetyTestSteps.iFilterByGloveMaterial(String)"
});
formatter.result({
  "duration": 2997368830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrylic",
      "offset": 18
    }
  ],
  "location": "FilterGloveSearchBySafetyTestSteps.iShouldSeeTheInGloveMaterialColumn(String)"
});
formatter.result({
  "duration": 1540487118,
  "status": "passed"
});
formatter.after({
  "duration": 405148436,
  "status": "passed"
});
formatter.uri("rs_features/FilterSearchByBrand.feature");
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
  "name": "I have searched for a product by category \"\u003ccategoryName\u003e\"",
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
  "duration": 6616394263,
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
  "name": "I have searched for a product by category \"Reusable gloves\"",
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
      "offset": 43
    }
  ],
  "location": "FilterASearchByBrandTestSteps.iHaveSearchedForAProductByCategory(String)"
});
formatter.result({
  "duration": 19484866333,
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
  "duration": 2519151951,
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
  "duration": 1276727665,
  "status": "passed"
});
formatter.after({
  "duration": 213623280,
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
  "duration": 6711264309,
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
  "duration": 13400857852,
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
  "duration": 2843552944,
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
  "duration": 1367477935,
  "status": "passed"
});
formatter.after({
  "duration": 269454806,
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
  "duration": 7035511762,
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
  "duration": 5145036156,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAnItemTestSteps.iSearchForAnItemByName(DataTable)"
});
formatter.result({
  "duration": 14401460661,
  "status": "passed"
});
formatter.match({
  "location": "SearchForAnItemTestSteps.iShouldBeAbleToSeeTheItemPrice(DataTable)"
});
formatter.result({
  "duration": 655832454,
  "status": "passed"
});
formatter.after({
  "duration": 291338247,
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
  "duration": 7050694106,
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
  "duration": 6669776110,
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
  "duration": 8007060347,
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
  "duration": 31092051101,
  "status": "passed"
});
formatter.after({
  "duration": 204852669,
  "status": "passed"
});
});
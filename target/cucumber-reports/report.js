$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Auto1.feature");
formatter.feature({
  "line": 2,
  "name": "As a customer, I want to select the type of car I want to sell, so that I can receive",
  "description": "an offer from auto1.com.",
  "id": "as-a-customer,-i-want-to-select-the-type-of-car-i-want-to-sell,-so-that-i-can-receive",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Customer is be able to get the data of manufacturer and validates its response with expected data",
  "description": "",
  "id": "as-a-customer,-i-want-to-select-the-type-of-car-i-want-to-sell,-so-that-i-can-receive;customer-is-be-able-to-get-the-data-of-manufacturer-and-validates-its-response-with-expected-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Request path with path parameters \"manufacturer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Following request params are updated for api \"manufacturer\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User submit \"GET\" request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Response has status \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Store the response in file \"manufacturer\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Response body has element \"wkda.020\" with \"Abarth\" value",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 35
    }
  ],
  "location": "commonStepDef.requestPathWithPathParameters(String)"
});
formatter.result({
  "duration": 185261962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 46
    }
  ],
  "location": "commonStepDef.followingRequestParamsAreUpdatedForApi(String)"
});
formatter.result({
  "duration": 388965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 13
    }
  ],
  "location": "commonStepDef.userSubmitRequest(String)"
});
formatter.result({
  "duration": 3054167042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "commonStepDef.responseHasStatus(int)"
});
formatter.result({
  "duration": 37675812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 33
    }
  ],
  "location": "commonStepDef.userStoreTheResponseInFile(String)"
});
formatter.result({
  "duration": 2372672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wkda.020",
      "offset": 27
    },
    {
      "val": "Abarth",
      "offset": 43
    }
  ],
  "location": "commonStepDef.responseBodyHasElementWithValue(String,String)"
});
formatter.result({
  "duration": 480734052,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Customer is be able to get the models as per manufacturer",
  "description": "",
  "id": "as-a-customer,-i-want-to-select-the-type-of-car-i-want-to-sell,-so-that-i-can-receive;customer-is-be-able-to-get-the-models-as-per-manufacturer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Request path with path parameters \"model\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Read the response from file \"manufacturer\" and path \"/src/test/resources/output/manufacturer.json\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Following request params are updated for api \"model\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User submit \"GET\" request",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Response has status \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Store the response in file \"model\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 35
    }
  ],
  "location": "commonStepDef.requestPathWithPathParameters(String)"
});
formatter.result({
  "duration": 446013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 29
    },
    {
      "val": "/src/test/resources/output/manufacturer.json",
      "offset": 53
    }
  ],
  "location": "commonStepDef.readTheResponseFromFileAndPath(String,String)"
});
formatter.result({
  "duration": 31479734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 46
    }
  ],
  "location": "commonStepDef.followingRequestParamsAreUpdatedForApi(String)"
});
formatter.result({
  "duration": 2393934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 13
    }
  ],
  "location": "commonStepDef.userSubmitRequest(String)"
});
formatter.result({
  "duration": 368872251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "commonStepDef.responseHasStatus(int)"
});
formatter.result({
  "duration": 7863984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 33
    }
  ],
  "location": "commonStepDef.userStoreTheResponseInFile(String)"
});
formatter.result({
  "duration": 768782,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Customer is be able to get the models as per manufacturer",
  "description": "",
  "id": "as-a-customer,-i-want-to-select-the-type-of-car-i-want-to-sell,-so-that-i-can-receive;customer-is-be-able-to-get-the-models-as-per-manufacturer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Request path with path parameters \"date\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Read the response from file \"manufacturer\" and path \"/src/test/resources/output/manufacture.json\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Read the response from file \"model\" and path \"/src/test/resources/output/model.json\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Following request params are updated for api \"date\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User submit \"GET\" request",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Response has status \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Store the response in file \"date\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "date",
      "offset": 35
    }
  ],
  "location": "commonStepDef.requestPathWithPathParameters(String)"
});
formatter.result({
  "duration": 813105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manufacturer",
      "offset": 29
    },
    {
      "val": "/src/test/resources/output/manufacture.json",
      "offset": 53
    }
  ],
  "location": "commonStepDef.readTheResponseFromFileAndPath(String,String)"
});
formatter.result({
  "duration": 2244903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 29
    },
    {
      "val": "/src/test/resources/output/model.json",
      "offset": 46
    }
  ],
  "location": "commonStepDef.readTheResponseFromFileAndPath(String,String)"
});
formatter.result({
  "duration": 523193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "date",
      "offset": 46
    }
  ],
  "location": "commonStepDef.followingRequestParamsAreUpdatedForApi(String)"
});
formatter.result({
  "duration": 292026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 13
    }
  ],
  "location": "commonStepDef.userSubmitRequest(String)"
});
formatter.result({
  "duration": 539788287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "commonStepDef.responseHasStatus(int)"
});
formatter.result({
  "duration": 2943789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "date",
      "offset": 33
    }
  ],
  "location": "commonStepDef.userStoreTheResponseInFile(String)"
});
formatter.result({
  "duration": 1664372,
  "status": "passed"
});
});
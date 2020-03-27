@All
Feature: As a customer, I want to select the type of car I want to sell, so that I can receive
  an offer from auto1.com.
  @TC1
  Scenario: Customer is be able to get the data of manufacturer and validates its response with expected data
    Given Request path with path parameters "manufacturer"
    And Following request params are updated for api "manufacturer"
    When User submit "GET" request
    Then Response has status "200"
    And User Store the response in file "manufacturer"
    And Response body has element "wkda.020" with "Abarth" value


  @TC2
  Scenario: Customer is be able to get the models as per manufacturer
    Given Request path with path parameters "model"
    And Read the response from file "manufacturer" and path "/src/test/resources/output/manufacturer.json"
    And Following request params are updated for api "model"
    When User submit "GET" request
    Then Response has status "200"
    And User Store the response in file "model"


  @TC3
  Scenario: Customer is be able to get the models as per manufacturer
    Given Request path with path parameters "date"
    And Read the response from file "manufacturer" and path "/src/test/resources/output/manufacture.json"
    And Read the response from file "model" and path "/src/test/resources/output/model.json"
    And Following request params are updated for api "date"
    When User submit "GET" request
    Then Response has status "200"
    And User Store the response in file "date"



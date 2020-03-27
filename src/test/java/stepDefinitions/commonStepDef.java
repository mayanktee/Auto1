package stepDefinitions;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import common.Utils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.*;

public class commonStepDef {

    private String baseUri = "";
    private String resourceUri = "";
    String responseBody = "";
    String keyParam="";
    String manufacturer="";
    String model="";
    Map<String, String> headerMap = new HashMap<>();
    Map<String, String> paramsMap = new HashMap<>();
    Response res;


    @Given("^Request path with path parameters \"([^\"]*)\"$")
    public void requestPathWithPathParameters(String name) throws Throwable {
        baseUri = Utils.getProperty("baseUri");
        resourceUri = Utils.getProperty(name + "ResourceUri");

    }


    @And("^Following request params are updated for api \"([^\"]*)\"$")
    public void followingRequestParamsAreUpdatedForApi(String api) throws Throwable {
        paramsMap = Utils.getParams("params");

        if (api.equals("model")) {
            paramsMap.put("manufacturer", manufacturer);
        }

        if (api.equals("date")) {
            paramsMap.put("manufacturer", manufacturer);
            paramsMap.put("main-type", model);
        }
    }

    @When("^User submit \"([^\"]*)\" request$")
    public void userSubmitRequest(String arg0) throws Throwable {
        res = RestAssured.given()
                .urlEncodingEnabled(true)
                .relaxedHTTPSValidation()
                .baseUri(baseUri).log().all()
                .queryParams(paramsMap)
                .when()
                .get(resourceUri)
                .thenReturn();
    }

    @Then("^Response has status \"([^\"]*)\"$")
    public void responseHasStatus(int code) throws Throwable {

        int responseCode = res.getStatusCode();
        Assert.assertTrue("Response has expected status code", responseCode == code);
        responseBody = res.getBody().asString();

        System.out.println("The response is :    " + responseBody.toString());

    }


    @And("^Response body has element \"([^\"]*)\" with \"([^\"]*)\" value$")
    public void responseBodyHasElementWithValue(String path, String name) throws Throwable {

        String value = res.jsonPath().get(path);
        Assert.assertTrue("Verify the expected value is present in response", value.equals(name));
        System.out.println("The value is :  " + value);

    }


    @And("^Read the response from file \"([^\"]*)\" and path \"([^\"]*)\"$")
    public void readTheResponseFromFileAndPath(String api, String path) throws Throwable {
        String fileResponse = Utils.readResponse(api, path);
        JsonObject obj = new JsonParser().parse(fileResponse).getAsJsonObject();
        Object obj1 =obj.get("wkda");
        keyParam = ((JsonObject) obj1).keySet().iterator().next();
        if(api.equals("manufacturer")){
            manufacturer=keyParam;
        }
        if(api.equals("model")){
            model=keyParam;
        }
    }


    @And("^User Store the response in file \"([^\"]*)\"$")
    public void userStoreTheResponseInFile(String file) throws Throwable {
        Utils.exportResponse(file, responseBody);
    }
}

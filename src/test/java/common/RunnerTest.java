package common;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/Auto1.feature"
        ,glue={"stepDefinitions"}
        ,plugin = { "pretty", "html:target/cucumber-reports" }
        ,tags = {"@All"}
        ,monochrome = true
)
public class RunnerTest {


}

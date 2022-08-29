package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources/soalFeatureFiles", 
				glue = "definition", 
				plugin = { "pretty",
						"html: target/cucumber-reports", 
						"json: target/cucumber-reports/soalSQA.json" })

public class runnerMaster extends AbstractTestNGCucumberTests {

}

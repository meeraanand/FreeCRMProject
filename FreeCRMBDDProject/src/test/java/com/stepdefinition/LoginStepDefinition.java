package com.stepdefinition;

import java.io.IOException;

import com.baseclass.Library;
import com.pages.LoginPage;
import com.pages.OrangeLogin;
import com.resusablefunctions.SeleniumUtility;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends Library{
	
	SeleniumUtility seleniumutility;
	LoginPage homepage;
	@Given("^User is on free crm login page$")
	public void user_is_on_free_crm_login_page()  {
		System.out.println("user is on home page");
	    
	    
	}

	/*@When("^Title of the page is Free CRM$")
	public void title_of_the_page_is_Free_CRM()  {
		seleniumutility = new SeleniumUtility(driver);
		seleniumutility.getTitle();
		
	    
	}*/

	/*@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		homepage = new LoginPage(driver);
		homepage.EnteruserName(username);
		homepage.Enterpassword(password);
		
	    
	}*/

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()  {
		homepage = new LoginPage(driver);
		homepage.submitButton();
	   
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page()  {
		System.out.println("user is on homepage");
	    
	}


	
	
	
	

}

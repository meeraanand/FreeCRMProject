$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8336392400,
  "status": "passed"
});
formatter.before({
  "duration": 133800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When Title of the page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then User enters \"meera.anand69@gmail.com\" and \"Dhanush123\""
    }
  ],
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_free_crm_login_page()"
});
formatter.result({
  "duration": 114850000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 101812400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.pages.LoginPage.submitButton(LoginPage.java:22)\r\n\tat com.stepdefinition.LoginStepDefinition.user_clicks_on_login_button(LoginStepDefinition.java:46)\r\n\tat ✽.Then User clicks on login button(src/test/resources/Features/login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 287707200,
  "status": "passed"
});
formatter.after({
  "duration": 83100,
  "status": "passed"
});
});
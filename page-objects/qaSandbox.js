module.exports = {

  elements: {

	  //QA Sandbox main page

	  forgotPasswordButton: '#root > div > div.container > div > div > div > div > div > a.btn.btn-lg.btn-primary.mr-2',
	  mainLoginButton: '#root > div > div.container > div > div > div > div > div > a.btn.btn-lg.btn-secondary',

	  //Login page

	  emailField: 'input[name=email]',
	  passwordField: 'input[name=password]',
	  loginButton: 'button[data-testid=submit_btn]',

	  //Dashboard page

	  useCasesSection: '#root > div > div.container > div > div > div.row > div:nth-child(2) > div > a',
	  logoutButton: '#mobile-nav > ul > li:nth-child(4) > a',

	  //Use Cases page

	  createUseCaseButton: '#root > div > div.container > div > a.btn.mb-4.btn-primary.float-right',
	  firstElementInTheList: '#root > div > div.container > div > div > a:nth-child(1)',

	  //Create Use Case page

	  caseTitle: 'input[name=title]',
	  caseDescription: 'textarea[name=description]',
	  caseExpectedResult: 'input[name=expected_result]',
	  caseSteps: 'input[name=testStepId-0]',
	  automatedSwitch: '#switch',
	  addStepButton: 'button[data-testid=add_step_btn]',
	  backArrow: '#root > div > div.container > div > div > div > form > a',
	  submitUseCaseButton: 'button[data-testid=submit_btn]',

	  //Edit Use Case page

	  deleteButton: 'button[data-testid=remove_usecase_btn]',
	  confirmDeleteButton: '#root > div > div.container > div > div > div > form > span.input-group-btn.delete-button > div > div.sweet-alert > p > span:nth-child(2) > button',

  }

};

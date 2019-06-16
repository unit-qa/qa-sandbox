//BaseURL for QA Sandbox application
const baseURL = 'https://qa-sandbox.apps.htec.rs';

//Load external JSON files with login credentials and test cases
var loginCredentials;
var testCasesData;

try {
	loginCredentials = require('../data/loginCredentials.json');
	testCasesData = require('../data/testCases.json');
} catch(err) {
	console.log(err);
	console.log ('Couldn\'t load loginCredentials or testCases file. Please make sure that ' +
					'you have loginCredentials.json and testCases.json placed in DATA folder' +
					'in your project root directory');
	process.exit(1);
}

module.exports = {

	'Login in QA Sandbox application' : function (client) {

		const browser = client.page.qaSandbox();

		browser
			.navigate(baseURL + '/login')
			.waitForElementVisible('body')
			.assert.urlEquals('https://qa-sandbox.apps.htec.rs/login')
			.assert.title('Sandbox')
			.waitForElementVisible('@emailField')
			.setValue('@emailField', loginCredentials.username)
			.assert.value('@emailField', loginCredentials.username)
			.waitForElementVisible('@passwordField')
			.setValue('@passwordField', loginCredentials.password)
			.assert.value('@passwordField', loginCredentials.password)
			.waitForElementVisible('@loginButton')
			.click('@loginButton')
			.assert.urlEquals('https://qa-sandbox.apps.htec.rs/dashboard')
			.assert.title('Sandbox')
	},

	'Navigate to the Use Cases section & remove all previously created use cases' : function (client) {

		const browser = client.page.qaSandbox();

		for (category in testCasesData) {

				//Remove all previously created Use Cases
				browser
					.navigate(baseURL + '/use-cases')
					.waitForElementVisible('body')
					.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')
					.waitForElementVisible('@firstElementInTheList')
					.click('@firstElementInTheList')
					.assert.urlContains('https://qa-sandbox.apps.htec.rs/use-case')
					.waitForElementVisible('@deleteButton')
					.click('@deleteButton')
					.waitForElementVisible('@confirmDeleteButton')
					.click('@confirmDeleteButton')
					.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')

			}
	},

	'Test CRUD functionality in Use Case section' : function (client) {

		const browser = client.page.qaSandbox();

		for (category in testCasesData) {

			var testCase = testCasesData[category];

			//CREATE Use Case with parameters loaded from external JSON file
			browser
				.navigate(baseURL + '/use-cases')
				.waitForElementVisible('body')
				.waitForElementVisible('@createUseCaseButton')
				.click('@createUseCaseButton')
				.assert.urlEquals('https://qa-sandbox.apps.htec.rs/create-usecase')
				.waitForElementVisible('@caseTitle')
				.setValue('@caseTitle', testCase[0])
				.assert.value('@caseTitle', testCase[0])
				.waitForElementVisible('@caseDescription')
				.setValue('@caseDescription', testCase[1])
				.assert.value('@caseDescription', testCase[1])
				.waitForElementVisible('@caseExpectedResult')
				.setValue('@caseExpectedResult', testCase[2])
				.assert.value('@caseExpectedResult', testCase[2])
				.waitForElementVisible('@caseSteps')
				.setValue('@caseSteps', testCase[3])
				.assert.value('@caseSteps', testCase[3])
				.click('@submitUseCaseButton')
				.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')

			//READ created Use Case data and check if that data is correctly saved
			browser
				.waitForElementVisible('@firstElementInTheList')
				.click('@firstElementInTheList')
				.assert.urlContains('https://qa-sandbox.apps.htec.rs/use-case')
				.waitForElementVisible('@caseTitle')
				.assert.value('@caseTitle', testCase[0])
				.waitForElementVisible('@caseDescription')
				.assert.value('@caseDescription', testCase[1])
				.waitForElementVisible('@caseExpectedResult')
				.assert.value('@caseExpectedResult', testCase[2])
				.waitForElementVisible('@caseSteps')
				.assert.value('@caseSteps', testCase[3])
				.click('@backArrow')
				.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')

			//UPDATE Use Case with required parameters
			browser
				.waitForElementVisible('@firstElementInTheList')
				.click('@firstElementInTheList')
				.assert.urlContains('https://qa-sandbox.apps.htec.rs/use-case')
				.waitForElementVisible('@caseTitle')
				.clearValue('@caseTitle')
				.setValue('@caseTitle', 'This field previously had ' + testCase[0].length + " characters")
				.waitForElementVisible('@caseDescription')
				.clearValue('@caseDescription')
				.setValue('@caseDescription', 'This field previously had ' + testCase[1].length + " characters")
				.waitForElementVisible('@caseExpectedResult')
				.clearValue('@caseExpectedResult')
				.setValue('@caseExpectedResult', 'This field previously had ' + testCase[2].length + " characters")
				.waitForElementVisible('@caseSteps')
				.clearValue('@caseSteps')
				.setValue('@caseSteps', 'This field previously had ' + testCase[3].length + " characters")
				.click('@submitUseCaseButton')
				.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')

			// //DELETE Use Case that was previously updated
			// browser
			// 	.navigate(baseURL + '/use-cases')
			// 	.waitForElementVisible('body')
			// 	.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')
			// 	.waitForElementVisible('@firstElementInTheList')
			// 	.click('@firstElementInTheList')
			// 	.assert.urlContains('https://qa-sandbox.apps.htec.rs/use-case')
			// 	.waitForElementVisible('@deleteButton')
			// 	.click('@deleteButton')
			// 	.waitForElementVisible('@confirmDeleteButton')
			// 	.click('@confirmDeleteButton')
			// 	.assert.urlEquals('https://qa-sandbox.apps.htec.rs/use-cases')

		}

		browser.end();
	}
};

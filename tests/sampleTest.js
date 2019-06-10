module.exports = {
  'Navigate to the HTEC QA Sandbox web application and check title on main page' : function (client) {
    client
      .url('https://qa-sandbox.apps.htec.rs')
      .waitForElementVisible('body')
      .assert.title('Sandbox')
      .pause(5000)
      .end();
  }
};

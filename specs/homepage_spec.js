// spec.js
describe('AngularJS/Protractor Demo App Homepage', function() {

  it('should verify title', function() {
    browser.get('https://dev-sauce-labs-demo.mybluemix.net/');

    var title = element(by.css('body h1'));

    expect(title.getText()).toEqual('Sauce Labs Demo App');
  });

});
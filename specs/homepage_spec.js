// spec.js
describe('AngularJS/Protractor Demo App Homepage', function() {

  it('should verify title', function() {
    browser.get(process.env.CF_APP_NAME);

    var title = element(by.css('body h1'));

    expect(title.getText()).toEqual('Title');
  });

});
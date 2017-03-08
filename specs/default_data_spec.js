// spec.js
describe('AngularJS/Protractor Demo Tab1 default values', function() {

  it('should have the correct default data', function() {
    browser.get('https://dev-sauce-labs-demo.mybluemix.net/');

    element(by.css('.index')).click();

    var firstInput = element(by.xpath("//tr[2]//td[@class='ng-binding'][1]")),
        secondInput = element(by.xpath("//tr[2]//td[@class='ng-binding'][2]"));

    expect(firstInput.getText()).toEqual('41');
    expect(secondInput.getText()).toEqual('42');

  });

});

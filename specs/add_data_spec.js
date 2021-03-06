// spec.js
describe('AngularJS/Protractor Demo Tab1', function() {

  it('should add data and verify it was added', function() {
    browser.get('https://dev-sauce-labs-demo.mybluemix.net/');

    element(by.css('.index')).click();

    element(by.css('#input1')).sendKeys('3');
    element(by.css('#input2')).sendKeys('4');
    element(by.css('#submitData')).click();

    var firstInput = element(by.xpath("//tr[3]//td[@class='ng-binding'][1]")),
        secondInput = element(by.xpath("//tr[3]//td[@class='ng-binding'][2]"));

    expect(firstInput.getText()).toEqual('3');
    expect(secondInput.getText()).toEqual('4');
  });

});
describe('Authentication capabilities', function() {
  var url;
  var loginURL;
  var id = element(by.css('body > app-root > app-auth > app-login > section > div > div > div > div > form > div.auth-box > div:nth-child(2) > input'));
  var password = element(by.css('body > app-root > app-auth > app-login > section > div > div > div > div > form > div.auth-box > div:nth-child(3) > input'));
  var loginButton = element(by.css('body > app-root > app-auth > app-login > section > div > div > div > div > form > div.auth-box > div.row.m-t-30 > div > button'));
  //var error = element(by.model('loginError'));
  beforeEach(function(){
    browser.ignoreSynchronization=true;
  });

  it('should redirect to the login page if trying to load protected page while not authenticated', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://10.100.106.12:4200');
    loginURL = browser.getCurrentUrl();
    browser.waitForAngularEnabled(false);

    browser.get('/#/');
    expect(browser.getCurrentUrl()).toEqual(loginURL)  });


  it('should accept a valid id address and password', function() {
    browser.waitForAngularEnabled(false);

    id.clear();
    password.clear();

    id.sendKeys('123');
    password.sendKeys('123');
    loginButton.click();

    var roomTab = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-dashboard-default > div > div:nth-child(3) > div > div > i'));


    var EC1 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC1.visibilityOf(roomTab), 120000);
      return roomTab;
    });

    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(45000);
    //browser.sleep();
    expect(browser.getCurrentUrl()).not.toEqual(loginURL);




    
  });



  it('Should Add a Item to the Store', function(){


   // var student = element(by.css('#main_navbar > div.pcoded-inner-navbar.main-menu > div > div.ng-tns-c3-2 > div > ul:nth-child(3) > li > a > span.pcoded-micon > i'));

  

   // student.click();

   /* var std1 = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-student-list > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > td.pointer.normal-link'));

    var EC = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC.visibilityOf(std1), 120000);
      return std1;
    });

    std1.click();*/

    var storeTab = element(by.cssContainingText('span', 'হল স্টোর'));
    storeTab.click();

    var newItem = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-store-list > div > div > div.row > div.col-xs-12.col-sm-12.col-md-4 > button'));
    
    var EC2 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC2.visibilityOf(newItem), 120000);
      return newItem;
    });

    newItem.click();



    var itemNo = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(1) > div > input'));

    var EC3 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC3.visibilityOf(itemNo), 120000);
      return itemNo;
    });

    itemNo.click();
    itemNo.clear();
    itemNo.sendKeys('001');

    var date = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(2) > div > input'));
    date.sendKeys('18/12/2018');

    var itemType = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(3) > div > select'));
    itemType.click();

    element.all(by.cssContainingText('option', 'Furniture')).last().click();



    var position = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(4) > div > input'));
    position.sendKeys('test');


    var condition = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(5) > div > select'));
    condition.click();

    element.all(by.cssContainingText('option', 'Needs repair')).last().click();
    

  

    var proceed = element(by.css('body > modal-container > div > div > div.modal-body > button.btn.btn-warning.text-white'));

    proceed.click();

    var newBlD = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-store-list > div > div > div.table-responsive > table > tbody > tr > td:nth-child(6) > a:nth-child(2) > i'));

    var EC4 = protractor.ExpectedConditions;

    browser.driver.wait(function () {
    browser.wait(EC4.visibilityOf(newBlD), 12000);
      return newBlD;
    });



    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(25000);

  });


  });


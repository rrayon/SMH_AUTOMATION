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
    browser.get('http://10.100.106.26:4200');
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



  it('Should Add a New Block', function(){


   // var student = element(by.css('#main_navbar > div.pcoded-inner-navbar.main-menu > div > div.ng-tns-c3-2 > div > ul:nth-child(3) > li > a > span.pcoded-micon > i'));

  

   // student.click();

   /* var std1 = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-student-list > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > td.pointer.normal-link'));

    var EC = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC.visibilityOf(std1), 120000);
      return std1;
    });

    std1.click();*/

    var roomTab = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-dashboard-default > div > div:nth-child(3) > div > div > i'));
    roomTab.click();

    var addBlock = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-residence-list > div > div.col-md-5 > app-block-list > div > div > div.row > div > div > button'));
    
    var EC2 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC2.visibilityOf(addBlock), 120000);
      return addBlock;
    });

    addBlock.click();



    var blockName = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(1) > div > input'));

    var EC3 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC3.visibilityOf(blockName), 120000);
      return blockName;
    });

    blockName.click();
    blockName.clear();
    blockName.sendKeys('test');

    var blockPosition = element(by.css('body > modal-container > div > div > div.modal-body > div:nth-child(2) > div > input'));
    blockPosition.click();
    blockPosition.clear();
    blockPosition.sendKeys('test position');
    
    

    var proceed = element(by.css('body > modal-container > div > div > div.modal-body > button.btn.bg-c-lite-blue.text-white'));

    proceed.click();

    var newBlD = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-residence-list > div > div.col-md-5 > app-block-list > div > div > div.table-responsive > table > tbody > tr:nth-child(4) > td:nth-child(3) > a:nth-child(2) > i'));

    var EC4 = protractor.ExpectedConditions;

    browser.driver.wait(function () {
    browser.wait(EC4.visibilityOf(newBlD), 12000);
      return newBlD;
    });



    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(25000);

  });


  });


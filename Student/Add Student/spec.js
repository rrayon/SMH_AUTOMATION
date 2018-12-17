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

    var studentTab = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-dashboard-default > div > div:nth-child(1) > div > div > i'));


    var EC1 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC1.visibilityOf(studentTab), 120000);
      return studentTab;
    });

    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(45000);
    //browser.sleep();
    expect(browser.getCurrentUrl()).not.toEqual(loginURL);




    
  });



  it('Should Add a Student', function(){


   // var student = element(by.css('#main_navbar > div.pcoded-inner-navbar.main-menu > div > div.ng-tns-c3-2 > div > ul:nth-child(3) > li > a > span.pcoded-micon > i'));

  

   // student.click();

   /* var std1 = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-student-list > div > div > div.table-responsive > table > tbody > tr:nth-child(1) > td.pointer.normal-link'));

    var EC = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC.visibilityOf(std1), 120000);
      return std1;
    });

    std1.click();*/

    var studentTab = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-dashboard-default > div > div:nth-child(1) > div > div > i'));
    studentTab.click();
    var addStudent = element(by.css('#button-basic > i'));
    
    var EC2 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC2.visibilityOf(addStudent), 120000);
      return addStudent;
    });

    addStudent.click();

    var newForm = element(by.css('#dropdown-basic > li:nth-child(1) > a'));
    newForm.click();


    var name = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-add-student > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td > input'));

    var EC3 = protractor.ExpectedConditions;
    browser.driver.wait(function () {
    browser.wait(EC3.visibilityOf(name), 120000);
      return name;
    });

    name.click();
    name.clear();
    name.sendKeys('test Student');

    var regNo = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-add-student > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(2) > td > input'));
    
        
    regNo.sendKeys('0101010');

    var proceed = element(by.css('body > app-root > app-admin > div > div.pcoded-container.navbar-wrapper > div > div > div > div > div > div > div > app-add-student > div:nth-child(2) > div > div > div > div > div:nth-child(24) > div > a.btn.btn-danger.waves-effect.waves-light.m-r-20'));

    proceed.click();



    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(25000);

  });


  });


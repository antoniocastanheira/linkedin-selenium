let webdriver = require('selenium-webdriver'),
By = webdriver.By,
Key = webdriver.Key,
until = webdriver.until;

async function searchPerson() {
    let driver = new webdriver.Builder().forBrowser('chrome').build();  

    await driver.get('https://www.linkedin.com');
    
    // User login 
    var loginInput = await driver.findElement(By.name('session_key'));
    await loginInput.sendKeys('test@test.com.br');
    
    // Password login
    var passwordInput = await driver.findElement(By.name('session_password'));
    await passwordInput.sendKeys('123456');
    
    var loginButton = await driver.findElement(By.id('login-submit'));
    await loginButton.sendKeys(Key.RETURN);
    
    await driver.get('https://www.linkedin.com/search/results/people/?origin=DISCOVER_FROM_SEARCH_HOME');
    
    var searchInputBox = await driver.findElement(By.id('extended-nav-search'));
    var searchInput = await searchInputBox.findElement(By.tagName('input'));
    var searchButton = await searchInputBox.findElement(By.tagName('button'));
    
    // Company target
    await searchInput.sendKeys('Gama Academy');
    await searchButton.sendKeys(Key.RETURN);
    
    var firstPerson = await driver.findElement(By.className('actor-name'));    
    let name = await firstPerson.getText(); 
    
    console.log("Ceo é:" + name);    
  }

  searchPerson();
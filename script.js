const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const by = require("selenium-webdriver/lib/by");

async function testRun(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver. manage(). window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.findElement(By.xpath("//a[@class= 'search-icon']")).click(); 
    await driver.findElement(By.xpath("//input[@placeholder= 'Search']")).sendKeys("nike");
    await driver.findElement(By.xpath("//input[@placeholder= 'Search']")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath("//img[@alt='Nike react phantom run flyknit 2']")).click(); 
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'S')]")).click();
    
    await driver.sleep(3000); 
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'Black')]")).click(); 
    
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//input[@placeholder='Qty']")).clear();
    await driver.findElement(By.xpath("//input[@placeholder='Qty']")).sendKeys(12);
    await driver.findElement(By.xpath("//span[normalize-space()='CART']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//a[normalize-space()='VIEW CART (1)']")).click();
    await driver.findElement(By.xpath("//div[@class='breadcrumb page-width my-8']")).click();
    await driver.sleep(5000);
    await driver.quit();


}
testRun();


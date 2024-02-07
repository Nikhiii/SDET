const puppeteer = require('puppeteer');
//https://api.example.com
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('div');
    await page.waitForSelector('th');
    console.log('TESTCASE:verify_div_and_th_elements_are_present:success');
  }
  catch(e){
    console.log('TESTCASE:verify_div_and_th_elements_are_present:failure');
  }


  const page1 = await browser.newPage();
  try{
    await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('h1');
    const result1 = await page1.evaluate(()=>{
      let heading = document.querySelector(".container");
      return heading.innerHTML;
    })
    console.log('TESTCASE:check_for_h1_element_in_the_container:success');
  }
  catch(e){
    console.log('TESTCASE:check_for_h1_element_in_the_container:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('table');
    console.log('TESTCASE:verify_table_element_is_present:success');
  }
  catch(e){
    console.log('TESTCASE:verify_table_element_is_present:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('tr');
    console.log('TESTCASE:verify_tr_elements_are_present:success');
  }
  catch(e){
    console.log('TESTCASE:verify_tr_elements_are_present:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('td');
    await page4.waitForSelector('button');
    const result1 = await page4.evaluate(()=>{
      let heading = document.querySelector(".total-collection-button");
      return heading.innerHTML;
    })

    console.log('TESTCASE:verify_td_and_button_elements_are_present:success');
  }
  catch(e){
    console.log('TESTCASE:verify_td_and_button_elements_are_present:failure');
  }


  const page5 = await browser.newPage();
  
  try {
    // Go to the page
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/collection/collection/collection/public/index.html'); // Replace with the actual URL

    let alertTriggered = false;
    
    page5.on('dialog', async (dialog) => {
     
      if (dialog.type() === 'alert') {
        alertTriggered = true;
        await dialog.dismiss(); 
      }
    });

  
    await page5.click('.total-collection-button');
    if (alertTriggered) {
      console.log('TESTCASE:checks_alert_was_triggered:success');
    } else {
      console.log('TESTCASE:checks_alert_was_triggered:failure');
    }
  } catch (e) {
    console.log('TESTCASE:checks_alert_was_triggered:failure');
  } 
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await browser.close();
  }
  
})();

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('https://api.example.com/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1',{timeout: 1000});
    console.log('TESTCASE:heading_tag:success');
  }
  catch(e){
    console.log('TESTCASE:heading_tag:failure');
  }

  const page1 = await browser.newPage();
  try{
    await page1.goto('https://api.example.com/');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('div',{timeout: 1000});
    const result1 = await page1.evaluate(()=>{
      let heading = document.querySelector(".container");
      return heading.innerHTML;
    }) 

    console.log('TESTCASE:div_tag:success');
  }
  catch(e){
    console.log('TESTCASE:div_tag:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('https://api.example.com/');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('form',{timeout: 1000});
    await page2.waitForSelector('label',{timeout: 1000});

    const result2 = await page2.evaluate(()=>{
      let heading = document.querySelector("#interestForm");
      return heading.innerHTML;
    })
    console.log('TESTCASE:form_and_label_tag:success');
  }catch(e){
    console.log('TESTCASE:form_and_label_tag:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://api.example.com/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('input',{timeout: 1000});
    const result1 = await page3.evaluate(()=>{
      let heading = document.querySelector("#principal");
      return heading.innerHTML;
    }) 
    const result2 = await page3.evaluate(()=>{
      let heading = document.querySelector("#interestRate");
      return heading.innerHTML;
    }) 
    const result3 = await page3.evaluate(()=>{
      let heading = document.querySelector("#time");
      return heading.innerHTML;
    })
    console.log('TESTCASE:input_tag_and_id:success');
    
  }catch(e){
    console.log('TESTCASE:input_tag_and_id:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://api.example.com/');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button',{timeout: 1000});
    const result4 = await page4.evaluate(() => {
      let button = document.querySelector("button");
      return button.innerHTML;
    })

    if(result4 === 'Calculate'){
      console.log('TESTCASE:button_tag:success');
    }else{
      console.log('TESTCASE:button_tag:failure');
    }
  }catch(e){
    console.log('TESTCASE:button_tag:failure');
  }

  const page5 = await browser.newPage();
  try{
    await page5.goto('https://api.example.com/');
    await page5.setViewport({
      width:1200,
      height:800,
    })
    await page5.waitForSelector('button',{timeout: 1000});
    const result5 = await page5.evaluate(() => {
      let button = document.querySelector("button");
      return button.getAttribute("onclick");
    })

    if(result5 === 'calculateInterest()'){
      console.log('TESTCASE:check_for_onclick_function:success');
    }
    else{
      console.log('TESTCASE:check_for_onclick_function:failure');
    }
  }catch(e){
    console.log('TESTCASE:check_for_onclick_function:failure');
  }

  const page6 = await browser.newPage();
  try{
    await page6.goto('https://api.example.com/');
    await page6.setViewport({
      width:1200,
      height:800,
    })
    await page6.waitForSelector('p',{timeout: 1000});
    const result6 = await page6.evaluate(()=>{
      let heading = document.querySelector("#result");
      return heading.innerHTML;
    })
    console.log('TESTCASE:div_for_result:success');
  }
  catch(e){
    console.log('TESTCASE:div_for_result:failure');
  }

  const page7 = await browser.newPage();
  try{
    await page7.goto('https://api.example.com/');
    await page7.setViewport({
      width:1200,
      height:800,
    })

    // Fill in the input fields
    await page7.type('#principal', '1000');
    await page7.type('#interestRate', '5');
    await page7.type('#time', '1');

    // Click the button that triggers the calculateInterest function
    await page7.click('button');

    // Wait for the result to be displayed
    await page7.waitForSelector('#result');

    // Extract the result from the page
    const result = await page7.evaluate(() => document.querySelector('#result').innerHTML);

    // Check if the result is as expected
    if (result === 'Simple Interest: 50.00<br>Total Amount: 1050.00') {
      console.log('TESTCASE:calculate_interest:success');
    } else {
      console.log('TESTCASE:calculate_interest:failure');
    }
  }
  catch(e){
    console.log(e);
    console.log('TESTCASE:calculate_interest:failure');
  }

  const page8 = await browser.newPage();
  try{
    await page8.goto('https://api.example.com/');
    await page8.setViewport({
      width:1200,
      height:800,
    })
    // Wait for the input fields to be rendered on the page
    await page8.waitForSelector('#principal', { timeout: 1000 });
    await page8.waitForSelector('#interestRate', { timeout: 1000 });
    await page8.waitForSelector('#time', { timeout: 1000 });

    // Leave the input fields empty
    await page8.type('#principal', '');
    await page8.type('#interestRate', '');
    await page8.type('#time', '');

    // Click the button that triggers the calculateInterest function
    await page8.click('button');

    // Wait for the error message to be displayed
    await page8.waitForSelector('#result');

    // Extract the error message from the page
    const errorMessage = await page8.evaluate(() => document.querySelector('#result').innerHTML);

    // Check if the error message is as expected
    if (errorMessage === 'Please enter valid numerical values for all fields.') {
      console.log('TESTCASE:display_error_message_with_no_input:success');
    } else {
      console.log('TESTCASE:display_error_message_with_no_input:failure');
    }
  }catch(e){
    console.log('TESTCASE:display_error_message_with_no_input:failure');
  }


  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await browser.close();
  }
  
})();

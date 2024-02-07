const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
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
    await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
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
    await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('label',{timeout: 1000});

    const result2 = await page2.evaluate(() => {
      let label = document.querySelector("label");
      return label.getAttribute("for");
    })

    if(result2 === 'nameInput'){
      console.log('TESTCASE:label_tag:success');
    } else {
      console.log('TESTCASE:label_tag:failure');
    }
  }catch(e){
    console.log('TESTCASE:label_tag:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('input',{timeout: 1000});
    const result1 = await page3.evaluate(()=>{
      let heading = document.querySelector("#nameInput");
      return heading.innerHTML;
    }) 

    console.log('TESTCASE:input_tag:success');
    
  }catch(e){
    console.log('TESTCASE:input_tag:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button',{timeout: 1000});
    const result4 = await page4.evaluate(() => {
      let button = document.querySelector("button");
      return button.innerHTML;
    })

    if(result4 === 'Submit'){
      console.log('TESTCASE:button_tag:success');
    }else{
      console.log('TESTCASE:button_tag:failure');
    }
  }catch(e){
    console.log('TESTCASE:button_tag:failure');
  }

  const page5 = await browser.newPage();
  try{
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page5.setViewport({
      width:1200,
      height:800,
    })
    await page5.waitForSelector('button',{timeout: 1000});
    const result5 = await page5.evaluate(() => {
      let button = document.querySelector("button");
      return button.getAttribute("onclick");
    })

    if(result5 === 'displayGreeting()'){
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
    await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page6.setViewport({
      width:1200,
      height:800,
    })
    await page6.waitForSelector('div',{timeout: 1000});
    const result6 = await page6.evaluate(()=>{
      let heading = document.querySelector("#greetingMessage");
      return heading.innerHTML;
    })
    console.log('TESTCASE:div_for_greeting_message:success');
  }
  catch(e){
    console.log('TESTCASE:div_for_greeting_message:failure');
  }

  const page7 = await browser.newPage();
  try{
    await page7.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page7.setViewport({
      width:1200,
      height:800,
    })

    // Set the value of the nameInput field
    await page7.evaluate(() => {
      document.getElementById('nameInput').value = 'Test Name';
    });

    // Click the submit button
    await page7.click('button[onclick="displayGreeting()"]');

    // Wait for the page to update
    await page7.waitForTimeout(1000);

    // Check the content of the greetingMessage element
    const greetingMessage = await page7.evaluate(() => {
      return document.getElementById('greetingMessage').innerHTML;
    });

    if (greetingMessage === 'Hello, Test Name Greetings for the day :) !!!') {
      console.log('TESTCASE:display_greeting:success');
    } else {
      console.log('TESTCASE:display_greeting:failure');
    }
  }
  catch(e){
    console.log('TESTCASE:display_greeting:failure');
  }

  const page8 = await browser.newPage();
  try{
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/greeting/collection/public/index.html');
    await page.setViewport({
      width:1200,
      height:800,
    })

    // Click the submit button
    await page.click('button[onclick="displayGreeting()"]');

    // Wait for the page to update
    await page.waitForTimeout(1000);

    // Check the content of the greetingMessage element
    const greetingMessage = await page.evaluate(() => {
      return document.getElementById('greetingMessage').innerHTML;
    });

    if (greetingMessage === 'Please enter your name.') {
      console.log('TESTCASE:display_greeting_with_no_name:success');
    } else {
      console.log('TESTCASE:display_greeting_with_no_name:failure');
    }
  }
  catch(e){
    console.log('TESTCASE:display_greeting_with_no_name:failure');
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

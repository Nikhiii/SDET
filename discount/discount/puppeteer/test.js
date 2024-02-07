const puppeteer = require('puppeteer');
//file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('div' ,  {timeout : 2000 });
    console.log('TESTCASE:checks_div_element:success');
  }
  catch(e){
    console.log('TESTCASE:checks_div_element:failure');
  }


  const page1 = await browser.newPage();
  try{
    await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('h1' ,  {timeout : 2000 });
    const result2 = await page1.evaluate(()=>{
      let heading = document.querySelector(".container");
      return heading.innerHTML;
    })
    console.log('TESTCASE:checks_h1_element:success');
  }
  catch(e){
    console.log('TESTCASE:checks_h1_element:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('label' ,  {timeout : 2000 });
    console.log('TESTCASE:checks_label_element:success');
  }
  catch(e){
    console.log('TESTCASE:checks_label_element:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('input' ,  {timeout : 2000 });
    const result1 = await page3.evaluate(()=>{
      let heading = document.querySelector("#amountInput");
      return heading.innerHTML;
    })
    console.log('TESTCASE:checks_input_element:success');
  }
  catch(e){
    console.log('TESTCASE:checks_input_element:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button');
    await page4.waitForSelector('p');
    const result1 = await page4.evaluate(()=>{
      let heading = document.querySelector("#applyButton");
      return heading.innerHTML;
    })
    const result2 = await page4.evaluate(()=>{
      let heading = document.querySelector("#discountedAmount");
      return heading.innerHTML;
    })
    console.log('TESTCASE:check_button_and_paragraph_elements:success');
  }
  catch(e){
    console.log('TESTCASE:check_button_and_paragraph_elements:failure');
  }

  const page5 = await browser.newPage();
  try {
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html'); 
    await page5.setViewport({
      width: 1200,
      height: 800,
    });

    await page5.type('#amountInput', 'invalid_amount');
    await page5.click('#applyButton');
    await page5.waitForSelector('#discountedAmount',  {timeout : 2000 });
    const result = await page5.$eval('#discountedAmount', (element) => element.textContent);
    if (result.includes('Invalid input. Please enter a valid amount.')) {
      console.log('TESTCASE:checks_invalid_input_message:success');
    } else {
      console.log('TESTCASE:checks_invalid_input_message:failure');
    }
  } catch (e) {
    console.log('TESTCASE:checks_invalid_input_message:failure');
  } 


  const page6 = await browser.newPage();
  try {
    await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html'); 
    await page6.setViewport({
      width: 1200,
      height: 800,
    });

    await page6.type('#amountInput', '5000');
    await page6.click('#applyButton');
    await page6.waitForSelector('#discountedAmount',  {timeout : 2000 });
    const result = await page6.$eval('#discountedAmount', (element) => element.textContent);

    if (result.includes('4750')) {
      console.log('TESTCASE:verify_discounted_amount:success');
    } else {
      console.log('TESTCASE:verify_discounted_amount:failure');
    }
  } catch (e) {
    console.log('TESTCASE:verify_discounted_amount:failure');
  } 

  const page7 = await browser.newPage();
  try {
    await page7.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html'); 
    await page7.setViewport({
      width: 1200,
      height: 800,
    });

    await page7.type('#amountInput', '8501');
    await page7.click('#applyButton');
    await page7.waitForSelector('#discountedAmount',  {timeout : 2000 });
    const color = await page7.$eval('#discountedAmount', (element) => getComputedStyle(element).color);
    if (color === 'rgb(0, 128, 0)') {
      console.log('TESTCASE:checks_css_color_green:success');
    } else {
      console.log('TESTCASE:checks_css_color_green:failure');
    }
  } catch (e) {
    console.log('TESTCASE:checks_css_color_green:failure');
  } 


  const page8 = await browser.newPage();
  try {
    await page8.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/discount/discount/public/index.html'); 
    await page8.setViewport({
      width: 1200,
      height: 800,
    });

    await page8.type('#amountInput', '500');
    await page8.click('#applyButton');
    await page8.waitForSelector('#discountedAmount', {timeout : 2000 });
    const color = await page8.$eval('#discountedAmount', (element) => getComputedStyle(element).color);
    if (color === 'rgb(0, 0, 0)') {
      console.log('TESTCASE:checks_css_color_black:success');
    } else {
      console.log('TESTCASE:checks_css_color_black:failure');
    }
  } catch (e) {
    console.log('TESTCASE:checks_css_color_black:failure');
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
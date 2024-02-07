const assert = require('assert');
const exp = require('constants');
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
        height:1200,
      })
      await page.waitForSelector('div',{timeout : 2000});

      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector(".container");
        return heading.innerHTML;
      })
      console.log('TESTCASE:division_tag:success');
    }
    catch(e){
      console.log('TESTCASE:division_tag:failure');
    }

    const page1 = await browser.newPage();
    try{
      await page1.goto('https://api.example.com/');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      await page1.waitForSelector('h1',{timeout : 2000});
      await page1.waitForSelector('form',{timeout : 2000});

    const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector("#tipForm");
        return heading.innerHTML;
    })
    console.log('TESTCASE:form_tag:success');
    }catch(e){
      console.log('TESTCASE:form_tag:failure');
    }

    const page2 = await browser.newPage();
    try{
      await page2.goto('https://api.example.com/');
      await page2.setViewport({
        width:1200,
        height:800,
      })

      await page2.waitForSelector('label',{timeout : 2000});
      await page2.waitForSelector('input',{timeout : 2000});

      const result1 = await page2.evaluate(()=>{
        let heading = document.querySelector("#billAmount");
        return heading.innerHTML;
    })
    console.log('TESTCASE:bill_amount_tags:success');
    }
    catch(e){
      console.log('TESTCASE:bill_amount_tags:failure');
    }

    const page3 = await browser.newPage();
    try{
      await page3.goto('https://api.example.com/');
      await page3.setViewport({
        width:1200,
        height:800,
      })

      await page3.waitForSelector('label',{timeout : 2000});
      await page3.waitForSelector('select',{timeout : 2000});

      const result1 = await page3.evaluate(()=>{
        let heading = document.querySelector("#tipPercentage");
        return heading.innerHTML;
    })
    console.log('TESTCASE:tip_percentage_tags:success');
    }
    catch(e){
      console.log('TESTCASE:tip_percentage_tags:failure');
    }

    const page4 = await browser.newPage();
    try{
      await page4.goto('https://api.example.com/');
      await page4.setViewport({
        width:1200,
        height:800,
      })

      await page4.waitForSelector('button',{timeout : 2000});
      const onclickValue = await page.$eval('button', el => el.getAttribute('onclick'));
      
      if(onclickValue == "calculateTip()"){
        console.log('TESTCASE:button_tag_has_correct_onclick:success');
      }
    }catch(e){
      console.log('TESTCASE:button_tag_has_correct_onclick:failure');
    }

    const page5 = await browser.newPage();
    try{
      await page5.goto('https://api.example.com/');
      await page5.setViewport({
        width:1200,
        height:800,
      })

     await page5.waitForSelector('div',{timeout : 2000});
     await page5.waitForSelector('p',{timeout : 2000});

    const result1 = await page5.evaluate(()=>{
            let heading = document.querySelector("#result");
            return heading.innerHTML;
    })
    const result2 = await page5.evaluate(()=>{
            let heading = document.querySelector("#tipAmount");
            return heading.innerHTML;
    })
    const result3 = await page5.evaluate(()=>{
            let heading = document.querySelector("#totalAmount");
            return heading.innerHTML;
    })
    console.log('TESTCASE:result_container:success');
    }
    catch(e){
      console.log('TESTCASE:result_container:failure');
    }

    const page6 = await browser.newPage();
    try{
        await page6.goto('https://api.example.com/');
        await page6.setViewport({
            width:1200,
            height:800,
        })
        // Wait for the elements to be added to the page
        await page6.waitForSelector('#billAmount', {timeout : 2000});
        await page6.waitForSelector('#tipPercentage', {timeout : 2000});
        
        // Set some input values
        await page6.evaluate(() => {
            document.querySelector('#billAmount').value = '50';
            document.querySelector('#tipPercentage').value = '15';
        });

         // Trigger the calculateTip function
        await page6.evaluate(() => {
            calculateTip();
        });
  
      // Capture and output the results
      const tipAmount = await page6.$eval('#tipAmount', (span) => span.innerText);
      const totalAmount = await page6.$eval('#totalAmount', (span) => span.innerText);
  
      // Check if the amounts are calculated correctly
      const expectedTipAmount = '7.50'; // Adjust this based on your calculation
      const expectedTotalAmount = '57.50'; // Adjust this based on your calculation
  
      if (tipAmount === expectedTipAmount && totalAmount === expectedTotalAmount) {
        console.log('TESTCASE:amounts_calculated_correctly:success');
      } else {
        console.log('TESTCASE:amounts_calculated_correctly:failure');
      }
    } catch (e) {
        console.log(e);
      console.log('TESTCASE:amounts_calculated_correctly:failure');
    }

  
  const page7 = await browser.newPage();

  try {
    await page7.goto('https://api.example.com/');
    const containerStyle = await page7.evaluate(() => {
      const containerElement = document.querySelector('.container');
      return {
        maxWidth: window.getComputedStyle(containerElement).maxWidth,
        margin: window.getComputedStyle(containerElement).margin,
        backgroundColor: window.getComputedStyle(containerElement).backgroundColor,
        padding: window.getComputedStyle(containerElement).padding,
        boxShadow: window.getComputedStyle(containerElement).boxShadow,
        borderRadius: window.getComputedStyle(containerElement).borderRadius,
      };
    });

    // Check the container style properties
    const expectedMargin = '50px 80px';
    const expectedBackgroundColor = 'rgb(255, 255, 255)';
    const expectedPadding = '20px';

    if (
      containerStyle.margin === expectedMargin &&
      containerStyle.backgroundColor === expectedBackgroundColor &&
      containerStyle.padding === expectedPadding
    ) {
      console.log('TESTCASE:validate_container_style:success');
    } else {
      console.log('TESTCASE:validate_container_style:failure');
    }
  } catch (error) {
    console.log('TESTCASE:validate_container_style:failure');
  }


  const page8 = await browser.newPage();

  try {
    await page8.goto('https://api.example.com/');
    // Evaluate and verify the styles for the form element
      const formStyles = await page8.evaluate(() => {
        const formElement = document.querySelector('form');
        return {
          display: window.getComputedStyle(formElement).display,
          gap: window.getComputedStyle(formElement).gap,
        };
      });

      // Check if the styles for form match the expected values
      const expectedDisplay = 'grid';
      const expectedGap = '10px';

      if (
        formStyles.display === expectedDisplay &&
        formStyles.gap === expectedGap
      ) {
        console.log('TESTCASE:form_styles:success');
      } else {
        console.log('TESTCASE:form_styles:failure');
      }
    } catch (error) {
      console.log('TESTCASE:form_styles:failure');
    }


    const page9 = await browser.newPage();
    try {
      await page9.goto('https://api.example.com/');

      // Evaluate and verify the styles for the button element
      const buttonStyles = await page9.evaluate(() => {
        const buttonElement = document.querySelector('button');
        return {
          backgroundColor: window.getComputedStyle(buttonElement).backgroundColor,
          color: window.getComputedStyle(buttonElement).color,
          cursor: window.getComputedStyle(buttonElement).cursor,
        };
      });

      // Check if the styles for the button match the expected values
      const expectedBackgroundColor = 'rgb(76, 175, 80)';
      const expectedColor = 'rgb(255, 255, 255)';
      const expectedCursor = 'pointer';

      if (
        buttonStyles.backgroundColor === expectedBackgroundColor &&
        buttonStyles.color === expectedColor &&
        buttonStyles.cursor === expectedCursor
      ) {
        console.log('TESTCASE:button_styles:success');
      } else {
        console.log('TESTCASE:button_styles:failure');
      }
    } catch (error) {
      console.log('TESTCASE:button_styles:failure');
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
        await page9.close();

      await browser.close();
    }

})();
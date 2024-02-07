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
      await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
      await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
      await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
      await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
      await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
      await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
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
        await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/tip_calc/index.html');
        await page6.setViewport({
            width:1200,
            height:800,
        })
        // Wait for the elements to be added to the page
        await page6.waitForSelector('#billAmount');
        await page6.waitForSelector('#tipPercent');
        
        // Set some input values
        await page6.evaluate(() => {
            document.querySelector('#billAmount').value = '50';
            document.querySelector('#tipPercent').value = '15';
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
        console.log('TESTCASE:amounts_calculated_correctly: success');
      } else {
        console.log('TESTCASE:amounts_calculated_correctly: failure');
        console.log(`Expected Tip Amount: ${expectedTipAmount}, Actual Tip Amount: ${tipAmount}`);
    console.log(`Expected Total Amount: ${expectedTotalAmount}, Actual Total Amount: ${totalAmount}`);
      }
    } catch (e) {
        console.log(e);
      console.log('TESTCASE:amounts_calculated_correctly: failure');
    }

    finally{
        await page.close();
        await page1.close();
        await page2.close();
        await page3.close();
        await page4.close();
        await page5.close();
        await page6.close();

      await browser.close();
    }

})();
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:8081/');
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
      await page1.goto('http://localhost:8081/');
      await page1.setViewport({
        width:1200,
        height:1200,
      })
      await page1.waitForSelector('h1',{timeout : 2000});

      const h1Text = await page1.$eval('h1', el => el.textContent);
      if (h1Text === 'Grade Calculator') {
        console.log('TESTCASE:h1_tag:success');
      } else {
        console.log('TESTCASE:h1_tag:failure');
      }    
    } catch(e){
      console.log('TESTCASE:h1_tag:failure');
    }

    const page2 = await browser.newPage();
    try{
      await page2.goto('http://localhost:8081/');
      await page2.setViewport({
        width:1200,
        height:1200,
      })

      await page2.waitForSelector('form',{timeout : 2000});
      await page2.waitForSelector('label',{timeout : 2000});
      await page2.waitForSelector('input',{timeout : 2000});

      const result2 = await page2.evaluate(()=>{
        let heading = document.querySelector("#assignment1");
        return heading.innerHTML;
      })

      const result3 = await page2.evaluate(()=>{
        let heading = document.querySelector("#assignment2");
        return heading.innerHTML;
      })

      const result4 = await page2.evaluate(()=>{
        let heading = document.querySelector("#assignment3");
        return heading.innerHTML;
      })

      console.log('TESTCASE:form_tag:success');
    } catch(e){
      console.log('TESTCASE:form_tag:failure');
    }

    const page3 = await browser.newPage();
    try{
      await page3.goto('http://localhost:8081/');
      await page3.setViewport({
        width:1200,
        height:800,
      })

      await page3.waitForSelector('button',{timeout : 2000});
      const onclickValue = await page3.$eval('button', el => el.getAttribute('onclick'));
      
      if(onclickValue == "calculateGrade()"){
        console.log('TESTCASE:button_tag_has_correct_onclick:success');
      }
    }catch(e){
      console.log('TESTCASE:button_tag_has_correct_onclick:failure');
    }

    const page4 = await browser.newPage();
    try{
      await page4.goto('http://localhost:8081/');
      await page4.setViewport({
        width:1200,
        height:800,
      })

      // await page4.waitForSelector('table',{timeout : 2000});
      await page4.waitForSelector('tr',{timeout : 2000});
      await page4.waitForSelector('th',{timeout : 2000});
      await page4.waitForSelector('tbody',{timeout : 2000});

      const result1 = await page4.evaluate(()=>{
        let heading = document.querySelector("table#marksTable.hidden");
        return heading.innerHTML;
      })

      console.log('TESTCASE:table_tag:success');
    }catch(e){
      console.log('TESTCASE:table_tag:failure');
    }

    const page5 = await browser.newPage();
    try{
      await page5.goto('http://localhost:8081/');
      await page5.setViewport({
        width:1200,
        height:800,
      })

     await page5.waitForSelector('p',{timeout : 2000});

    const result = await page5.evaluate(()=>{
            let heading = document.querySelector("div#result.hidden");
            return heading.innerHTML;
    })
    const result1 = await page5.evaluate(()=>{
            let heading = document.querySelector("#overallGrade");
            return heading.innerHTML;
    })
    const result2 = await page5.evaluate(()=>{
            let heading = document.querySelector("#averageScore");
            return heading.innerHTML;
    })
    const result3 = await page5.evaluate(()=>{
            let heading = document.querySelector("#feedback");
            return heading.innerHTML;
    })
    console.log('TESTCASE:result_container:success');
    }
    catch(e){
      console.log('TESTCASE:result_container:failure');
    }

    const page6 = await browser.newPage();
    try {
      await page6.goto('http://localhost:8081/');
      await page6.setViewport({
        width: 1200,
        height: 1200,
      });

      // Test Case 4: Invalid Scores (Out of Range)
      await page6.type('#assignment1', '-5');
      await page6.type('#assignment2', '105');
      await page6.type('#assignment3', '75');

       // Intercept page alerts
      let alertMessage;
      page6.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.dismiss();
      })
      await page6.click('button');

      await page6.waitForTimeout(1000); // Adjust as needed
      if (alertMessage) {
        console.log('TESTCASE:check_for_invalid_scores:success');
      } else {
        console.log('TESTCASE:check_for_invalid_scores:failure');
      }
    } catch (e) {
      console.log('TESTCASE:check_for_invalid_scores:failure');
    }

    const page7 = await browser.newPage();
    try {
      await page7.goto('http://localhost:8081/');
      await page7.setViewport({
        width: 1200,
        height: 1200,
      });

      // Test Case 3: Valid Scores
      await page7.type('#assignment1', '80');
      await page7.type('#assignment2', '90');
      await page7.type('#assignment3', '100');
      await page7.click('button');

      await page7.waitForTimeout(2000); // Increase wait time

      const tableContent = await page7.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('#marksTable td'));
        return tds.map(td => td.textContent);
      });


      const result1 = await page7.evaluate(()=>{
        let heading = document.querySelector("#overallGrade");
        return heading.innerText;
      })
      const result2 = await page7.evaluate(()=>{
        let heading = document.querySelector("#averageScore");
        return heading.innerText;
      })
      const result3 = await page7.evaluate(()=>{
        let heading = document.querySelector("#feedback");
        return heading.innerText;
      })

      if (result1.trim() === 'A' && result2.trim() === '90.00' && result3.trim() === 'Excellent!' && tableContent.includes('Assignment 1') && tableContent.includes('80') && tableContent.includes('Assignment 2') && tableContent.includes('90') && tableContent.includes('Assignment 3') && tableContent.includes('100')) {
        console.log('TESTCASE:check_for_valid_scores:success');
      } else {
        console.log('TESTCASE:check_for_valid_scores:failure');
      }

    } catch (e) {
      console.log(e);
      console.log('TESTCASE:check_for_valid_scores:failure');
    }
    
    const page8 = await browser.newPage();

    try {
      await page8.goto('http://localhost:8081/');
      const containerStyle = await page8.evaluate(() => {
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
      const expectedMaxWidth = '600px';
      const expectedMargin = '50px 80px';
      const expectedBackgroundColor = 'rgb(255, 255, 255)';
      const expectedPadding = '20px';
      const expectedBoxShadow = 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px';
      const expectedBorderRadius = '8px';
  
      if (
        containerStyle.maxWidth === expectedMaxWidth &&
        containerStyle.margin === expectedMargin &&
        containerStyle.backgroundColor === expectedBackgroundColor &&
        containerStyle.padding === expectedPadding &&
        containerStyle.boxShadow === expectedBoxShadow &&
        containerStyle.borderRadius === expectedBorderRadius
      ) {
        console.log('TESTCASE:validate_container_style:success');
      } else {
        console.log('TESTCASE:validate_container_style:failure');
      }
    } catch (error) {
      console.log('TESTCASE:validate_container_style:failure');
    }
  
    const page9 = await browser.newPage();

    try {
      await page9.goto('http://localhost:8081/');
      // Evaluate and verify the styles for the form element
        const formStyles = await page9.evaluate(() => {
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

      const page10 = await browser.newPage();
    try {
      await page10.goto('http://localhost:8081/');

      // Evaluate and verify the styles for the button element
      const buttonStyles = await page10.evaluate(() => {
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



finally {
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
    await page10.close();
    
    await browser.close();
  }

})();
const e = require('express');
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    try {
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
        height:1200,
      })
      await page1.waitForSelector('header',{timeout : 2000});
      await page1.waitForSelector('h1',{timeout : 2000});
      await page1.waitForSelector('p',{timeout : 2000});


      const h1Text = await page1.$eval('h1', el => el.textContent);
      const pText = await page1.$eval('p', el => el.textContent);

      if (h1Text === 'My 11 Circle Scoreboard' && pText === 'Cricket World Cup 2023 - Final') {
        console.log('TESTCASE:header_section:success');
      } else {
        console.log('TESTCASE:header_section:failure');
      }    
    } catch(e){
      console.log('TESTCASE:header_section:failure');
    }

    const page2 = await browser.newPage();
    try{
      await page2.goto('https://api.example.com/');
      await page2.setViewport({
        width:1200,
        height:1200,
      })

      await page2.waitForSelector('main',{timeout : 2000});
      await page2.waitForSelector('table',{timeout : 2000});

      const result2 = await page2.evaluate(()=>{
        let heading = document.querySelector(".scoreboard");
        return heading.innerHTML;
      })

      console.log('TESTCASE:main_section:success');
    } catch(e){
      console.log('TESTCASE:main_section:failure');
    }

    const page3 = await browser.newPage();
    try{
      await page3.goto('https://api.example.com/');
      await page3.setViewport({
        width:1200,
        height:800,
      })

      await page3.waitForSelector('button',{timeout : 2000});
      const onclickValue = await page3.$eval('button', el => el.getAttribute('onclick'));
      
      if(onclickValue == "sortPlayers()"){
        console.log('TESTCASE:button_tag_has_correct_onclick:success');
      }else{
        console.log('TESTCASE:button_tag_has_correct_onclick:failure');
      }
    }catch(e){
      console.log('TESTCASE:button_tag_has_correct_onclick:failure');
    }

    const page4 = await browser.newPage();
    try {
      await page4.goto('https://api.example.com/');
      await page4.setViewport({
        width: 1200,
        height: 800,
      })

      await page4.waitForSelector('button', { timeout: 2000 });

      // Get the initial order of scores
      const initialScores = await page4.$$eval('.scoreboard td:nth-child(2)', scores => scores.map(score => parseInt(score.textContent)));

      // Click the sort button
      await page4.click('button');

      // Get the order of scores after sorting
      const sortedScores = await page4.$$eval('.scoreboard td:nth-child(2)', scores => scores.map(score => parseInt(score.textContent)));

      // Check if the scores are sorted in descending order
      const isSortedDescending = sortedScores.every((score, index) => score <= (index > 0 ? sortedScores[index - 1] : Infinity));

      if (isSortedDescending) {
        console.log('TESTCASE:sorting_players:success');
      } else {
        console.log('TESTCASE:sorting_players:failure');
      }
    } catch (e) {
      console.log('TESTCASE:sorting_players:failure');
    }
      
    const page5 = await browser.newPage();

    try {
      await page5.goto('https://api.example.com/');
      const containerStyle = await page5.evaluate(() => {
        const containerElement = document.querySelector('.container');
        return {
          maxWidth: window.getComputedStyle(containerElement).maxWidth,
          margin: window.getComputedStyle(containerElement).margin,
          padding: window.getComputedStyle(containerElement).padding,
          
        };
      });
  
      // Check the container style properties
      const expectedMaxWidth = '800px';
      const expectedMargin = '0px';
      const expectedPadding = '20px';
  
      if (
        containerStyle.maxWidth === expectedMaxWidth &&
        containerStyle.margin === expectedMargin &&
        containerStyle.padding === expectedPadding 
      ) {
        console.log('TESTCASE:container_style:success');
      } else {
        console.log('TESTCASE:container_style:failure');
      }
    } catch (error) {
      console.log(error);
      console.log('TESTCASE:container_style:failure');
    }

    const page6 = await browser.newPage();

    try {
      await page6.goto('https://api.example.com/');
      const containerStyle = await page6.evaluate(() => {
        const containerElement = document.querySelector('header');
        return {
          textalign: window.getComputedStyle(containerElement).textAlign,
          margin: window.getComputedStyle(containerElement).marginBottom,          
        };
      });
  
      // Check the container style properties
      const expectedTextAlign = 'center';
      const expectedMargin = '20px';
  
      if (
        containerStyle.textalign === expectedTextAlign &&
        containerStyle.margin === expectedMargin 
      ) {
        console.log('TESTCASE:header_style:success');
      } else {
        console.log('TESTCASE:header_style:failure');
      }
    } catch (error) {
      console.log(error);
      console.log('TESTCASE:header_style:failure');
    }

    const page7 = await browser.newPage();

    try {
      await page7.goto('https://api.example.com/');
      const containerStyle = await page7.evaluate(() => {
        const containerElement = document.querySelector('button');
        return {
          padding: window.getComputedStyle(containerElement).padding,
          margintop: window.getComputedStyle(containerElement).marginTop, 
          marginleft: window.getComputedStyle(containerElement).marginLeft,         
        };
      });
  
      // Check the container style properties
      const expectedPadding = '10px';
      const expectedMarginTop = '10px';
      const expectedMarginLeft = '296.391px';
  
      if (
        containerStyle.padding === expectedPadding &&
        containerStyle.margintop === expectedMarginTop &&
        containerStyle.marginleft === expectedMarginLeft
      ) {
        console.log('TESTCASE:button_style:success');
      } else {
        console.log('TESTCASE:button_style:failure');
      }
    } catch (error) {
      console.log('TESTCASE:button_style:failure');
    }

    const page8 = await browser.newPage();
    try {
      await page7.goto('https://api.example.com/');
      const containerStyle = await page7.evaluate(() => {
        const containerElement = document.querySelector('body');
        return {
          fontFamily: window.getComputedStyle(containerElement).fontFamily,
          backgroundColor: window.getComputedStyle(containerElement).backgroundColor, 
          color: window.getComputedStyle(containerElement).color,         
        };
      });

      const expectedFontFamily = 'Arial, sans-serif';
      const expectedBackgroundColor = 'rgb(26, 26, 26)';
      const expectedColor = 'rgb(255, 255, 255)';

      if (
        containerStyle.fontFamily === expectedFontFamily &&
        containerStyle.backgroundColor === expectedBackgroundColor &&
        containerStyle.color === expectedColor
      ) {
        console.log('TESTCASE:body_style:success');
      } else {
        console.log('TESTCASE:body_style:failure');
      }

    } catch (error) {
      console.log('TESTCASE:body_style:failure');
    }

    const page9 = await browser.newPage();
    try {
      await page9.goto('https://api.example.com/');
      const containerStyle = await page9.evaluate(() => {
        const containerElement = document.querySelector('header h1');
        return {
          fontSize: window.getComputedStyle(containerElement).fontSize,         
        };
      });

      const expectedFontSize = '32px';
      if (
        containerStyle.fontSize === expectedFontSize 
      ) {
        console.log('TESTCASE:heading_h1_style:success');
      } else {
        console.log('TESTCASE:heading_h1_style:failure');
      }      

    }
    catch(e){
      console.log('TESTCASE:heading_h1_style:failure');
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
      await browser.close();
    }

  })();
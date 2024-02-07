const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try{
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('th',{timeout: 2000});
    console.log('TESTCASE:checks_table_header_is_present:success');
  }
  catch(e){
    console.log('TESTCASE:checks_table_header_is_present:failure');
  }


  const page1 = await browser.newPage();
  try{
    await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('h1', {timeout: 2000});
    const result2 = await page1.evaluate(()=>{
      let heading = document.querySelector(".container");
      return heading.innerHTML;
    })
    console.log('TESTCASE:checks_container_with_h1_is_present:success');
  }
  catch(e){
    console.log('TESTCASE:checks_container_with_h1_is_present:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('table', {timeout: 2000});
    console.log('TESTCASE:check_table_is_present:success');
  }
  catch(e){
    console.log('TESTCASE:check_table_is_present:failure');
  }

  const page3 = await browser.newPage();
  try{
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('tr', {timeout: 2000});
    await page3.waitForSelector('td', {timeout: 2000});

    console.log('TESTCASE:checks_table_rows_and_cells_present:success');
  }
  catch(e){
    console.log('TESTCASE:checks_table_rows_and_cells_present:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button', {timeout: 2000});
    const result1 = await page4.evaluate(()=>{
      let heading = document.querySelector(".total-marks-button");
      return heading.innerHTML;
    })
    console.log('TESTCASE:checks_total_marks_button_present:success');
  }
  catch(e){
    console.log('TESTCASE:checks_total_marks_button_present:failure');
  }

  const page5 = await browser.newPage();

  try {
    // Go to the page
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/javascript/sdet/student/student/public/index.html');

    let alertTriggered = false;

    page5.on('dialog', async (dialog) => {
      if (dialog.message().includes('Total Marks')) {
        alertTriggered = true;
        await dialog.dismiss();
      }
    });

    // Execute the function on the page
    await page5.evaluate(() => {
      // Execute the showTotalMarks function
      showTotalMarks();
    });

    if (alertTriggered) {
      console.log('TESTCASE:show_total_marks_function:success');
    } else {
      console.log('TESTCASE:show_total_marks_function:failure');
    }
  } catch (e) {
    console.log('TESTCASE:show_total_marks_function:failure');
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

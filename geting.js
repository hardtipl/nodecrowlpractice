const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/COVID-19_pandemic');
// await browser.waitForTarget(()=>false) //to hold browser
await page.screenshot({path:"wiki.png"}); //to take a screenshot of the site
  // Get the "viewport" of the page, as reported by the page.
  const result= await page.evaluate(()=>{
const hedingwiki=document.querySelectorAll(".mw-headline")
const loopofheader=[...hedingwiki]
return loopofheader.map(j=>j.innerText)
})
  console.log('availble headers:', result);   

  await browser.close();
})();
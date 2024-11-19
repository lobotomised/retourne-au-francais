const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-extensions-except=../',
            '--load-extension=../'
        ],
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');

    const result = await page.evaluate(() => {
        return document.body.innerHTML.includes('Texte modifié par l\'extension');
    });

    if (result) {
        console.log('Le test a réussi !');
    } else {
        console.log('Le test a échoué !');
    }

    await browser.close();
})();

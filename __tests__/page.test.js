const puppeteer = require('puppeteer');

test('la página muestra el texto correcto', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080'); // Ajusta la URL si es necesario
  const text = await page.$eval('h1', el => el.textContent);
  expect(text).toBe('¡Hola Mundo!');
  await browser.close();
});

import { chromium } from 'playwright';
import { goTo } from './services/page';

/**
 *  Retrieves the desired attribute from the page.
 *
 * @param {*} page
 * @param {*} elementSelector
 * @param {*} attribute
 * @returns
 */
async function getHandle(page, elementSelector) {
	// await goTo(page, 'https://www.crawler-test.com/');
	await goTo(page, 'https://www.crawler-test.com/');
	const handle = await page.$(elementSelector);
	return handle;
}

async function getGeneralData(browser) {
	const page = await browser.newPage();
	// console.log('going to');
	await goTo(page, 'https://www.worldometers.info/coronavirus/');
	console.log('went');
	const wrapper = await page.$$('#maincounter-wrap');
	const generalData = wrapper.map(async (handle) => {
		let title = await handle.$eval('h1', (el) => el.innerText);
		let numbers = await handle.$eval('.maincounter-number', (el) => el.innerText);
		const singleData = { label, value };
		return singleData;
	});
	const results = await Promise.all(generalData);
	console.log(results);
	// const numbers = await wrapper.$$('.maincounter-number');
	// const totalCases = await page.evaluate(
	// 	(handle) => handle.innerText,
	// 	numberHandle,
	// );
	return 'foo';
}

const text = async () => {
	const browser = await chromium.launch();
	const totalCases = await getGeneralData(browser);
	const objectTotal = {
		text: 'Worldwide cases',
		description: 'This number represents the total amount of cases of COVID-19.',
	};
	// console.log(totalCases);
};

// const text = async () => {
// 	const browser = await chromium.launch();
// 	const browserPage = await browser.newPage();
// 	const neonHandle = await getHandle(browserPage, '.neon-effect');
// 	const neonHandleText = await browserPage.evaluate(
// 		(handle) => handle.innerText,
// 		neonHandle,
// 	);
// 	console.log(neonHandleText);
// };

text();
// const text = await test(chromiumBrowser);
// console.log(text);

// (async () => {
// 	const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
// 	const page = await browser.newPage();
// 	await page.goto('https://www.crawler-test.com/');
// const logoText = await page.$eval('.neon-effect', (el) => el.innerText );
// 	// await browser.close();
// 	console.log(logoText);
// })();

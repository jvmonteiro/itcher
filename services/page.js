import 'playwright';
export async function goTo(page, url) {
	await page.goto(url);
	return page;
}

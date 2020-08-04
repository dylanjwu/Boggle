describe('The header', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/public/boggle.html');
    });

    after(async function() {
        await page.close();
    });

    it("testing AJAX request", async() => {

    });

});
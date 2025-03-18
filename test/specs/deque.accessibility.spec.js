describe("Accessibility Testing on Mobile Using Appium and Deque on Sauce Labs Devices", () => {
    it('Test Using appium image appium2-deque-accessibility', async () => {
        const settings = { apiKey: `${DEQUE_API_KEY}` }
        await driver.execute('mobile: axeScan', settings);
    });
});
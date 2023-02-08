const { test, expect, request } = require('@playwright/test');

test("Validate Response Status Site: 'Current Discount Codes'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/2021/03/26/current-discount-codes/");
    expect(loginResponse.ok()).toBeTruthy();
})

test("Validate Response Status Site: 'Shoes Category'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/product-category/uncategorized/shoes/");
    expect(loginResponse.ok()).toBeTruthy();
})

test("Validate Response Status Site: 'Men Category'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/product-category/uncategorized/shoes/men/");
    expect(loginResponse.ok()).toBeTruthy();
})

test("Validate Response Status Site: 'Woman Category'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/product-category/uncategorized/shoes/woman/");
    expect(loginResponse.ok()).toBeTruthy();
})

test("Validate Response Status Site: 'Sport Category'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/product-category/uncategorized/shoes/sport/");
    expect(loginResponse.ok()).toBeTruthy();
})

test("Validate Response Status Site: 'Other Category'", async () => {
    const apiResponse = await request.newContext();
    const loginResponse = await apiResponse.get("http://www.77bugs.pl/product-category/uncategorized/shoes/other/");
    expect(loginResponse.ok()).toBeTruthy();
});

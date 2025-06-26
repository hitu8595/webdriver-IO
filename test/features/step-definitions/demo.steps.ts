import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from '@wdio/globals'
import chai from 'chai'

Given (/^Google page is opened$/, async() => {
   await browser.url("https://www.google.com");
    await browser.pause(1000);
})

When(/^Search with (.*)$/, async(searchItem) =>{
    console.log(`searchItem: ${searchItem}`);
    let ele = await $(`[name = q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter");
})

Then(/^Click on first search result$/, async() =>{
    let firstEle = await $(`<h3>`)
    await firstEle.click();
})

Then(/^URL should match (.*)$/, async(expectedURL) =>{
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
})
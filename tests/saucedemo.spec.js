import { test, expect } from '@playwright/test';

test('sauce demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('#login-button').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await page.click('#add-to-cart-sauce-labs-backpack')
  await page.click('#add-to-cart-sauce-labs-bolt-t-shirt')
  await page.click('#add-to-cart-sauce-labs-onesie')
  await page.click('#add-to-cart-sauce-labs-bike-light')
  await page.click('#add-to-cart-sauce-labs-fleece-jacket')
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toBeVisible();
  await expect(badge).toHaveText('5');
  await page.click('#remove-sauce-labs-backpack')
  const badge1 = page.locator('.shopping_cart_badge');
  await expect(badge1).toBeVisible();
  await expect(badge1).toHaveText('4');
  await page.click('#item_1_title_link')
  await page.click('#remove')
  const badge2 = page.locator('.shopping_cart_badge');
  await expect(badge2).toBeVisible();
  await expect(badge2).toHaveText('3');
  await page.click('#back-to-products')
  await page.click('#react-burger-menu-btn')

});

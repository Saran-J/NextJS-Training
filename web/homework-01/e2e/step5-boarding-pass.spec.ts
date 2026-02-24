import { test, expect } from '@playwright/test';

// Helper to navigate to step5 with 1 passenger
async function goToStep5(page: import('@playwright/test').Page, selectBoth = false) {
    await page.goto('/main/checkin');
    await page.getByPlaceholder('Enter your last name').fill('Smith');
    await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
    await page.getByRole('button', { name: 'Retrieve Booking' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step2/);

    if (selectBoth) {
        await page.getByRole('button', { name: 'Select All' }).click();
    } else {
        await page.getByText('ALEX HUUM').click();
    }
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step3/);

    // Fill form for each passenger
    const nationalityInputs = page.locator('input[placeholder="e.g. TH, US"]');
    const phoneInputs = page.locator('input[placeholder="Enter phone number"]');
    const count = await nationalityInputs.count();
    for (let i = 0; i < count; i++) {
        await nationalityInputs.nth(i).pressSequentially('th');
        await phoneInputs.nth(i).pressSequentially('0812345678');
    }

    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step4/);

    await page.getByRole('link', { name: 'Accept & Continue' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step5/);
}

test.describe('Step 5 - Boarding Pass', () => {
    test('5.1 displays boarding pass for selected passengers (2 passengers)', async ({ page }) => {
        await goToStep5(page, true);
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('Somsee Kuum')).toBeVisible();
    });

    test('5.2 displays correct name and seat', async ({ page }) => {
        await goToStep5(page, false);
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('12A')).toBeVisible();
    });

    test('5.3 displays flight info', async ({ page }) => {
        await goToStep5(page, false);
        await expect(page.getByText('BKK', { exact: true })).toBeVisible();
        await expect(page.getByText('SIN', { exact: true })).toBeVisible();
        await expect(page.getByText('QL123')).toBeVisible();
    });

    test('5.4 has Apple Wallet button with icon', async ({ page }) => {
        await goToStep5(page, false);
        const walletButton = page.getByRole('button', { name: /Add to Apple Wallet/i });
        await expect(walletButton).toBeVisible();
        const walletIcon = walletButton.locator('img[alt="Apple Wallet"]');
        await expect(walletIcon).toBeVisible();
    });

    test('5.5 shows Done button', async ({ page }) => {
        await goToStep5(page, false);
        await expect(page.getByRole('link', { name: 'Done' })).toBeVisible();
    });

    test('5.6 Back and Continue buttons are hidden', async ({ page }) => {
        await goToStep5(page, false);
        const backLink = page.getByRole('link', { name: 'Back' });
        const continueLink = page.getByRole('link', { name: 'Continue' });
        // They should exist but be hidden via CSS
        await expect(backLink).toBeHidden();
        await expect(continueLink).toBeHidden();
    });
});

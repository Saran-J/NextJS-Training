import { test, expect } from '@playwright/test';

// Helper to navigate to step4
async function goToStep4(page: import('@playwright/test').Page) {
    await page.goto('/main/checkin');
    await page.getByPlaceholder('Enter your last name').fill('Smith');
    await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
    await page.getByRole('button', { name: 'Retrieve Booking' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step2/);

    await page.getByText('ALEX HUUM').click();
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step3/);

    const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
    const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();
    await nationalityInput.pressSequentially('th');
    await phoneInput.pressSequentially('0812345678');

    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/\/checkinstep\/step4/);
}

test.describe('Step 4 - Dangerous Goods Declaration', () => {
    test.beforeEach(async ({ page }) => {
        await goToStep4(page);
    });

    test('4.1 displays content correctly', async ({ page }) => {
        await expect(page.getByText('Dangerous Goods Declaration')).toBeVisible();
        await expect(page.getByText('Explosives')).toBeVisible();
        await expect(page.getByText('Flammable Items')).toBeVisible();
        await expect(page.getByText('Corrosives')).toBeVisible();
        await expect(page.getByText('Lithium Battery')).toBeVisible();
        await expect(page.getByText('Tear Gas')).toBeVisible();
    });

    test('4.2 button shows Accept & Continue', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Accept & Continue' })).toBeVisible();
    });

    test('4.3 Accept & Continue navigates to step5', async ({ page }) => {
        await page.getByRole('link', { name: 'Accept & Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step5/);
    });

    test('4.4 Back navigates to step3', async ({ page }) => {
        await page.getByRole('link', { name: 'Back' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step3/);
    });
});

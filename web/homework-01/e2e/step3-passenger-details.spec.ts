import { test, expect } from '@playwright/test';

// Helper to navigate to step3 with 1 passenger selected
async function goToStep3(page: import('@playwright/test').Page, selectBoth = false) {
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
}

test.describe('Step 3 - Passenger Details', () => {
    test('3.1 shows form for selected passengers (1 selected)', async ({ page }) => {
        await goToStep3(page, false);
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        // Only 1 passenger info card
        const cards = page.locator('text=ALEX HUUM');
        await expect(cards).toHaveCount(1);
    });

    test('3.1b shows form for both passengers (2 selected)', async ({ page }) => {
        await goToStep3(page, true);
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('Somsee Kuum')).toBeVisible();
    });

    test('3.2 Continue disabled initially (fields empty)', async ({ page }) => {
        await goToStep3(page, false);
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).toHaveClass(/opacity-50/);
    });

    test('3.3 Nationality rejects non-English characters', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        await nationalityInput.fill('12');
        await expect(nationalityInput).toHaveValue('');
    });

    test('3.4 Nationality max 2 characters', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        await nationalityInput.pressSequentially('ABCDE');
        const value = await nationalityInput.inputValue();
        expect(value.length).toBeLessThanOrEqual(2);
    });

    test('3.5 Nationality auto-uppercase', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        await nationalityInput.pressSequentially('th');
        await expect(nationalityInput).toHaveValue('TH');
    });

    test('3.6 Nationality 1 char shows error', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        await nationalityInput.pressSequentially('T');
        await expect(page.getByText('Please enter exactly 2 English letters')).toBeVisible();
    });

    test('3.7 Phone rejects non-numeric characters', async ({ page }) => {
        await goToStep3(page, false);
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();
        await phoneInput.pressSequentially('abcdef');
        await expect(phoneInput).toHaveValue('');
    });

    test('3.8 Phone max 10 digits', async ({ page }) => {
        await goToStep3(page, false);
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();
        await phoneInput.pressSequentially('01234567890123');
        const value = await phoneInput.inputValue();
        expect(value.length).toBeLessThanOrEqual(10);
    });

    test('3.9 Phone not starting with 0 shows error', async ({ page }) => {
        await goToStep3(page, false);
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();
        await phoneInput.pressSequentially('1234567890');
        await expect(page.getByText('Phone number must start with 0')).toBeVisible();
    });

    test('3.10 Phone less than 10 digits shows error', async ({ page }) => {
        await goToStep3(page, false);
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();
        await phoneInput.pressSequentially('0123');
        await expect(page.getByText('Phone number must start with 0 and be exactly 10 digits')).toBeVisible();
    });

    test('3.11 valid fields enable Continue', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();

        await nationalityInput.pressSequentially('th');
        await phoneInput.pressSequentially('0812345678');

        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).not.toHaveClass(/opacity-50/);
    });

    test('3.12 Continue navigates to step4', async ({ page }) => {
        await goToStep3(page, false);
        const nationalityInput = page.locator('input[placeholder="e.g. TH, US"]').first();
        const phoneInput = page.locator('input[placeholder="Enter phone number"]').first();

        await nationalityInput.pressSequentially('th');
        await phoneInput.pressSequentially('0812345678');

        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step4/);
    });
});

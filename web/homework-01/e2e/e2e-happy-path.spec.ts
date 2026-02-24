import { test, expect } from '@playwright/test';

test.describe('End-to-End Happy Path', () => {
    test('6.1 complete check-in flow', async ({ page }) => {
        // Step 1: Check-in page - fill booking form
        await page.goto('/main/checkin');
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
        await page.getByRole('button', { name: 'Retrieve Booking' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step2/);

        // Step 2: Select both passengers
        await page.getByRole('button', { name: 'Select All' }).click();
        await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step3/);

        // Step 3: Fill details for both passengers
        const nationalityInputs = page.locator('input[placeholder="e.g. TH, US"]');
        const phoneInputs = page.locator('input[placeholder="Enter phone number"]');

        // Passenger 1
        await nationalityInputs.nth(0).pressSequentially('th');
        await phoneInputs.nth(0).pressSequentially('0812345678');

        // Passenger 2
        await nationalityInputs.nth(1).pressSequentially('us');
        await phoneInputs.nth(1).pressSequentially('0998765432');

        // Verify auto-uppercase
        await expect(nationalityInputs.nth(0)).toHaveValue('TH');
        await expect(nationalityInputs.nth(1)).toHaveValue('US');

        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step4/);

        // Step 4: Accept dangerous goods
        await expect(page.getByText('Dangerous Goods Declaration')).toBeVisible();
        await page.getByRole('link', { name: 'Accept & Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step5/);

        // Step 5: Verify boarding passes
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('Somsee Kuum')).toBeVisible();
        await expect(page.getByText('12A')).toBeVisible();
        await expect(page.getByText('12B')).toBeVisible();
        await expect(page.getByText('BKK').first()).toBeVisible();
        await expect(page.getByText('SIN').first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'Done' })).toBeVisible();
    });

    test('6.2 single passenger flow - only 1 passenger shown in step3 and step5', async ({ page }) => {
        // Step 1: Check-in page
        await page.goto('/main/checkin');
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
        await page.getByRole('button', { name: 'Retrieve Booking' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step2/);

        // Step 2: Select only ALEX HUUM (not Somsee Kuum)
        await page.getByText('ALEX HUUM').click();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step3/);

        // Step 3: Verify only 1 passenger form shown
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('Somsee Kuum')).toBeHidden();

        // Only 1 set of nationality/phone inputs
        const nationalityInputs = page.locator('input[placeholder="e.g. TH, US"]');
        const phoneInputs = page.locator('input[placeholder="Enter phone number"]');
        await expect(nationalityInputs).toHaveCount(1);
        await expect(phoneInputs).toHaveCount(1);

        // Fill details for the single passenger
        await nationalityInputs.nth(0).pressSequentially('th');
        await phoneInputs.nth(0).pressSequentially('0812345678');

        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step4/);

        // Step 4: Accept
        await page.getByRole('link', { name: 'Accept & Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step5/);

        // Step 5: Verify only 1 boarding pass shown
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('12A')).toBeVisible();

        // Somsee Kuum should NOT appear
        await expect(page.getByText('Somsee Kuum')).toBeHidden();
        await expect(page.getByText('12B')).toBeHidden();

        await expect(page.getByRole('link', { name: 'Done' })).toBeVisible();
    });
});

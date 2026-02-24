import { test, expect } from '@playwright/test';

test.describe('Step 2 - Select Passengers', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate through booking form to reach step2
        await page.goto('/main/checkin');
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
        await page.getByRole('button', { name: 'Retrieve Booking' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step2/);
    });

    test('2.1 should display 2 passengers', async ({ page }) => {
        await expect(page.getByText('ALEX HUUM')).toBeVisible();
        await expect(page.getByText('Somsee Kuum')).toBeVisible();
    });

    test('2.2 Continue button disabled initially', async ({ page }) => {
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).toHaveClass(/opacity-50/);
        await expect(continueLink).toHaveClass(/cursor-not-allowed/);
    });

    test('2.3 selecting 1 passenger enables Continue', async ({ page }) => {
        await page.getByText('ALEX HUUM').click();
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).not.toHaveClass(/opacity-50/);
    });

    test('2.4 deselecting all passengers disables Continue', async ({ page }) => {
        // Select then deselect
        await page.getByText('ALEX HUUM').click();
        await page.getByText('ALEX HUUM').click();
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).toHaveClass(/opacity-50/);
    });

    test('2.5 Select All selects all passengers', async ({ page }) => {
        await page.getByRole('button', { name: 'Select All' }).click();
        await expect(page.getByRole('button', { name: 'Clear All' })).toBeVisible();
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).not.toHaveClass(/opacity-50/);
    });

    test('2.6 Clear All deselects all passengers', async ({ page }) => {
        await page.getByRole('button', { name: 'Select All' }).click();
        await page.getByRole('button', { name: 'Clear All' }).click();
        await expect(page.getByRole('button', { name: 'Select All' })).toBeVisible();
        const continueLink = page.getByRole('link', { name: 'Continue' });
        await expect(continueLink).toHaveClass(/opacity-50/);
    });

    test('2.7 Back button navigates to checkin page', async ({ page }) => {
        await page.getByRole('link', { name: 'Back' }).click();
        await expect(page).toHaveURL(/\/main\/checkin/);
    });

    test('2.8 Continue navigates to step3', async ({ page }) => {
        await page.getByText('ALEX HUUM').click();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step3/);
    });
});

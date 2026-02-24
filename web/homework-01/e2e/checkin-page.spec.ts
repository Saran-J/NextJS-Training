import { test, expect } from '@playwright/test';

test.describe('Check-in Page - BookingForm', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/main/checkin');
    });

    test('1.1 should display form correctly', async ({ page }) => {
        await expect(page.getByText('Retrieve Your Booking')).toBeVisible();
        await expect(page.getByPlaceholder('Enter your last name')).toBeVisible();
        await expect(page.getByPlaceholder('e.g. ABCDEF')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Retrieve Booking' })).toBeVisible();
    });

    test('1.2 button should be disabled initially', async ({ page }) => {
        const button = page.getByRole('button', { name: 'Retrieve Booking' });
        await expect(button).toHaveClass(/cursor-not-allowed/);
    });

    test('1.3 incomplete form keeps button disabled', async ({ page }) => {
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABC'); // less than 5
        const button = page.getByRole('button', { name: 'Retrieve Booking' });
        await expect(button).toHaveClass(/cursor-not-allowed/);
    });

    test('1.4 complete form enables button', async ({ page }) => {
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
        const button = page.getByRole('button', { name: 'Retrieve Booking' });
        await expect(button).toHaveClass(/cursor-pointer/);
    });

    test('1.5 clicking button navigates to step2', async ({ page }) => {
        await page.getByPlaceholder('Enter your last name').fill('Smith');
        await page.getByPlaceholder('e.g. ABCDEF').fill('ABCDEF');
        await page.getByRole('button', { name: 'Retrieve Booking' }).click();
        await expect(page).toHaveURL(/\/checkinstep\/step2/);
    });
});

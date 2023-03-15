import { test, expect } from "@playwright/test";

const URL = "http://localhost:5173/";

test("valid monster name ", async ({ page }) => {
  await page.goto(URL);

  const AddButton = page.locator("#btn-add");
  await expect(AddButton).toBeChecked();
});

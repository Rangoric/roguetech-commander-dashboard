import { test, expect, _electron } from "@playwright/test";

test(`example test`, async () => {
  const electronApp = await _electron.launch({ args: ["."] });
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    return app.isPackaged;
  });

  expect(isPackaged).toBe(false);

  await electronApp.close();
});

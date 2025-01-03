import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          ignoreDefaultArgs: ["--headless", "--headless=old"],
          args: ["--headless=new"],
        },
      },
    },
  ],
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  }
});

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	reporter: "list",
	use: {
		baseURL: "http://localhost:3333",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	webServer: {
		command: "npm run dev -- -p 3333",
		url: "http://localhost:3333",
		reuseExistingServer: !process.env.CI,
		env: {
			E2E_FAKE_DATE: "2025-06-10",
		},
	},
});

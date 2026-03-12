import { test, expect } from "@playwright/test";

/**
 * E2E tests for the main page of The Croax band site.
 *
 * The dev server is started with E2E_FAKE_DATE=2025-06-10, giving a deterministic
 * split of the static shows list:
 *
 * Upcoming (8):
 *   19.06.2025 – Kreiselkonzert an der Sternbrücke, Hamburg
 *   23.08.2025 – Wurmloch-Festival, Krumstedt/SH
 *   30.08.2025 – Sommerfest SZ Norderstedt, Norderstedt
 *   06.09.2025 – Rock gegen Rechts, Kellinghusen
 *   31.10.2025 – Druckerei im Gängeviertel, Hamburg
 *   29.01.2026 – Markthalle, Hamburg  ← has "mehr Infos" link
 *   21.02.2026 – Freiraum, Itzehoe
 *   28.02.2026 – Hafenklang, Loud Women Fest
 *
 * Past (10):
 *   06.06.2025 – Logo, Hamburg  (most recent past)
 *   … older shows down to 23.04.2023
 */

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
test("navigation bar shows all three links", async ({ page }) => {
	const nav = page.locator("nav");
	await expect(nav.getByRole("link", { name: "Über uns" })).toBeVisible();
	await expect(nav.getByRole("link", { name: "Live" })).toBeVisible();
	await expect(nav.getByRole("link", { name: "Musik" })).toBeVisible();
});

// ---------------------------------------------------------------------------
// About section
// ---------------------------------------------------------------------------
test("about section renders band image", async ({ page }) => {
	const about = page.locator("#über-uns");
	await expect(about.locator("img").first()).toBeVisible();
});

test("about section contains band description text", async ({ page }) => {
	const about = page.locator("#über-uns");
	await expect(about).toContainText("Grrrl-Punk");
});

test("about section has a booking contact link", async ({ page }) => {
	const about = page.locator("#über-uns");
	await expect(
		about.getByRole("link", { name: /booking/i }).first(),
	).toBeVisible();
});

// ---------------------------------------------------------------------------
// Live / Shows section – upcoming shows
// ---------------------------------------------------------------------------
test("live section heading is visible", async ({ page }) => {
	await expect(
		page.locator("#live").getByRole("heading", { name: "Live" }),
	).toBeVisible();
});

const upcomingShows = [
	"19.06.2025",
	"23.08.2025",
	"30.08.2025",
	"06.09.2025",
	"31.10.2025",
	"29.01.2026",
	"21.02.2026",
	"28.02.2026",
];

for (const date of upcomingShows) {
	test(`upcoming show ${date} is displayed`, async ({ page }) => {
		const liveSection = page.locator("#live");
		await expect(liveSection.getByText(date).first()).toBeVisible();
	});
}

test("upcoming shows are sorted chronologically", async ({ page }) => {
	const liveSection = page.locator("#live");
	const dateTexts = await liveSection
		.locator(".font-display.text-4xl.text-accent")
		.allTextContents();

	const parsedDates = dateTexts.map((d) => {
		const [day, month, year] = d.trim().split(".").map(Number);
		return new Date(year, month - 1, day).getTime();
	});

	for (let i = 1; i < parsedDates.length; i++) {
		expect(parsedDates[i]).toBeGreaterThanOrEqual(parsedDates[i - 1]);
	}
});

test('Markthalle show (29.01.2026) has a "mehr Infos" link', async ({
	page,
}) => {
	const liveSection = page.locator("#live");
	const showRow = liveSection.locator("div").filter({ hasText: "29.01.2026" });
	const moreInfoLink = showRow.getByRole("link", { name: /mehr infos/i });
	await expect(moreInfoLink).toBeVisible();
	await expect(moreInfoLink).toHaveAttribute(
		"href",
		/markthalle-hamburg\.de/,
	);
});

test("only the one show with a link shows a 'mehr Infos' button", async ({
	page,
}) => {
	const liveSection = page.locator("#live");
	// Among the 8 upcoming shows only Markthalle (29.01.2026) has a link
	const moreInfoLinks = liveSection.getByRole("link", {
		name: /mehr infos/i,
	});
	await expect(moreInfoLinks).toHaveCount(1);
});

// ---------------------------------------------------------------------------
// Live / Shows section – past shows
// ---------------------------------------------------------------------------
test('"Past Appearances" heading is visible', async ({ page }) => {
	await expect(
		page.locator("#live").getByText("Past Appearances"),
	).toBeVisible();
});

const samplePastShows = ["06.06.2025", "16.11.2024", "07.09.2024"];

for (const date of samplePastShows) {
	test(`past show ${date} appears in Past Appearances`, async ({ page }) => {
		const liveSection = page.locator("#live");
		await expect(liveSection.getByText(date).first()).toBeVisible();
	});
}

test('"History in the making" footer text is visible', async ({ page }) => {
	await expect(
		page.locator("#live").getByText("History in the making"),
	).toBeVisible();
});

// ---------------------------------------------------------------------------
// Music section
// ---------------------------------------------------------------------------
test("musik section heading is visible", async ({ page }) => {
	await expect(
		page.locator("#musik").getByRole("heading", { name: "Musik" }),
	).toBeVisible();
});

test("album art image is rendered", async ({ page }) => {
	const img = page
		.locator("#musik")
		.getByRole("img", { name: /Album art for Drown in deep, Baby/i });
	await expect(img).toBeVisible();
});

const streamingLinks = ["Spotify", "Apple Music", "Youtube Music", "Bandcamp"];

for (const platform of streamingLinks) {
	test(`${platform} streaming link is present`, async ({ page }) => {
		await expect(
			page.locator("#musik").getByRole("link", { name: platform }),
		).toBeVisible();
	});
}

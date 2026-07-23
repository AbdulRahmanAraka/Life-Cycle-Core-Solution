import { test } from '@playwright/test';
import {
 Eyes,
 Target,
 Configuration,
 MatchLevel
} from '@applitools/eyes-playwright';

test('Homepage Visual Test', async ({ page }) => {

 const eyes = new Eyes();

 const config = new Configuration();

 config.setAppName("Lifecycle Project");

 config.setTestName("Homepage Test");

 // ⭐ BEST MATCH LEVEL
 config.setMatchLevel(MatchLevel.Strict);

 // ⭐ Ignore minor color flicker + font render diff
 config.setIgnoreDisplacements(true);

 // ⭐ wait screenshot stable
 config.setWaitBeforeScreenshots(2000);

 eyes.setConfiguration(config);

 await eyes.open(page);

 await page.goto('http://localhost:3000');

 await page.waitForLoadState('networkidle');

 // React render complete hone do
 await page.waitForTimeout(3000);

 await eyes.check(
   "Homepage",
   Target.window().fully()
 );

 await eyes.close(false);

});

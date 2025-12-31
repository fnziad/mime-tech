/**
 * MTC Website Test Suite
 * Tests all three pages for functionality and visual integrity
 */

const { chromium } = require('playwright');

async function testMTCWebsite() {
  console.log('🧪 Starting MTC Website Test Suite...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const errors = [];
  
  // Collect console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console Error: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    errors.push(`Page Error: ${err.message}`);
  });

  const baseUrl = 'file:///workspace/mtc-project';
  
  // Test Pages
  const pages = [
    { name: 'Resistance Archive', file: 'index.html' },
    { name: 'Virtual Impresario', file: 'impresario.html' },
    { name: 'Living Academy', file: 'academy.html' }
  ];

  for (const pageInfo of pages) {
    console.log(`📄 Testing: ${pageInfo.name}`);
    
    try {
      await page.goto(`${baseUrl}/${pageInfo.file}`, { waitUntil: 'networkidle' });
      console.log(`  ✓ Page loaded successfully`);
      
      // Check for critical elements
      const title = await page.title();
      console.log(`  ✓ Title: ${title}`);
      
      // Check navigation exists
      const nav = await page.$('.nav');
      if (nav) {
        console.log(`  ✓ Navigation found`);
      } else {
        errors.push(`${pageInfo.name}: Navigation missing`);
      }
      
      // Check footer exists
      const footer = await page.$('.footer');
      if (footer) {
        console.log(`  ✓ Footer found`);
      } else {
        errors.push(`${pageInfo.name}: Footer missing`);
      }
      
      // Page-specific checks
      if (pageInfo.file === 'index.html') {
        const cards = await page.$$('.archive-card');
        console.log(`  ✓ Archive cards found: ${cards.length}`);
        
        const searchInput = await page.$('#searchInput');
        if (searchInput) console.log(`  ✓ Search input found`);
        
        const filterBtns = await page.$$('.filter-btn');
        console.log(`  ✓ Filter buttons found: ${filterBtns.length}`);
      }
      
      if (pageInfo.file === 'impresario.html') {
        const profileImage = await page.$('.profile-image');
        if (profileImage) console.log(`  ✓ Profile image found`);
        
        const agencyCard = await page.$('.agency-card');
        if (agencyCard) console.log(`  ✓ Agency card found`);
        
        const buttons = await page.$$('.agency-btn');
        console.log(`  ✓ Agency buttons found: ${buttons.length}`);
      }
      
      if (pageInfo.file === 'academy.html') {
        const accordionItems = await page.$$('.accordion-item');
        console.log(`  ✓ Accordion items found: ${accordionItems.length}`);
        
        const lessonItems = await page.$$('.lesson-item');
        console.log(`  ✓ Lesson items found: ${lessonItems.length}`);
        
        // Test accordion interaction
        const firstHeader = await page.$('.accordion-header');
        if (firstHeader) {
          await firstHeader.click();
          await page.waitForTimeout(500);
          const isActive = await page.$('.accordion-item.active');
          if (isActive) {
            console.log(`  ✓ Accordion interaction works`);
          }
        }
      }
      
      console.log('');
      
    } catch (err) {
      errors.push(`${pageInfo.name}: ${err.message}`);
      console.log(`  ✗ Error: ${err.message}\n`);
    }
  }

  await browser.close();

  // Summary
  console.log('='.repeat(50));
  console.log('📊 Test Results Summary');
  console.log('='.repeat(50));
  
  if (errors.length === 0) {
    console.log('✅ All tests passed! No errors detected.');
    console.log('\n🚀 Website is ready for deployment.');
    return true;
  } else {
    console.log(`❌ ${errors.length} error(s) detected:`);
    errors.forEach(err => console.log(`  • ${err}`));
    return false;
  }
}

// Run tests
testMTCWebsite()
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(err => {
    console.error('Test suite failed:', err);
    process.exit(1);
  });

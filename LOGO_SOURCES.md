# Logo Sources for Skills

This document lists where to find logos for the skills added to the Skills component.

## AI Automation & AI Chatbot
- **OpenAI API**: https://simpleicons.org/icons/openai.svg or https://openai.com/brand
- **LangChain**: https://simpleicons.org/icons/langchain.svg or https://github.com/langchain-ai/langchain
- **AutoGPT**: Check GitHub repository or create custom icon
- **RPA**: Generic automation icon from icon libraries
- **AI Chatbot**: Generic chatbot icon from icon libraries

## Discord Bot
- **discord.js**: https://discord.js.org/ (check their GitHub or website)
- **discord.py**: https://github.com/Rapptz/discord.py (check repository)
- **Discord API**: https://discord.com/branding (official Discord logo)

## Scraping
- **Puppeteer**: https://pptr.dev/ (check their website or GitHub)
- **Playwright**: https://playwright.dev/ (check their website or GitHub)
- **Selenium**: https://simpleicons.org/icons/selenium.svg or https://www.selenium.dev/brand/
- **BeautifulSoup**: https://www.crummy.com/software/BeautifulSoup/ (check website)
- **Scrapy**: https://scrapy.org/ (check their website or GitHub)
- **Cheerio**: https://cheerio.js.org/ (check their website or GitHub)
- **Web Scraping**: Generic scraping/web crawler icon

## General
- **API Integration**: Generic API icon from icon libraries

## Quick Download Options

1. **Simple Icons** (Recommended):
   - Visit https://simpleicons.org/
   - Search for the technology name
   - Download as PNG or SVG
   - Convert SVG to PNG if needed (64x64px recommended)

2. **GitHub Repositories**:
   - Many projects have logos in their repository's `/assets` or `/docs` folders
   - Check the main repository on GitHub

3. **Official Brand Pages**:
   - Most major technologies have brand/logo pages
   - Example: Discord has https://discord.com/branding

## Steps to Add Logos

1. Download logos (64x64px PNG recommended, or SVG)
2. Save them to `public/logos/` folder with descriptive names:
   - `openai-logo.png`
   - `langchain-logo.png`
   - `discordjs-logo.png`
   - `puppeteer-logo.png`
   - etc.
3. Update the `Skills.tsx` file with the image paths:
   ```typescript
   {
     name: 'OpenAI API',
     image: '/logos/openai-logo.png',
   },
   ```

## Alternative: Use Icon CDN

You can also use an icon CDN service like:
- Iconify: https://iconify.design/
- Simple Icons CDN: https://cdn.simpleicons.org/

But for best performance, download and host locally.


# Telephote website

Static marketing and setup site for the portable Windows app. The iPhone artwork
is shared with the iPhone application. `assets/windows-app.png` is a rendered
Windows UI preview, with no captured phone video.

- Hosting: GitHub Pages from `main`, repository root.
- Windows downloads: GitHub Releases in this repository; do not commit ZIPs.
- iPhone download: intentionally unavailable until a public App Store/TestFlight
  URL is supplied. Replace the disabled button in `index.html` with that URL.
- No analytics, visitor accounts, form collection or backend.
- Preview locally with a static HTTP server.
- Pricing: A$5 (AUD) for the iPhone app; the Windows companion is free.

## Search metadata

The page is static HTML, with a descriptive title, description, one H1, canonical
URL, social sharing tags, accessible image text and structured data for the two
applications. Prices match the visible download cards. No ratings or reviews are
invented; structured data does not guarantee a Google rich result.

`sitemap.xml` lists the live landing page. After connecting telephote.co, replace
the GitHub Pages base URL throughout `index.html`, `sitemap.xml` and `robots.txt`
with `https://telephote.co/`, then verify the domain in Google Search Console and
submit the sitemap. At the temporary GitHub project URL, robots.txt is below the
host root and is not the host-wide robots file; normal crawling remains allowed.

## telephote.co / GoDaddy

The GitHub Pages URL works before changing DNS. In GoDaddy DNS, point the apex
`@` to GitHub Pages with four A records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | adminpointsjunkie.github.io |

Configure `telephote.co` as the repository's Pages custom domain before pointing
DNS to it. Preserve unrelated mail/TXT records. After GitHub verifies DNS and
issues its certificate, enable HTTPS enforcement. Update the absolute social
image URL in `index.html` when the domain is active.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

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
- Canonical website: https://telephote.co/

## Search metadata

The page is static HTML, with a descriptive title, description, one H1, canonical
URL, social sharing tags, accessible image text and structured data for the two
applications. Prices match the visible download cards. No ratings or reviews are
invented; structured data does not guarantee a Google rich result.

`sitemap.xml` lists https://telephote.co/. Canonical, social, structured-data and
robots sitemap URLs all use that domain. Google Search Console ownership
verification and sitemap submission are separate follow-up steps.

## telephote.co / GoDaddy

Configured on 26 November 2026 in GoDaddy. The apex points to GitHub Pages with
four A records, and `www` points to the GitHub account's Pages hostname:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | adminpointsjunkie.github.io |

The repository's Pages custom domain and root `CNAME` file use `telephote.co`.
GoDaddy nameservers, the domain-connect record and DMARC were preserved. GitHub
manages the approved HTTPS certificate for `telephote.co` and `www.telephote.co`.
HTTPS enforcement is enabled. HTTP, www and the former GitHub Pages URL return
permanent redirects to https://telephote.co/.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

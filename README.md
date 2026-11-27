# Telephote website

Static marketing and setup site for the portable Windows app and Linux preview. The iPhone artwork
is shared with the iPhone application. `assets/windows-app.png` is a rendered
Windows UI preview, with no captured phone video.

- Hosting: GitHub Pages from `main`, repository root.
- Desktop downloads: GitHub Releases in this repository; do not commit ZIP/tar.gz archives.
- Linux: linux.html and the homepage card link to v0.5.0. Keep the preview status, v4l2loopback/usbmuxd requirements and manual-update limit visible.
- assets/linux-app.png is the 0.5.0 Avalonia headless UI render on Windows, with no phone video.
- iPhone download: intentionally unavailable until a public App Store/TestFlight
  URL is supplied. Replace the disabled button in `index.html` with that URL.
- Download statistics and their retention are documented in privacy.html; this release does not change that collection. No iPhone app analytics.
- Version 0.5.0 is a GitHub prerelease/manual download; stable in-app updates remain on 0.3.1.
- audio.html describes microphone requirements and the unfinished native Windows USB route.
- The optional unsigned MSI is in the release assets for separately permitted PCs; the main download remains portable. No installer was run on the work PC.
- Preview locally with a static HTTP server.
- Pricing: A$5 (AUD) for the iPhone app; the Windows companion is free.
- Canonical website: https://telephote.co/

## Search metadata

The page is static HTML, with a descriptive title, description, one H1, canonical
URL, social sharing tags, accessible image text and structured data for the desktop and iPhone
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

Tux artwork: assets/tux.svg from https://commons.wikimedia.org/wiki/File:Tux.svg. Original drawing by Larry Ewing with The GIMP; vector contributors Simon Budig and Garrett LeSage. The required redistribution notice is preserved in assets/Tux-Copyright.txt and linked from pages displaying it.

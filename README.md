# QB Engineering & Construction — GitHub Pages starter site

A simple five-page static website designed for GitHub Pages.

## Files

```text
index.html                Home page
about.html                About us
services.html             Services
projects.html             Project portfolio
contact.html              Contact details and QR section
assets/css/styles.css     All site styling
assets/js/script.js       Mobile navigation only
assets/images/            Add your logo, project photos and real QR code here
```

## Before publishing

1. Open all five `.html` files in VS Code (or another editor).
2. Search the whole folder for `YOUR-` and replace all placeholder details.
3. Update the company description and services so they reflect what QB actually offers.
4. Add your project photographs to `assets/images/`. Keep each image under roughly 1 MB where possible.
5. Replace the visual placeholders on `projects.html` with actual project image tags, such as:

```html
<img src="assets/images/project-01.jpg" alt="Description of project photo">
```

6. Replace `assets/images/qr-placeholder.svg` with a QR image that you created for your email, WhatsApp, Facebook, Instagram or business contact page.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `qb-engineering-website`.
2. Upload everything inside this folder into the repository root. `index.html` must stay in the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. GitHub will show the website URL after deployment. It is usually:

```text
https://YOUR-GITHUB-USERNAME.github.io/qb-engineering-website/
```

## Custom domain later

When you buy a domain, add it first in **Settings → Pages → Custom domain**, then set the DNS records at your domain registrar. GitHub's documentation recommends adding the custom domain in GitHub before you configure the DNS provider.

## Important note about contact forms

GitHub Pages hosts static files only. The email and social links in this starter site work without a server. A contact form needs a separate form service or backend.

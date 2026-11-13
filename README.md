# Rogers Soft Tech Home

An Angular landing page for projects hosted at Rogers Soft Tech. The home page is
at `/home`; the root URL redirects there in the browser.

## Run locally

Install Node.js 22.22.3 or later in the Node 22 line, 24.15.0 or later in the
Node 24 line, or Node 26 or later. Then run:

```shell
npm ci
npm start
```

Open `http://localhost:4200/home`. Run `npm test` for unit tests and `npm run
build` for a production build.

## PrimeNG license and theme

The site uses PrimeNG's Aura theme with a blue primary palette. PrimeNG requires
an appropriate PrimeUI license and a valid license key. The GitHub Actions
deployment workflow reads the `PRIMENG_LICENSE` Actions secret and passes it to
PrimeNG during the Angular build. Without a valid key, PrimeNG may display a
license notice. Do not commit license keys to the repository. The key is included
in the browser bundle and is therefore visible to site visitors.

## Add a project

Add an entry to the `projects` array in `src/app/home.ts`, including its name,
description, public URL, and display label. Projects can be independent static
sites or applications hosted on any origin; the homepage links to them rather
than deploying or embedding them.

## Deploy to Azure Static Web Apps

1. Create a GitHub repository and push this project to it.
2. In Azure, create a Static Web App connected to that repository, or connect an
   existing Static Web App **only if you intend to replace its current site**.
   Select the Angular build preset, set the app location to `/`, leave the API
   location empty, and set the output location to
   `dist/rogers-soft-tech-home/browser`. Add the Azure deployment token to
   GitHub as `AZURE_STATIC_WEB_APPS_API_TOKEN`. The workflow deploys pushes to
   `main`; update its branch filter if your default branch differs.
3. Confirm the deployment works at the Azure-provided URL, including a direct
   load and refresh of `/home`. The copied `staticwebapp.config.json` rewrites
   `/home` and `/home/` to the Angular shell; it does not add a catch-all rule.
4. Configure `rogers-soft-tech.com` as a custom domain on the Static Web App,
   following Azure's domain validation and DNS instructions. Check any existing
   DNS and hosting first: changing the apex domain can affect an existing site.
   The project's subdomain links are separate from the apex domain and should be
   retained in DNS. Verify `https://rogers-soft-tech.com/home` after DNS and TLS
   provisioning complete.

See [Azure Static Web Apps build configuration](https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration)
and [custom domains](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain).

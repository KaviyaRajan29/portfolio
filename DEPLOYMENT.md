# Deployment

A static SPA (Vite build) deployed to **Cloudflare Workers (Static Assets)** by **GitHub Actions**
(`.github/workflows/deploy.yml`).

## How it works

- Push to `main` → the workflow runs `npm ci` → `npm run build` → `cloudflare/wrangler-action@v3`,
  which deploys `dist/` per `wrangler.jsonc`.
- `wrangler.jsonc` is a **static-assets-only Worker** (`kaviya-portfolio`) serving `./dist` with
  `not_found_handling: single-page-application`, so clean URLs (`/skills`, `/projects/finmate`)
  and refreshes resolve to the SPA.

## One-time setup

### 1 · Create a Cloudflare API token

Cloudflare dashboard → **My Profile → API Tokens → Create Token**.

- Use the **"Edit Cloudflare Workers"** template (simplest), or a **Custom token** with at least:
  - **Account → Workers Scripts → Edit** — required; uploads the Worker **and** its static assets.
  - **Account Resources → Include → _your account_**.
  - _(only for the custom-domain route later)_ **Zone → Workers Routes → Edit**, with Zone
    Resources including `kaviya.me`.
- Click **Create Token** and copy the value. Common mistakes that cause an **auth error**:
  stopping at "Continue to summary" without actually creating the token, copying a trailing
  space/newline, or using a read-only / Pages token.

### 2 · Add the GitHub repo secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | the token from step 1 (no surrounding whitespace) |
| `CLOUDFLARE_ACCOUNT_ID` | your 32-hex account id (Workers & Pages → Overview → right sidebar, or in the dashboard URL) |
| `VITE_CONTACT_ENDPOINT` _(optional)_ | a Formspree-style URL to enable the live contact form |

### 3 · Deploy

Push to `main`, or **Actions tab → the run → Re-run jobs**. On success the Worker is live at
`https://kaviya-portfolio.<your-subdomain>.workers.dev/`.

### 4 · Custom domain (kaviya.me)

`wrangler.jsonc` declares `"routes": [{ "pattern": "kaviya.me", "custom_domain": true }]`, so the
deploy binds the Worker to `kaviya.me` automatically — **once both are true**:

1. **kaviya.me's DNS zone is on Cloudflare.** Dashboard → **Add a site** → `kaviya.me` → review/import
   the scanned DNS records (so email/other records carry over) → at your registrar, replace the
   nameservers with the two Cloudflare gives you → wait for the zone to show **Active**.
2. **The API token includes `Zone → Workers Routes → Edit`** for kaviya.me (the "Edit Cloudflare
   Workers" template covers it; recreate the token + update the secret if it was account-only).

Then re-run the deploy → `https://kaviya.me/` serves the site (Cloudflare auto-creates the proxied
DNS record + HTTPS). To go live **before** the domain is ready, temporarily remove the `routes` line
from `wrangler.jsonc` and register a workers.dev subdomain instead.

## Notes

- **Do not add `wrangler` to `package.json`.** The Action installs its own pinned wrangler
  (`wranglerVersion` in the workflow). A project-level `wrangler` pulls `better-sqlite3`, which
  fails to compile on newer Node versions and desyncs the lockfile — which breaks `npm ci` in CI.
- Manual deploy from your machine: `npm run build` then `npx wrangler@4.100.0 deploy`.
- `VITE_CONTACT_ENDPOINT` is baked in at build time; set it before the build to enable the live
  contact form, otherwise the form uses its simulated-send fallback.

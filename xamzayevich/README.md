# xamzayevich.uz — Senior Developer Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Structure
```
app/         routes, layout, SEO (sitemap, robots, OG image), /api/contact
components/  reusable UI (Navbar, Reveal, TiltCard, Magnetic, Background…)
sections/    page sections (Hero, Stats, About, Skills, Services, Projects…)
data/        ALL editable content: site.ts, projects.ts, experience.ts, skills.ts
lib/         validation (zod), rate limiter
public/      static assets (portrait, project images, og assets)
styles/      global CSS
deploy/      nginx config
```

## Edit your content (no code changes needed elsewhere)
- `data/site.ts` — socials, stats, badge, portrait path, SEO text
- `data/projects.ts` — projects (add `image`, `demo`, `github`; empty links show disabled buttons)
- `data/experience.ts` — timeline. Only add real company names.
- Stats (`20+`, etc.) and projects are **placeholders** — replace or remove them.

## Run locally
```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev                  # http://localhost:3000
```

## Production build
```bash
npm install
npm run build
npm start                    # port 3000
```

## Environment variables (`.env.example`)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (https://xamzayevich.uz) |
| `GITHUB_USERNAME` | Enables the "Building in Public" contribution graph |
| `SMTP_*`, `CONTACT_TO`, `CONTACT_FROM` | Contact form email delivery |
| `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional Cloudflare Turnstile CAPTCHA |

Secrets are read only on the server. Never commit `.env`.

## Deploy on a VPS (Ubuntu 22.04/24.04)
```bash
# 1. Node 20+, PM2, Nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs nginx git
sudo npm i -g pm2

# 2. Upload the project to /var/www/xamzayevich.uz (git clone or scp)
cd /var/www/xamzayevich.uz
cp .env.example .env && nano .env
npm ci && npm run build

# 3. Start with PM2 (auto-start on reboot)
pm2 start ecosystem.config.cjs
pm2 save && pm2 startup

# 4. Nginx
sudo cp deploy/nginx.conf /etc/nginx/sites-available/xamzayevich.uz
sudo ln -s /etc/nginx/sites-available/xamzayevich.uz /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 5. HTTPS (Let's Encrypt)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d xamzayevich.uz -d www.xamzayevich.uz
```

### Domain (DNS)
At your `.uz` registrar add:
- `A` record: `@` → your server IPv4
- `A` (or `CNAME`) record: `www` → `@` / server IP
DNS can take from minutes to a few hours.

### Firewall
```bash
sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw enable
```

### Update later
```bash
git pull && npm ci && npm run build && pm2 reload xamzayevich-uz
```

## Security notes
CSP and security headers (`next.config.mjs`), zod validation on client and server, honeypot, same-origin check,
rate limit (5 messages / 10 min / IP, in-memory — use Redis if you run multiple instances), HTML-escaped emails, no secrets in code.

## Other hosts
Vercel works out of the box: import the repo, set the env variables, add `xamzayevich.uz` under Domains.

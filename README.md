# Amazing Angels Tech Solutions — Website

A premium blue-and-white corporate website built with Next.js, React and TypeScript.

**Production domain:** https://amazingangelstech.com

## Included
- Responsive homepage and navigation
- Services: Web Development, App Development, Software Solutions, Digital Marketing
- About, working process, project CTA and contact enquiry layout
- SEO metadata and Open Graph defaults
- Git-ready project structure

## Run locally
1. Install Node.js (LTS): https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

To test a production build:

```bash
npm run build
npm run start
```

## Before publishing — important checklist
This is a first website draft. Replace/confirm the following before making it public:
- Add the real business email and phone/WhatsApp number.
- Connect the enquiry form to a real endpoint (FormSubmit, Formspree, Web3Forms or a custom API). The current form is a designed front-end and does not send messages yet.
- Add only genuine portfolio projects, testimonials, registrations and business claims. Do not publish sample/fake client work as real work.
- Add privacy policy and terms if collecting personal information or running campaigns.
- Review all service descriptions and company details.

## Publish to GitHub
Create a new empty repository on GitHub, for example `amazing-angels-tech-solutions`.

Then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Initial Amazing Angels Tech Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/amazing-angels-tech-solutions.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username. Never share your GitHub password or personal access token in chat.

## Deploy with Vercel
1. Sign in at https://vercel.com/ using GitHub.
2. Select **Add New → Project**.
3. Import `amazing-angels-tech-solutions`.
4. Keep the detected Next.js settings and click **Deploy**.
5. Once deployed, open the project in Vercel → **Settings → Domains**.
6. Add `amazingangelstech.com` and also `www.amazingangelstech.com` if desired.
7. Vercel will show the exact DNS records required for your project.

## Connect GoDaddy domain
1. Sign in to GoDaddy → **My Products → Domains → amazingangelstech.com → DNS**.
2. Add/update only the DNS records Vercel displays in your Vercel Domains screen.
3. Do not delete MX records if you use email on this domain.
4. Wait for DNS propagation. Vercel will verify the domain and issue SSL automatically.

DNS values can change, so use the exact values Vercel shows rather than copying old instructions from a tutorial.

## Contact form integration
The contact form currently displays the intended fields but is not wired to a message service. Recommended simple route:
- Create a form at https://formspree.io/ or https://web3forms.com/
- Copy the endpoint/API key they provide.
- Wire the form action or a server route using the provider's current instructions.
- Test with a real submission before launch.

## Project structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
.env.example
.gitignore
next.config.ts
package.json
tsconfig.json
README.md
```

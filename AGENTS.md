# Repository instructions

This is Mark Jacob Nyumba's statically exported portfolio.

## Development

- Use pnpm. The expected version is declared in `package.json`.
- Use the Node.js version pinned in `.nvmrc`.
- Before changing Next.js behavior, read the relevant version-matched guide in `node_modules/next/dist/docs/`.
- Keep `output: "export"` and `trailingSlash: true`; the site must build without a server runtime, database, authentication or secrets.
- Store portfolio content in `data/` and presentation code in `app/` or `components/`.

## Verification

Run before handoff:

```bash
pnpm lint
pnpm typecheck
pnpm build
git diff --check
```

Also audit generated project routes, internal links and public content for privacy issues.

## Content rules

- Use conservative, evidence-backed wording. Do not invent metrics, users, clients, employment relationships, dates or production claims.
- Preserve ownership distinctions between solo work, founder/builder work and collaborative contributions.
- Publish project URLs only after they are confirmed public.
- Never publish a phone number, home address, credential, token or private project information.
- DigiCow and Tana River Flood Mapping are prohibited from public site content, metadata, examples and generated routes.

## Career content and resumes

- Follow `CAREER-CONTENT.md` when preparing portfolio copy, GitHub profile content or a resume for a job application.
- Include role-relevant engineering capabilities alongside tools, supported by the project evidence in `data/projects.ts`.
- Preserve distinctions between founder/builder work, solo experiments and collaborative contributions when tailoring resumes.

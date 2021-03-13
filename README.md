# Notion Frontend Take Home
By Jack Forbes
[Visit the deployed build here](https://notion-jackforbes.vercel.app)


### Built with the latest.

- NextJS 10
- React 17
- TypeScript
- Scss
- Hot reload (powered by Next.js)
- SEO best practices (title tag, meta tags, canonical URLs)


# Get started

1. Fork this repo
2. ```
   git clone git@github.com:yourusername/notion.git
   cd notion
   yarn
   ```
3. Start the development server with `yarn dev`. This should start a server on `http://localhost:3000`.

## Powered by Next.js

The core of this repo is [Next.js](https://https://nextjs.org). I chose Next.js because it's the simplest, most elegant way to generate a static version of a React-based website. The documentation is excellent; read it first: [Next.js Documentation](https://nextjs.org/docs).

## Project structure

Here's is an abbreviated version of the project structure. Certain config files (`next.config.js`, `next-end.d.ts`, `.gitignore`) have been removed for simplicity.

```
.
├── README.md
├── public // all static assets (images, scss, etc) go here
├── pages // every .tsx component in this dir becomes a page of the final site
|   ├── index.tsx // the home page (which has access to the list of all institutions)
|   ├── download.tsx // the download page
|   ├── pricing.tsx // the pricing page
├── components
|   ├── InstitutionCard.tsx
|   ├── Footer.tsx
|   ├── Header.tsx
|   ├── Meta.tsx
|   ├── <various>
├── loader.ts // contains utility functions for loading/parsing CSV
├── node_modules
├── tsconfig.json
├── package.json
```

Next.js generates a new webpage for each file in the `pages` directory.

By default the repo only contains three pages: a home page (`/pages/index.tsx`), a download page (`/pages/download.tsx`), and a pricing page (`/pages/pricing.tsx`).


## The home page

The home page is the main Notion frontend take home project, containing the institutions grabbed from the CSV file.


## Styling

Object-oriented SCSS is used to style the application, for reusable classes and faster future development.

Base styles are included by default, including core components found in `/styles/components`). These are then pulled in using `main.scss` but could be used on a per component basis.


## Institution Data

The instituion CSV is grabbed and mapped to an object using [react-papaparse](https://react-papaparse.js.org). Papaparse is the gold-standard for CSVs. The `loadCSV` utility loads the CSV file, parses it with `readRemoteFile`, and returns a structured `InstitutionData` object (using the header CSV row as object keys):

```ts
type InstitutionData = {
  UNITID: string;
  INSTNM: string;
  CITY: string;
  STABBR: string;
  INSTURL: string;
};
```

View `/loader.ts` to see how this works.


## Static generation

You can generate a fully static version of the site using `yarn build && yarn export`. This step is entirely powered by Next.js. The static site is exported to the `out` directory.


## SEO

Every page includes the `Meta.tsx` tags by default for optimal SEO. This includes a `title` tag, `meta` tags, `og:` tags, Twitter metadata, and a `link` tag containing the canonical URL.


# CLI

### `yarn dev`

Starts the development server. Equivalent to `next dev`.

### `yarn build`

Creates an optimized build of your site. Equivalent to `next build`.

### `yarn export`

Exports the site to static files. All files are written to `/out` and updated [on Vercel](https://notion-jackforbes.vercel.app).

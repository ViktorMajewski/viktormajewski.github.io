# Viktor Majewski — Academic Website

Source code for the academic website of Viktor Majewski. The project uses
React, TypeScript, and Vite and is configured for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local address at which the website is available.

## Publish with GitHub Pages

1. Create an empty GitHub repository.
2. Upload the contents of this folder and push them to the `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **GitHub Actions**.

The included workflow builds and publishes the website after every push to
`main`.

## Update content

- Main content: `src/App.tsx`
- Design and responsive layout: `src/style.css`
- Portrait and CV: `public/`
- Browser icon: `public/favicon.svg`

The favicon is the $D_4$ Dynkin diagram associated with $\operatorname{Spin}(8)$.

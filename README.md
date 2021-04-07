# SIMPLE IMAGE GALLERY 🌉 🏙 🌅 🏞 🌁

This is a Typescript [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

---

Install the npm packages:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Alternatively, run the optimized production build:

```bash
yarn build

yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Details

## Storybook

Use Storybook to build React components in isolation.

Run Storybook dev server:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see Storybook UI or visit [http://localhost:6006](http://localhost:6006) for the online version.

## Eslint & Prettier

---

All the code is linted and prettiefied before each commit. (Thanks to [husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged))

To check lint:

```bash
yarn lint
```

To fix errors:

```bash
yarn lint:fix
```

To prettify the code:

```bash
yarn prettier
```

the rules that will be applied:

```JSON
{
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "endOfLine": "lf",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 80,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "useTabs": false,
    "vueIndentScriptAndStyle": false,
    "embeddedLanguageFormatting": "auto"
}
```

## Commit Lint

---

Use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) rules for commit messages.

There is an automatic check-in the [husky](https://github.com/typicode/husky) commit-msg hook.

## Snapshot Testing

---

Use Jest + Storyshots to create snapshots of the components using the Storybook stories directly. Is not need to create the `.test.tsx` file for each component (👍).

Run snapshot tests:

```bash
yarn test
```

Run interactive snapshot tests:

```bash
yarn test --watchAll
```

Update snapshots files:

```bash
yarn update-snapshots
```

## Folder structure

---

```js
- assets            // SVG
- components:
    - ingredients   // UI basic components
    - recipes       // More complex components based on ingredients.
    - templates     // Page templates
- context           // App state.
- hooks             // Custom React Hooks
- pages             // Next.JS default folder for the page components.
- public            // Next.JS default folder for public files like favico, manifest.json...
- stories           // Storybook stories
- styles            // Theme (global style, breakpoints, colors, typography)
- types             // Typescript global types
```

## Styled Components

---

Use for styling React component. Keep writing CSS with the power of JS.

Pro:

-   classes are unique.

    _In development, the class names are more readable for a better debug._

-   critical CSS. Styled-Components appends only the needed style.

-   easy dynamic styling based on props or theme.

-   SSR support with custom `_document` page.

## CSS Grid

---

To make the image gallery responsive.

Depending on the screen resolution:

```js
1 column grid (screen-width <= 600)

2 columns grid (600 < screen-width <= 960)

4 columns grid (screen-width > 960)
```

## Context

---

To avoid prop drilling, the App has a state and is passed in the React Context. The state is very simple, so Redux is a bit too much.

```js
const initialState = {
    pictures: [], // Array of picture to show
    selectedPicture: '', // Selected picture to open in the Modal
    currentPage: 1, // Current gallery page
};
```

## Hooks 🪝

---

-   ## useReducer

    To update the app state. The dispatch function is passed in the context, so it is possible to dispatch an action everywhere in the components tree.

-   ## useContext

    To retrieve the App Context value.

-   ## usePictures

    Custom hook to retrieve the gallery images from [Lorem Picsum](https://picsum.photos) with pagination support.

    It uses [swr](https://github.com/vercel/swr) to cache and optimizes the fetch of data.

## Release

---

To release a new version:

```bash
yarn release
```

# Links

-   See a [LIVE DEMO](https://lm-image-gallery.herokuapp.com).
-   See [CHANGELOG.md](CHANGELOG.md) for major/breaking updates.
-   Visit [Storybook page](URL) to list the components used in this project.

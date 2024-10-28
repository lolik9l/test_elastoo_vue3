# Elastoo-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### It is important to create the .env by copying the contents from the .env.example file

## Project Structure

### API (`src/api`)

- **`api-post.ts`, `api-posts.ts`, `index.ts`**: Methods for interacting with the server, such as fetching, creating, updating, and deleting posts.

### Assets (`src/assets`)

- **`scss`**
  - **`base`, `components`, `views`**: SCSS files for global styles, component styles, and view-specific styles respectively.

### Components (`src/components`)

- **`PostCreate.vue`, `PostDelete.vue`, `PostEdit.vue`, `PostHome.vue`, `PostsHome.vue`**: Vue components for creating, deleting, editing, and displaying posts.

### Helpers (`src/helpers`)

- **`get-random-number.ts`**: Utility function that generates a random number.

### Interfaces (`src/interfaces`)

- **`post.ts`**: Interfaces and type definitions that describe the structure of a post.

### Router (`src/router`)

- **`index.ts`**: Routing configuration for navigating between pages in the application.

### Stores (`src/stores`)

- **`posts-store.ts`**: State management for posts using Vuex (or Pinia).

### Views (`src/views`)

- **`views`**: Representations for different pages of the application, making use of components.

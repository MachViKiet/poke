# Pokédex React Project

## Project Overview

This is a collaborative React project to build a Pokédex app. The app displays a list of Pokémon, allows filtering by region, type, and sorting, and includes a search bar. Users can view details for each Pokémon in a modal.

## Technologies Used

- React 19
- Vite
- Material UI (`@mui/material`)
- Axios (API requests)
- CSS Modules
- PokéAPI (https://pokeapi.co/)

## Folder Structure

```
src/
  components/
    Header/
    Footer/
    Filters/
      Region.jsx
      Type.jsx
      SortBy.jsx
      SearchBar.jsx
    PokemonContainer/
      Grid.jsx
      Card.jsx
      PokemonModal/
      Loading.jsx
  hooks/
    useFilters.js
    useRegions.js
    useTypes.js
    usePokemons.js
    useFilteredPokemons.js
  pages/
    Home.jsx
  utils/
    pokemonUtils.js
  App.jsx
```

## How to Collaborate

1. **Branching:**

   - Always create a new branch for your feature or fix.
   - Use `git pull origin main` before starting work and before pushing.
   - Push your changes to the remote branch and open a Pull Request for review.

2. **Component Development:**

   - Each developer should focus on a different component (e.g., Header, Filters, Grid, Footer).
   - Avoid working on the same file at the same time to prevent merge conflicts.
   - Communicate with your teammate if you need to change a shared component.

3. **Project Structure:**

   - The main page is `Home.jsx`, which imports and renders all main components.
   - `App.jsx` only renders the `Home` component.
   - Filters and SearchBar are grouped inside the `Filters` component.
   - The Pokémon list is managed by `Grid.jsx`, which renders multiple `Card.jsx` components.
   - Each card has a button to show details using the modal component.

4. **Styling:**

   - Use CSS Modules for component styles (e.g., `Header.module.css`).
   - Keep styles for related components in the same folder.

5. **Mobile-First Approach:**

   - Write CSS for mobile screens first.
   - Use media queries to adapt for larger screens.

6. **Version Control Best Practices:**
   - Commit frequently with clear messages.
   - Pull before pushing to avoid conflicts.
   - Resolve merge conflicts promptly.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser at `http://localhost:3000` (or the port shown in the terminal).

## API Usage

- Data is fetched from [PokéAPI](https://pokeapi.co/api/v2/pokemon).
- Axios is used for API requests inside React hooks.

## Contribution Guidelines

- Communicate with your teammate about what you are working on.
- Review each other's code before merging.
- Update the README if you add new features or change the structure.

## Troubleshooting

- If you get a `non-fast-forward` error when pushing, run:
  ```bash
  git pull origin main
  # Resolve any conflicts, then
  git push origin main
  ```
- If you see swap files or merge messages, make sure to finish or abort any pending merges.

## License

MIT

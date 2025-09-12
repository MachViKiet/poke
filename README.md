# Pokedex React Project

## Project Overview

This is a collaborative React project to build a Pokédex app. The app displays a list of Pokémon, allows filtering and searching, and shows detailed information for each Pokémon.

## Folder Structure

```
src/
  components/
	 Header/
	 Filters/
	 PokemonContainer/
		PokemonGrid.jsx
		PokemonCard.jsx
		PokemonStats.jsx
	 Footer/
  pages/
	 Home.jsx
  App.jsx
```

## How to Collaborate

1. **Branching:**

   - Always create a new branch for your feature or fix.
   - Use `git pull origin develop` before starting work and before pushing.
   - Push your changes to the remote branch and open a Pull Request for review.

2. **Component Development:**

   - Each developer should focus on a different component (e.g., Header, Filters, PokemonGrid, Footer).
   - Avoid working on the same file at the same time to prevent merge conflicts.
   - Communicate with your teammate if you need to change a shared component.

3. **Project Structure:**

   - The main page is `Home.jsx`, which imports and renders all main components.
   - `App.jsx` only renders the `Home` component.
   - Filters and SearchBar are grouped inside the `Filters` component.
   - The Pokémon list is managed by `PokemonGrid`, which renders multiple `PokemonCard` components.
   - Each card has a button to show details using the `PokemonStats` component.

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

## Contribution Guidelines

- Communicate with your teammate about what you are working on.
- Review each other's code before merging.
- Update the README if you add new features or change the structure.

## Troubleshooting

- If you get a `non-fast-forward` error when pushing, run:
  ```bash
  git pull origin develop
  # Resolve any conflicts, then
  git push origin develop
  ```
- If you see swap files or merge messages, make sure to finish or abort any pending merges.

## License

MIT

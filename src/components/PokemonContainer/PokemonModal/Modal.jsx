import PokemonStats from "./PokemonStats";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PokemonEvolution from "./Evolution";
import PokemonAbilities from "./Abilities";
import PokemonAbout from "./About";
import PokemonInfo from "./Info";
import styles from "./Modal.module.css";
import { getCardGradient } from "../../../utils/typeColorUtils";

const PokemonModal = ({
  open,
  setOpen,
  pokemon,
  pokemonSpecie,
  pokemons,
  pokemonEvolution,
}) => {
  const primaryType = pokemon.types?.[0]?.type?.name ?? "normal";
  const secondaryType = pokemon.types?.[1]?.type?.name ?? primaryType;

  return (
    <Dialog
      className={styles.dialog}
      open={open}
      onClose={() => setOpen(false)}
      maxWidth={false}
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          maxWidth: "1200px",
        },
      }}
    >
      <DialogContent
        className={styles.dialogContent}
        style={getCardGradient(primaryType, secondaryType)}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 3 }}
          alignItems="flex-start"
        >
          <Box
            className="details-left-column"
            sx={{ width: { xs: "100%", md: "300px" }, textAlign: "center" }}
          >
            <PokemonInfo pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
          </Box>
          <Box
            className="details-right-column"
            sx={{ flexGrow: 1, width: "100%" }}
          >
            <PokemonAbout pokemonSpecie={pokemonSpecie} />
            <PokemonAbilities pokemon={pokemon} />
            <PokemonStats pokemon={pokemon} />
            <PokemonEvolution
              pokemons={pokemons}
              pokemonEvolution={pokemonEvolution}
            />
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonModal;

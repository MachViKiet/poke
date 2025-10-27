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
  // pokemon,
  // pokemonSpecie = null,
  pokemon_data,
  loading = false,
  // pokemons,
  // pokemonEvolution,
}) => {
  let primaryType = "normal"; 
  let secondaryType = "normal";
  if(loading){
    return (
      <Dialog
        className={styles.dialog} 
      >
        <DialogContent>
          Loading
        </DialogContent>
      </Dialog>         
    )
  }

  if (pokemon_data != null){
    primaryType =  pokemon_data?.details.types?.[0]?.type?.name ?? "normal";
    secondaryType = pokemon_data?.details.types?.[1]?.type?.name ?? primaryType;
  }

  console.log('Modal pokemon:', pokemon_data);

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
          borderRadius: "10px",
        },
      }}
    >
      <DialogContent
        className={styles.dialogContent}
        style={getCardGradient(primaryType, secondaryType)}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, md: 3 }}
          alignItems="stretch"
        >
          { pokemon_data == null ?  "Loading": <> 
          <Box
            className="details-left-column"
            sx={{
              width: { xs: "100%", lg: "300px" },
              textAlign: "center",
            }}
          >
            <PokemonInfo pokemon={pokemon_data.details} pokemonSpecie={pokemon_data.specie} />
          </Box>
          <Box
            className="details-right-column"
            sx={{ flexGrow: 1, width: { xs: "100%", lg: "300px" } }}
          >
            <PokemonAbout pokemonSpecie={pokemon_data.specie} />
            <PokemonAbilities pokemon={pokemon_data.details} />
            <PokemonStats pokemon={pokemon_data.details} />
            {/* <PokemonEvolution
              pokemons={pokemons}
              pokemonEvolution={pokemonEvolution}
            /> */}
          </Box> 
          </>}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonModal;

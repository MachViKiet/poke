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
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { addPokemonFavorite } from "../../../redux/pokemonFavorites/actions";
import { useEffect } from "react";

const PokemonModal = ({
  open,
  // setOpen,
  onClose,
  // pokemon,
  // pokemonSpecie = null,
  pokemon_data,
  loading = false,
  // pokemons,
  // pokemonEvolution,
}) => {
  let primaryType = "normal"; 
  let secondaryType = "normal";

   const {data: pokemon_favorite_data } = useSelector((state) => state.pokemonFavoritesReducer);

   useEffect(() => {
    console.log(pokemon_favorite_data)
   }, [pokemon_favorite_data])
  const dispatch = useDispatch();

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

  const checkPokemonExists = (list, name) => {
    const lowerCaseName = name.toLowerCase();

    return list.some(item => {
        // Kiểm tra thuộc tính 'pokemon_name' bên trong 'payload'
        const pokemonNameInPayload = item && item.pokemon_name;

        if (pokemonNameInPayload) {
            // Chuyển sang chữ thường để so sánh không phân biệt hoa/thường
            return pokemonNameInPayload.toLowerCase() === lowerCaseName;
        }
        return false;
    });
};

  return (
    <Dialog
      className={styles.dialog}
      open={open}
      onClose={onClose}
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

            <Box sx = {{ width: '100%', display: 'flex', paddingTop: '20px', justifyContent: 'center' }}>
              <IconButton aria-label="delete" size="small"
                onClick={() => { 
                  console.log('click')
                  dispatch(addPokemonFavorite(pokemon_data)) 
                }}
              >
                { pokemon_favorite_data && checkPokemonExists(pokemon_favorite_data, pokemon_data.pokemon_name)
                    ?  <FavoriteIcon sx={{ color: 'red' }} fontSize="inherit" /> :
                    <FavoriteBorderIcon fontSize="inherit" />
                }
              </IconButton>
            </Box>
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

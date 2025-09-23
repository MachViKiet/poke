import PokemonStats from "./PokemonStats";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PokemonEvolution from "./Evolution";
import PokemonAbilities from "./Abilities";
import PokemonAbout from "./About";
import PokemonInfo from "./Info";
import styles from "./Modal.module.css"
import { getCardGradient } from "../../../utils/typeColorUtils";

const PokemonModal = ({ open, setOpen, pokemon, pokemonSpecie, pokemons, pokemonEvolution }) => {

    const primaryType = pokemon.types?.[0]?.type?.name ?? 'normal';
    const secondaryType = pokemon.types?.[1]?.type?.name ?? primaryType;

    return (
        <Dialog className={styles.dialog} open={open} onClose={() => setOpen(false)}>
            <DialogContent className={styles.dialogContent} style={getCardGradient(primaryType, secondaryType)}>
                <PokemonInfo pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
                <PokemonAbout pokemonSpecie={pokemonSpecie} />
                <PokemonAbilities pokemon={pokemon} />
                <PokemonStats pokemon={pokemon} />
                <PokemonEvolution
                    pokemons={pokemons}
                    pokemonEvolution={pokemonEvolution}
                />
            </DialogContent>
        </Dialog>
    );
}

export default PokemonModal;
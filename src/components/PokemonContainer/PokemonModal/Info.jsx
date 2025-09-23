import { getTypeSolidColor } from "../../../utils/typeColorUtils";
import styles from "./Modal.module.css"

const PokemonInfo = ({ pokemonSpecie, pokemon }) => {

   const primaryType = pokemon.types?.[0]?.type?.name ?? 'normal';

    return (
        <div className={styles.infoContainer}>
            <div className={styles.pokemonId}>#{pokemon.id.toString().padStart(3, "0")}</div>
            <div className={styles.pokemonName}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
            <div className={styles.pokemonGenera} style={{ backgroundColor: getTypeSolidColor(primaryType)}}>{pokemonSpecie.genera.find(g => g.language.name === "en")?.genus}</div>
            <div>
                <img className={styles.pokemonImage} src={pokemon.sprites.other["dream_world"].front_default} alt={pokemon.name}></img>
            </div>
            <div className={styles.dataTypeContainer}>
                {pokemon.types.map((typeObj) => (
                    <div
                        key={typeObj.type.name}
                        title={typeObj.type.name}
                    >
                        <div className={`${styles.typeBg} ${styles[typeObj.type.name] ?? ""}`}>
                            <img src={`/${typeObj.type.name}.png`} alt={typeObj.type.name} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.dimensionsContainer}>
                <p><span className={styles.height}>Height</span> {pokemon.height} m</p>
                <p><span className={styles.weight}>Weight</span> {pokemon.weight} kg</p>
            </div>
        </div>
    )
}

export default PokemonInfo;
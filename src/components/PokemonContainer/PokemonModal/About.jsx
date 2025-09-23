import styles from "./Modal.module.css"

const PokemonAbout = ({ pokemonSpecie }) => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutTitle}>About</div>
            <div className={styles.aboutDesc}>
                {pokemonSpecie.flavor_text_entries.find(f => f.language.name === "en")?.flavor_text}
            </div>
        </div>
    )
}

export default PokemonAbout;
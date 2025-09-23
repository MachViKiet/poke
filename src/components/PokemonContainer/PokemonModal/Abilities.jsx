import styles from "./Modal.module.css"

const PokemonAbilities = ({ pokemon }) => {

    return (
        <div className={styles.abilitiesContainer}>
            <div className={styles.abilitiesTitle}>Abilities</div>
            <div className={styles.abilitiesDesc}>
                {pokemon.abilities.map((abilitiesObj) => (
                    <div className={styles.ability} key={abilitiesObj.ability.name}>
                        <span> • </span>{abilitiesObj.ability.name}
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default PokemonAbilities;
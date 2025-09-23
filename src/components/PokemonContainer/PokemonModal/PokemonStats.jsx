import styles from "./Modal.module.css"

const PokemonStats = ({ pokemon }) => {

    return (
        <div className={styles.statsContainer}>
            <div className={styles.statsTitle}>Base Stats</div>
            <div className={styles.statsDesc}>
                {pokemon.stats.map((statObj) => (
                    <div className={styles.statsColumns} key={statObj.stat.name}>
                        <div className={styles.stat} title={statObj.stat.name} >
                            {statObj.stat.name}
                        </div>
                        <div className={styles.value} title={statObj.base_stat}>
                            {statObj.base_stat}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PokemonStats;
import styles from "./Loading.module.css"

const PokemonLoading = () => {
  return (
    <div
      className={styles.loading}
    >
      <div className={styles.text}>Loading . . .</div>
    </div>
  );
};
export default PokemonLoading;
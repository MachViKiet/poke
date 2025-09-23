import styles from "./Loading.module.css"

const PokemonLoading = () => {
  return (
    <div
      className={styles.loading}
    >
      <div className={styles.text}>Loading . . .</div>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjI1NHNkeG9zdTRncWd1ZWxlZHd6cDgzMm5tNm85dTJxODA1emRmeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IQebREsGFRXmo/giphy.gif"
        width={250}
        height={250}
        alt="Loading"
      />
    </div>
  );
};
export default PokemonLoading;
import styles from "./Card.module.css";
import { getCardGradient } from "../../utils/typeColorUtils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PokemonCard = ({ pokemon, onClick }) => {
  const primaryType = pokemon.types?.[0]?.type?.name ?? "normal";
  const secondaryType = pokemon.types?.[1]?.type?.name ?? primaryType;

  return (
    <div
      className={styles.pokemonCard}
      data-type={primaryType}
      style={getCardGradient(primaryType, secondaryType)}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardNumber}>
          <p>#{pokemon.id.toString().padStart(3, "0")}</p>
        </div>
        <div className={styles.pokemonIcon}>
          <svg
            onClick={onClick}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                opacity="0.5"
                cx="12"
                cy="12"
                r="10"
                stroke="#ffffff"
                stroke-width="1.5"
              ></circle>{" "}
              <path
                d="M12 17V11"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <circle
                cx="1"
                cy="1"
                r="1"
                transform="matrix(1 0 0 -1 11 9)"
                fill="#ffffff"
              ></circle>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <LazyLoadImage
          className={styles.pokemonImage}
          src={pokemon.sprites.other["dream_world"].front_default}
          alt={pokemon.name}
          effect="blur"
          height={150}
          width={150}
        />
      </div>
      <div className={styles.typesContainer}>
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <div className={styles.cardTypes}>
          {pokemon.types.map(({ type }) => {
            const t = type.name;
            return (
              <div
                key={t}
                className={`${styles.typeBadge} ${styles[t] ?? ""}`}
                title={t}
                data-type={t}
              >
                <img className={styles.typeImage} src={`/${t}.png`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

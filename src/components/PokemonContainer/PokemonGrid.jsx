import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
    return (
        <ul className="pokemon-grid">
            <li>
                <PokemonCard />
            </li>
        </ul>
    );
}


export default PokemonGrid;
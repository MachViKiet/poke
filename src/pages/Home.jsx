import Filters from "../components/Filters/Filters";
import Header from "../components/Header/Header";
import PokemonGrid from "../components/PokemonContainer/Grid";
import Footer from "../components/Footer/Footer"
import styles from "./Home.module.css"
import useRegions from '../hooks/useRegions'
import useTypes from "../hooks/useTypes"
import useFilters from "../hooks/useFilters"

const Home = () => {

  const { filters, setFilters } = useFilters();
  const { regions } = useRegions();
  const { types } = useTypes();


  return (
    <div className={styles.appContainer}>
      <Header />
      <Filters filters={filters} setFilters={setFilters} regions={regions} types={types} />
      <PokemonGrid filters={filters} />
      <Footer />
    </div>
  );
};

export default Home;
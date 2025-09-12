import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Filters />
      <PokemonGrid />
      <Footer />
    </div>
  );
};

export default Home;
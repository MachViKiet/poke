// import PokemonCard from "./Card";
// import { useState, lazy, Suspense, useEffect } from "react";
// // import { usePokemons } from "../../hooks/usePokemons";
// // import { regionRanges } from "../../utils/pokemonUtils";
// import PokemonLoading from "./Loading";
// // import useFilteredPokemons from "../../hooks/useFilteredPokemons";
// import { useDispatch, useSelector } from 'react-redux'
// import { load_pokemon_details, load_pokemon_list, load_pokemon_species } from "../../stores/actions/actions";


// const PokemonModal = lazy(() => import("./PokemonModal/Modal"));

// const PokemonGrid = () => {
//   // const regionKey = filters.region?.toLowerCase();
//   // const [start, end] = regionRanges[regionKey] || [1, 151];

//   // const { pokemons, loading } = usePokemons(start, end);

//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [open, setOpen] = useState(false);

//   // const sortedPokemons = useFilteredPokemons(pokemons, filters);

//   const pokemon_selectors = useSelector((state) => state.reducers.pokemons);
//   const pokemon_detail_selectors = useSelector((state) => state.reducers.details);
//   const pokemon_species_selectors = useSelector((state) => state.reducers.species);
//   const pokemon_targeted = useSelector((state) => state.reducers.targeted);


//   // --------------------------------
//   // Redux dispatch
//   // --------------------------------
//   // const pokemon_selectors = useSelector((state) => state.reducers.pokemons);
  
  

//   const dispatch = useDispatch()

//   const limit = 5;
//   const [state, setState] = useState({
//     loading: true,
//     modalLoading: false,
//     err: null,
//     page: null
//   });

//   useEffect(() => {
//     pokemon_selectors || load_pokemon_list(limit).then((res) => {
//       res.payload.list.forEach(async (pokemon) => {
//         await load_pokemon_details(pokemon.name).then((res) => {
//           dispatch(res)
//         })
      
//       })
//       setState(prev => { return { ...prev, loading: false } })
//       dispatch(res)
//     })
//   }, [dispatch, pokemon_selectors]);

//   useEffect(() => {  
//     if (pokemon_targeted) {
//       console.log('Targeted pokemon changed:', pokemon_targeted);
//       openDetail(pokemon_targeted);
//     }
//    }, [pokemon_targeted]);


//   const openDetail = async (pokemon_name) => {
//                   if (pokemon_species_selectors && pokemon_species_selectors[pokemon_name] &&
//                     pokemon_species_selectors[pokemon_name]?.base_happiness
//                   ) {
//                     console.log('Details already loaded for:', pokemon_name);
//                   }
//                   else {
//                     await load_pokemon_species(pokemon_name).then((res) => {
//                       dispatch(res)
//                     }).then(() => {
//                       console.log('Loaded species for:', pokemon_name);
//                     });
//                   }
                  
//                   setSelectedPokemon(pokemon_name);
//                   setOpen(true);
//                 }

//   useEffect(() => {
//     console.log('pokemons updated:', pokemon_selectors);
//   }, [pokemon_selectors]);

//   if (state.loading) return <PokemonLoading />;

//   return (
//     <>
//       {pokemon_selectors.list.length > 0 ? (
//         <ul className={styles.pokemonGrid}>
//           {pokemon_selectors.list.map((pokemon, index) => (
//             <li key={index} style={{ animationDelay: `${index * 350}ms` }}
//                 onClick={() =>openDetail(pokemon.name)}>

//               {pokemon_detail_selectors && pokemon_detail_selectors[pokemon.name] && <PokemonCard
//                 pokemon={pokemon_detail_selectors[pokemon.name]}
//                 pokemonSpecie={pokemon}
//               />}

//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div className={styles.noData}>No such Pokémon :/</div>
//       )}

//       {selectedPokemon && (
//         <Suspense fallback={<div>Carregando...</div>}>
//           <PokemonModal
//             open={open}
//             setOpen={setOpen}
//             pokemon_data= {{
//               pokemon_name: selectedPokemon,
//               details: pokemon_detail_selectors && pokemon_detail_selectors[selectedPokemon],
//               specie: pokemon_detail_selectors && pokemon_species_selectors && pokemon_species_selectors[selectedPokemon]
//             }}
//             // pokemon={pokemon_detail_selectors[selectedPokemon]}
//             // pokemonSpecie={pokemon_species_selectors[selectedPokemon]}
//             // pokemonEvolution={selectedPokemon.evolution}
//             // pokemons={pokemons}
//           />
//         </Suspense>
//       )}
//     </>
//   );
// };

// export default PokemonGrid;




import React, { useState, lazy, Suspense, useEffect } from "react";
import styles from "./Grid.module.css";
import PokemonCard from "./Card";
import { fetchPokemons, selectPokemon } from '../../redux/pokemons/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetails_all } from '../../redux/pokemonDetails/actions';
import { fetchPokemonSpecies_all } from '../../redux/pokemonSpecies/actions';

const PokemonModal = lazy(() => import("./PokemonModal/Modal"));

function PokemonGrid({setMessages}) {
  
  const [open, setOpen] = useState(false);

  const [pokemon_list, set_pokemon_list] = React.useState({
    list: null,
    isDetail: false,
    isSpecies: false,
    loading: false,
  })

  const dispatch = useDispatch();

   const {loading: pokemon_loading, data: pokemon_data, error: pokemon_error, selected: selectedPokemon} = useSelector((state) => state.pokemonsReducer);
   const {loading: pokemonDetail_loading, data: pokemonDetail_data} = useSelector((state) => state.pokemonDetailsReducer);
   const {loading: pokemonSpecies_loading, data: pokemonSpecies_data} = useSelector((state) => state.pokemonSpeciesReducer);

  useEffect(() => {
    // Fetch or load your pokemon list here and update the state    
    if (!pokemon_list?.list) { 
      dispatch(fetchPokemons())
    }
  }, [dispatch, pokemon_list]);

  useEffect(() => {
    if (selectedPokemon) {
      console.log('selected', selectedPokemon)
      const isValid = pokemon_list && pokemon_list.list.some(item => {
        return selectedPokemon?.name ? item.name.toLowerCase().includes(selectedPokemon?.name)
          : item.name.toLowerCase().includes(selectedPokemon);
      });
      console.log(isValid)
      if(!isValid) {
        console.log("Lõi")
        setMessages({
          severity: 'error',
          text: 'Không tìm thấy Pokemon bạn cần !!'
        })
        dispatch(selectPokemon(null));
        return
      }
        
      setOpen(true);
    }
    
  }, [dispatch, pokemon_list, selectedPokemon, setMessages]);

  useEffect(() => {
    if (pokemon_data && pokemon_data.list) {
      set_pokemon_list(prev => ({ ...prev, list: pokemon_data.list, loading: true }));
      dispatch(fetchPokemonDetails_all(pokemon_data.list));
      dispatch(fetchPokemonSpecies_all(pokemon_data.list));
    }
  }, [dispatch, pokemon_data, pokemon_error, pokemon_loading]);

  useEffect(() => { 
    if (pokemon_list.isDetail && pokemon_list.isSpecies) {
      set_pokemon_list(prev => ({ ...prev, loading: false }));
    } 
  }, [pokemon_list.isDetail, pokemon_list.isSpecies]);


  useEffect(() => { 
    if (pokemon_data && pokemon_data.list && pokemonDetail_data
      && pokemonDetail_loading == false && pokemon_list?.list && pokemon_list.isDetail === false) {
      
      const pokemon_detail = pokemon_list.list.map((pokemon) => {
        console.log('Merging details for:', pokemon,  pokemonDetail_data);
        return {
          ...pokemon,
          details: pokemonDetail_data[pokemon.name] ? pokemonDetail_data[pokemon.name] : null
        }
      })

      console.log('Updated pokemon_detail list:', pokemon_detail);
      
      set_pokemon_list(prev => ({ 
        ...prev, 
        list: pokemon_detail,
        isDetail: true 
      }));
    }
  }, [pokemonDetail_data, pokemonDetail_loading, pokemon_data, pokemon_list.loading, pokemon_list]);


  useEffect(() => { 
    if (pokemon_data && pokemon_data.list && pokemonSpecies_data
      && pokemonSpecies_loading == false && pokemon_list?.list && pokemon_list.isSpecies === false) {
      
      const pokemon_species = pokemon_list.list.map((pokemon) => {
        console.log('Merging species for:', pokemon,  pokemonSpecies_loading);
        return {
          ...pokemon,
          species: pokemonSpecies_data[pokemon.name] ? pokemonSpecies_data[pokemon.name] : null
        }
      })

      console.log('Updated pokemon_species list:', pokemon_species);
      
      set_pokemon_list(prev => ({ 
        ...prev, 
        list: pokemon_species,
        isSpecies: true 
      }));
    }
  }, [pokemonSpecies_data, pokemonSpecies_loading, pokemon_data, pokemon_list.loading, pokemon_list]);

  useEffect(() => {
    console.log('Current pokemon_list state:', pokemon_list);
  }, [pokemon_list]);



  const openDetail = async (pokemon) => {
    // setSelectedPokemon(pokemon_name);
    dispatch(selectPokemon(pokemon));
  }

  const closeDetail = async () => {
    // setSelectedPokemon(pokemon_name);
    dispatch(selectPokemon(null));
    setOpen(false)
  }

  if (pokemon_list.loading) 
    return <div className={styles.noData}>Loading ... </div>;

  return (
    <div>
      {Array.isArray(pokemon_list.list) && pokemon_list.isDetail && pokemon_list.isSpecies? (
        <ul className={styles.pokemonGrid}>
          {pokemon_list.list.map((pokemon, index) => (
            <li key={index} style={{ animationDelay: `${index * 350}ms` }}
                onClick={() =>openDetail(pokemon)}>

              { <PokemonCard
                  pokemon={pokemon['details']}
                  pokemonSpecie={ pokemon['spcies'] }
              />}          

            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noData}>No such Pokémon :/</div>
      )}



      {open && selectedPokemon && (
        <Suspense fallback={<div>Carregando...</div>}>
          <PokemonModal
            open={open}
            onClose={closeDetail}
            pokemon_data= {{
              pokemon_name: selectedPokemon?.name ? selectedPokemon.name : selectedPokemon,
              details: pokemon_list.list && pokemon_list.list.find(p => p.name === (selectedPokemon?.name ? selectedPokemon.name : selectedPokemon))?.details,
              specie: pokemon_list.list && pokemon_list.list.find(p => p.name === (selectedPokemon?.name ? selectedPokemon.name : selectedPokemon))?.species
            }}
          />
        </Suspense>
      )}
    </div>
  )
}

export default PokemonGrid


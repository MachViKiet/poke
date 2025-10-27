// import { Autocomplete, TextField } from "@mui/material";
// import styles from "./Filters.module.css"
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import { useSelector } from "react-redux";

// const SearchBarFilter = () => {
//     const pokemon_selectors = useSelector((state) => state.reducers.pokemons) || [];
//     return (
//         <div className={styles.searchBarFilter}>
//             {/* <label htmlFor="search-input">SEARCH</label> */}
//             {/* <input id="search-input" type="text" 
//             value={filters.search} 
//             onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))} 
//             /> */}
//             {/* <TextField fullWidth label="SEARCH" id="search-input" 
//                 value={filters.search} 
//                 onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))} 
//             /> */}

//             <Autocomplete
//                 disablePortal
//                 width={'300px'}
//                 options={[...pokemon_selectors]}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField fullWidth {...params} label="Tra cứu ..." />}
//             />
//         </div>
//     );

//     //   return (
//     // <Paper
//     //   component="form"
//     //   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     // >
//     //   <IconButton sx={{ p: '10px' }} aria-label="menu">
//     //     <MenuIcon />
//     //   </IconButton>
//     //   <InputBase
//     //     sx={{ ml: 1, flex: 1 }}
//     //     placeholder="Search Google Maps"
//     //     inputProps={{ 'aria-label': 'search google maps' }}
//     //   />
//     //   <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//     //     <SearchIcon />
//     //   </IconButton>
//     //   <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//     //   <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//     //     <DirectionsIcon />
//     //   </IconButton>
//     // </Paper>
// //   );
// };

// export default SearchBarFilter;










import React, { useState, useEffect, useMemo, useRef } from "react";
import { TextField, Box, List, ListItem, ListItemText } from "@mui/material";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";

const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  const pokemon_selectors = useSelector((state) => state.reducers.pokemons);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const filtered = pokemon_selectors?.list.filter((p) =>
      p.name.toLowerCase().includes(lowerTerm)
    );
    setFilteredList(filtered);
  };

  // Dùng debounce để tránh gọi liên tục
  const debouncedSearch = useMemo(() => debounce(handleSearch, 200), [pokemon_selectors?.list]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 400}} ref={wrapperRef} onFocus={() => setShowResults(true)}>
      <TextField
      sx = {{ background: '#fff' }}
        fullWidth
        label="Search Pokémon"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
      {showResults && <List sx = {{ background: '#fff', borderRadius: '0 0 10px 10px', border: '1px solid #00000063' }}>
        {filteredList.map((pokemon, index) => (
          <ListItem key={index}>
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
      </List>}
    </Box>
  );
};

export default SearchBarFilter;

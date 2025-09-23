import styles from "./Filters.module.css"

const SearchBarFilter = ({filters, setFilters}) => {

    return (
        <div className={styles.searchBarFilter}>
            <label htmlFor="search-input">SEARCH</label>
            <input id="search-input" type="text" 
            value={filters.search} 
            onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))} 
            />
        </div>
    );
};

export default SearchBarFilter;
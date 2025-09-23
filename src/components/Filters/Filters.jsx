import RegionFilter from "./Region";
import SearchBarFilter from "./SearchBar";
import SortByFilter from "./SortBy";
import TypeFilter from "./Type";
import styles from "./Filters.module.css"

const Filters = ({ filters, setFilters, regions, types }) => {
    return (
        <div className={styles.filters}>
            <RegionFilter  
            setFilters={setFilters} 
            regions={regions} 
            filters={filters} 
            />
            <SortByFilter 
            setFilters={setFilters} 
            filters={filters} 
            />
            <TypeFilter  
            setFilters={setFilters}
            filters={filters}
            types={types}
            />
            <SearchBarFilter  
            setFilters={setFilters}
            filters={filters} 
            />
        </div>
    )
}


export default Filters;
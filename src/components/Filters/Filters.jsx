import RegionFilter from "./Region";
import SearchBarFilter from "./SearchBar";
import SortByFilter from "./SortBy";
import TypeFilter from "./Type";

const Filters = () => {
    return (
        <div className="filters-section">
            <RegionFilter />
            <SortByFilter />
            <TypeFilter />
            <SearchBarFilter />
        </div>
    )
}


export default Filters;
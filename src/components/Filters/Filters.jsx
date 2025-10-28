import RegionFilter from "./Region";
import SearchBarFilter from "./SearchBar";
import SortByFilter from "./SortBy";
import TypeFilter from "./Type";
import styles from "./Filters.module.css"

const Filters = ({setMessages}) => {
    return (
        <div className={styles.filters + " scroll-bar"}>
            <SearchBarFilter setMessages = {setMessages} />
        </div>
    )
}


export default Filters;
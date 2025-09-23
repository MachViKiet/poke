import styles from "./Filters.module.css"

const SortByFilter = ({ filters, setFilters }) => {
  return (
    <div className={styles.sortByFilter}>
      <label htmlFor="sortby-select">SORT BY</label>
      <select id="sortby-select"
        value={filters.sortBy}
        onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value }))} >
        <option value="id" >ID</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};


export default SortByFilter;
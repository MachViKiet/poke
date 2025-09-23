import styles from "./Filters.module.css"

const TypeFilter = ({ types, filters, setFilters }) => {
  return (
    <div className={styles.typeFilter}>
      <label htmlFor="Type-select">TYPE</label>
      <select id="Type-select"
        value={filters.type}
        onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
      >
        <option value="">all types</option>
        {types.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}


export default TypeFilter;
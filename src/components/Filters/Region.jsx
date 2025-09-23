import styles from "./Filters.module.css"

const RegionFilter = ({ filters, setFilters, regions }) => {

  return (
    <div className={styles.regionFilter}>
      <label htmlFor="region-select">REGION</label>
      <select
        id="region-select"
        value={filters.region}
        onChange={e => setFilters(prev => ({ ...prev, region: e.target.value }))}
      >
        {regions.map(region => (
          <option
            key={region}
            value={region.toLowerCase()}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
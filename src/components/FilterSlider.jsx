const FilterSlider = ({ setPhaseRange }) => (
  <div>
    <label htmlFor="slider">Moon Illumination %</label>
    <input
      id="slider"
      type="range"
      min="0"
      max="100"
      defaultValue="100"
      className="filter-slider"
      onChange={(e) => setPhaseRange(Number(e.target.value))}
    />
  </div>
);
export default FilterSlider;

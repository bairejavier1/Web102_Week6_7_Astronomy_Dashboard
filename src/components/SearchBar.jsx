// SearchBar.jsx
import { useState, useEffect } from "react";

const SearchBar = ({ setSearchQuery, tooltip, searchQuery }) => {
  const [hovered, setHovered] = useState(false);
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    setLocalValue(searchQuery);
  }, [searchQuery]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);
    setSearchQuery(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="e.g., clear, rain, snow..."
        className="input"
        value={localValue}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onChange={handleChange}
      />
      {hovered && (
        <div className="tooltip">
          {tooltip ||
            "Search for: clear, cloud, rain, snow, fog, mist, drizzle, thunderstorm, haze, overcast."}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

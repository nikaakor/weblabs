import React, { useState } from 'react';

function CatalogHeader({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for laptops..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default CatalogHeader;
import React from 'react';
import Catalogue from "../components/catalog/Catalogue";
import CatalogueCards from "../components/catalog/CatalogueCards";

function Catalog() {
    return (
        <>
            <Catalogue />
            <CatalogueCards />
        </>
    );
}

export default Catalog;
// import React, { useState, useContext } from 'react';
// import CatalogueHeader from '../components/catalog/CatalogueHeader';
// import CatalogueCards from '../components/catalog/CatalogueCards';
// import { CatalogContext } from '../components/context/CatalogContext';

// function Catalog() {
//   const { items } = useContext(CatalogContext);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const filteredItems = items.filter(item =>
//     item.model.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <CatalogueHeader onSearch={handleSearch} />
//       <CatalogueCards items={filteredItems} />
//     </div>
//   );
// }

// export default Catalog;
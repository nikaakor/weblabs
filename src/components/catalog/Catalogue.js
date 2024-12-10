// import React, { useState } from 'react';
// import Filters from './Filters';
// import CatalogueCards from './CatalogueCards';
// import './Catalogue.css';

// function Catalog() {
//     const [filters, setFilters] = useState({
//         price: '',
//         model: '',
//         size: '',
//         color: '',
//         type: ''
//     });

//     const [searchQuery] = useState(''); // Стан для збереження введеного тексту пошуку

//     const items = [
//         { id: 1, model: "HP", properties: "15-dw1015ua (2F3G3EA) Silver", price: 900, size: "15-inch", color: "Silver", type: "Laptop" },
//         { id: 2, model: "Dell", properties: "Inspiron 3530", price: 870, size: "15-inch", color: "Black", type: "Laptop" },
//         { id: 3, model: "MacBook", properties: "Air 13 256GB Space Gray", price: 1200, size: "13-inch", color: "Gray", type: "Laptop" },
//         { id: 4, model: "Asus", properties: "TUF Gaming F15", price: 1010, size: "15-inch", color: "Black", type: "Gaming" },
//     ];

//     const handleFilterChange = (name, value) => {
//         setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//     };

//     const filteredItems = items.filter(item => {
//         const modelMatch = !searchQuery || item.model.toLowerCase().includes(searchQuery.toLowerCase());
//         const priceMatch = !filters.price || item.price <= parseInt(filters.price);
//         const modelFilterMatch = !filters.model || item.model.toLowerCase().includes(filters.model.toLowerCase());
//         const sizeMatch = !filters.size || item.size === filters.size;
//         const colorMatch = !filters.color || item.color.toLowerCase() === filters.color.toLowerCase();
//         const typeMatch = !filters.type || item.type.toLowerCase() === filters.type.toLowerCase();

//         return modelMatch && priceMatch && modelFilterMatch && sizeMatch && colorMatch && typeMatch;
//     });

//     return (
//         <div className="catalog-page">
//             <h2>Catalog</h2>
//             {/* Секція фільтрів */}
//             <Filters filters={filters} onFilterChange={handleFilterChange} onApply={() => {}} />

//             {/* Секція карток каталогу */}
//             <div className="catalog-cards-container">
//                 {filteredItems.length > 0 ? (
//                     filteredItems.map((item) => (
//                         <CatalogueCards key={item.id} {...item} />
//                     ))
//                 ) : (
//                     <p>No items found</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Catalog;


import React, { useState } from 'react';
import Filters from './Filters';
import CatalogueCards from './CatalogueCards';
import './Catalogue.css';

function Catalog() {
    const [filters, setFilters] = useState({
        price: '',
        model: '',
        size: '',
        color: '',
        type: ''
    });

    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const items = [
        { id: 1, model: "HP", properties: "15-dw1015ua (2F3G3EA) Silver", price: 900, size: "15-inch", color: "Silver", type: "Laptop" },
        { id: 2, model: "Dell", properties: "Inspiron 3530", price: 870, size: "15-inch", color: "Black", type: "Laptop" },
        { id: 3, model: "MacBook", properties: "Air 13 256GB Space Gray", price: 1200, size: "13-inch", color: "Gray", type: "Laptop" },
        { id: 4, model: "Asus", properties: "TUF Gaming F15", price: 1010, size: "15-inch", color: "Black", type: "Gaming" },
    ];

    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredItems = items.filter(item => {
        const modelMatch = !searchQuery || item.model.toLowerCase().includes(searchQuery.toLowerCase());
        const priceMatch = !filters.price || item.price <= parseInt(filters.price);
        const modelFilterMatch = !filters.model || item.model.toLowerCase().includes(filters.model.toLowerCase());
        const sizeMatch = !filters.size || item.size === filters.size;
        const colorMatch = !filters.color || item.color.toLowerCase() === filters.color.toLowerCase();
        const typeMatch = !filters.type || item.type.toLowerCase() === filters.type.toLowerCase();

        return modelMatch && priceMatch && modelFilterMatch && sizeMatch && colorMatch && typeMatch;
    });

    return (
        <div className="catalog-page">
            <h2>Catalog</h2>
            {/* Search Input */}
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Search by model..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Секція фільтрів */}
            <Filters filters={filters} onFilterChange={handleFilterChange} onApply={() => {}} />

            {/* Секція карток каталогу */}
            <div className="catalog-cards-container">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <CatalogueCards key={item.id} {...item} />
                    ))
                ) : (
                    <p>No items found</p>
                )}
            </div>
        </div>
    );
}

export default Catalog;
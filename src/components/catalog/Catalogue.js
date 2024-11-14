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

    const items = [
        { id: 1, model: "HP", properties: "15-dw1015ua (2F3G3EA) Silver", price: 900, size: "15-inch", color: "Silver", type: "Laptop" },
        { id: 2, model: "Dell", properties: "Inspiron 3530", price: 870, size: "15-inch", color: "Black", type: "Laptop" },
        { id: 3, model: "MacBook", properties: "Air 13 256GB Space Gray", price: 1200, size: "13-inch", color: "Gray", type: "Laptop" },
        { id: 4, model: "Asus", properties: "TUF Gaming F15", price: 1010, size: "15-inch", color: "Black", type: "Gaming" },
    ];


    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredItems = items.filter(item => {
        return (
            (!filters.price || item.price <= parseInt(filters.price)) &&
            (!filters.model || item.model.toLowerCase().includes(filters.model.toLowerCase())) &&
            (!filters.size || item.size === filters.size) &&
            (!filters.color || item.color.toLowerCase() === filters.color.toLowerCase()) &&
            (!filters.type || item.type.toLowerCase() === filters.type.toLowerCase())
        );
    });

    // Filter out items with undefined or missing properties
    const validFilteredItems = filteredItems.filter(item => item.model && item.price);

    return (
        <div className="catalog-page">
            <h2>Catalog</h2>
            
            {/* Filters section */}
            <Filters filters={filters} onFilterChange={handleFilterChange} onApply={() => {}} />

            {/* Catalog cards section */}
            <div className="catalog-cards-container">
                {validFilteredItems.length > 0 ? (
                    validFilteredItems.map((item) => (
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


// import React, { useContext } from 'react';
// import { CatalogContext } from '../context/CatalogContext';
// import CatalogueCards from './CatalogueCards';

// function Catalog() {
//     const { items } = useContext(CatalogContext);

//     return (
//         <div className="catalog-page">
//             <h2>Catalog</h2>
//             <div className="catalog-cards-container">
//                 {items.length > 0 ? (
//                     items.map((item) => (
//                         <CatalogueCards
//                             key={item.id}
//                             id={item.id}
//                             model={item.model}
//                             properties={item.properties}
//                             price={item.price}
//                         />
//                     ))
//                 ) : (
//                     <p>No items found</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Catalog;

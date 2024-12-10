import React from 'react';
import './Filters.css';

const Filters = ({ filters, onFilterChange, onApply }) => {
    return (
        <div className="filters-container">
            <div className="filter-item">
                <label>Price</label>
                <input
                    type="text"
                    value={filters.price}
                    onChange={(e) => onFilterChange('price', e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label>Model</label>
                <input
                    type="text"
                    value={filters.model}
                    onChange={(e) => onFilterChange('model', e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label>Screen Size</label>
                <input
                    type="text"
                    value={filters.size}
                    onChange={(e) => onFilterChange('size', e.target.value)}
                />
            </div>
            <button className="apply-button" onClick={onApply}>Apply</button>
        </div>
    );
};

export default Filters;


// import React from 'react';

// function Filters({ filters, onFilterChange, onApply }) {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         onFilterChange(name, value);
//     };

//     return (
//         <div className="filters">
//             <input
//                 type="text"
//                 name="model"
//                 placeholder="Model"
//                 value={filters.model}
//                 onChange={handleChange}
//             />
//             <input
//                 type="number"
//                 name="price"
//                 placeholder="Max Price"
//                 value={filters.price}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="size"
//                 placeholder="Size"
//                 value={filters.size}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="color"
//                 placeholder="Color"
//                 value={filters.color}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="type"
//                 placeholder="Type"
//                 value={filters.type}
//                 onChange={handleChange}
//             />
//             <button onClick={onApply}>Apply Filters</button>
//         </div>
//     );
// }

// export default Filters;
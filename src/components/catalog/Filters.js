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



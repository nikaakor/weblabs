import React from 'react';
import CatalogueCards from '../catalog/CatalogueCards';
import './FeaturedLaptops.css';

const laptops = [
    { id: 1, model: "HP", properties: "15-dw1015ua (2F3G3EA) Silver", price: 900 },
    { id: 2, model: "Dell", properties: "Inspiron 3530", price: 870 },
    { id: 3, model: "MacBook", properties: "Air 13 256GB Space Gray", price: 1200 },
    { id: 4, model: "Asus", properties: "TUF Gaming F15", price: 1010 },
    // Додай інші товари, якщо потрібно
];

const FeaturedLaptops = ({ visibleCount }) => {
    return (
        <div className="featured-laptops">
            <h3>Best Seller</h3>
            <div className="cards-container">
                {laptops.slice(0, visibleCount).map((laptop) => (
                    <CatalogueCards
                        key={laptop.id}
                        model={laptop.model}
                        properties={laptop.properties}
                        price={laptop.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedLaptops;

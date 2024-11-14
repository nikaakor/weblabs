import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CatalogContext } from '../components/context/CatalogContext';
import './ItemPage.css';
import hp from '../assets/img/hp.png'; 


function ItemPage() {
    const { id } = useParams();
    const { items } = useContext(CatalogContext);

    // Find the item based on the ID from the URL
    const item = items.find((item) => item.id === parseInt(id, 10));

    if (!item) {
        return <p>Item not found.</p>;
    }

    return (
        <div className="item-page-container">
            <h2 className="item-title">{item.model}</h2>
            {/* Use the item image if available; otherwise, use the default hp image */}
            <img src={item.image || hp} alt={item.model} className="item-image" />
            <p className="item-properties">{item.properties}</p>
            <p className="item-description">{item.description}</p>
            <p className="item-availability">{item.availability ? "In Stock" : "Out of Stock"}</p>
            <p className="item-price">Price: ${item.price}</p>
        </div>
    );
}

export default ItemPage;


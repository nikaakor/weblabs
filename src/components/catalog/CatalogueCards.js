import React from 'react';
import { Link } from 'react-router-dom';
import './CatalogueCards.css';
import hp from '../../assets/img/hp.png';

function CatalogueCards({ id, model, properties, price }) {
    return (
        <div className="catalog-card">
            <li>
                <img src={hp} alt="Product" className="hp" />
                <h4>{model}</h4>
                <p>{properties}</p>
                <p className="price">${price}</p>
                {/* Link to ItemPage with item ID */}
                <Link to={`/item/${id}`} className="view-more">
                    View more
                </Link>
            </li>
        </div>
    );
}

export default CatalogueCards;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function CatalogueCards({ id, model, properties, price, size, color, type }) {
//     return (
//         <div className="catalogue-card">
//             <h3>{model}</h3>
//             <p>Properties: {properties}</p>
//             <p>Price: ${price}</p>
//             <p>Size: {size}</p>
//             <p>Color: {color}</p>
//             <p>Type: {type}</p>
//             <Link to={`/item/${id}`} className="view-more">
//                 View More
//             </Link>
//         </div>
//     );
// }

// export default CatalogueCards;
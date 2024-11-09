// import React from 'react'; // Add this line
// import './CatalogueCards.css';
// import hp from '../../assets/img/hp.png';

// function CatalogueCards(props) {
//     return (
//         <div className="catalog-cards">
//             <li>
//                 <img src={hp} alt="" className="hp" />
//                 <h4>{props.model}</h4>
//                 <p>{props.properties}</p>
//                 <p className="price">{props.price + '$'}</p>
//             </li>
//         </div>
//     );
// }

// export default CatalogueCards;

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

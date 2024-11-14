import React, { createContext, useState } from 'react';

// Create CatalogContext
export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
    const [items] = useState([
        { id: 1, model: "HP", properties: "15-dw1015ua (2F3G3EA) Silver", price: 900, size: "15-inch", color: "Silver", type: "Laptop" },
        { id: 2, model: "Dell", properties: "Inspiron 3530", price: 870, size: "15-inch", color: "Black", type: "Laptop" },
        { id: 3, model: "MacBook", properties: "Air 13 256GB Space Gray", price: 1200, size: "13-inch", color: "Gray", type: "Laptop" },
        { id: 4, model: "Asus", properties: "TUF Gaming F15", price: 1010, size: "15-inch", color: "Black", type: "Gaming" },
    ]);

    return (
        <CatalogContext.Provider value={{ items }}>
            {children}
        </CatalogContext.Provider>
    );
};

// import React, { useState, useContext } from 'react';
// import Banner from "../components/banner/Banner";
// import FeaturedLaptops from "../components/featured_laptops/FeaturedLaptops";
// import ButtonViewMore from "../components/bvm/ButtonViewMore";
// import { Link } from 'react-router-dom';
// import { CatalogContext } from '../components/context/CatalogContext'; // Import CatalogContext

// function Home() {
//     const { items } = useContext(CatalogContext); // Fetch items from context
//     const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 items
//     const [showExtraContent, setShowExtraContent] = useState(false); // Control extra content visibility

//     const handleViewMore = () => {
//         setVisibleCount((prevCount) => prevCount + 4); // Show 4 more items on click
//         setShowExtraContent(true); // Reveal additional content
//     };

//     return (
//         <>
//             <Banner />
//             <FeaturedLaptops visibleCount={visibleCount} />
//             <ButtonViewMore onClick={handleViewMore} /> 

//             {/* Display items as links */}
//             <div>
//                 {items.slice(0, visibleCount).map((item) => (
//                     <div key={item.id}>
//                         <h3>{item.model}</h3>
//                         <Link to={`/item/${item.id}`} className="view-more">
//                             View More
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             {/* Additional content that appears when "View more" is clicked */}
//             {showExtraContent && (
//                 <div className="extra-content">
//                     <h2>Did you know?</h2>
//                     <p>Your smile is very charming!</p>
//                     <h3>More about Laptops</h3>
//                     <p>Explore various models that cater to different needs, from gaming to productivity.</p>
//                     <p>Check back soon as we frequently update our catalog with new arrivals.</p>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Home;

// src/components/context/CatalogContext.js

// import React, { createContext, useState } from 'react';

// // Create a Context for the catalog
// export const CatalogContext = createContext();

// // Define the CatalogProvider component
// export const CatalogProvider = ({ children }) => {
//   // Example items, you can replace this with dynamic data if needed
//   const [items] = useState([ // Remove setItems, as it's not being used
//     { id: 1, model: 'Laptop 1', price: 1000 },
//     { id: 2, model: 'Laptop 2', price: 1500 },
//     { id: 3, model: 'Laptop 3', price: 2000 },
//     { id: 4, model: 'Laptop 4', price: 2500 },
//   ]);

//   return (
//     <CatalogContext.Provider value={{ items }}>
//       {children}
//     </CatalogContext.Provider>
//   );
// };

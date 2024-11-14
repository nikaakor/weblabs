import React, { useState } from 'react';
import Banner from "../components/banner/Banner";
import FeaturedLaptops from "../components/featured_laptops/FeaturedLaptops";
import ButtonViewMore from "../components/bvm/ButtonViewMore";
// import { Link } from 'react-router-dom';

function Home() {
    const [visibleCount, setVisibleCount] = useState(4); // initially show 4 items
    const [showExtraContent, setShowExtraContent] = useState(false); // control extra content visibility

    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 4); // show 4 more items on click
        setShowExtraContent(true); // reveal additional content
    };

    return (
        <>
            <Banner />
            <FeaturedLaptops visibleCount={visibleCount} />
            <ButtonViewMore onClick={handleViewMore} /> 

            {/* Display items as links
            <div>
                {items.slice(0, visibleCount).map((item) => (
                    <div key={item.id}>
                        <h3>{item.model}</h3>
                        <Link to={`/item/${item.id}`} className="view-more">
                            View More
                        </Link>
                    </div>
                ))}
            </div> */}

            {/* Additional content that appears when "View more" is clicked */}
            {showExtraContent && (
                <div className="extra-content">
                    <h2>Did you know?</h2>
                    <p>Your smile is very charming!</p>
                    <h3>More about Laptops</h3>
                    <p>Explore various models that cater to different needs, from gaming to productivity.</p>
                    <p>Check back soon as we frequently update our catalog with new arrivals.</p>
                </div>
            )}
        </>
    );
}

export default Home;


// import React, { useState, useContext } from 'react';
// import Banner from "../components/banner/Banner";
// import FeaturedLaptops from "../components/featured_laptops/FeaturedLaptops";
// import ButtonViewMore from "../components/bvm/ButtonViewMore";
// import { Link } from 'react-router-dom';
// import { CatalogContext } from '../components/context/CatalogContext'; // Import CatalogContext

// function Home() {
//     const { items } = useContext(CatalogContext); // Use context to access the items
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




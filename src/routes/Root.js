import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
function Root() {
    return(
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Root


// import React, { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

// const Root = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     navigate(`/catalog?search=${searchQuery}`);
//   };

//   return (
//     <div>
//       <header>
//         <form onSubmit={handleSearchSubmit}>
//           <input
//             type="text"
//             placeholder="Search for laptops..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       </header>
//       <Outlet context={{ searchQuery }} />
//     </div>
//   );
// };

// export default Root;
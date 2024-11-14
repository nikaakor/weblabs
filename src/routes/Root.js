// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
// import { Outlet } from "react-router-dom";
// function Root() {
//     return(
//         <>
//             <Header/>
//                 <Outlet/>
//             <Footer/>
//         </>
//     )
// }

// export default Root


import React from 'react'; // Add this line
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;
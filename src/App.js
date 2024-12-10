// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './routes/Home';
// import Root from './routes/Root';
// import Catalog from './routes/Catalog';
// import ItemPage from './routes/ItemPage';
// import { CatalogProvider } from './components/context/CatalogContext';

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/catalog', element: <Catalog /> },
//       { path: '/item/:id', element: <ItemPage /> },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <CatalogProvider>
//       <RouterProvider router={routes} />
//     </CatalogProvider>
//   );
// };

// export default App;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Root from './routes/Root';
import Catalog from './routes/Catalog';
import ItemPage from './routes/ItemPage';
import { CatalogProvider } from './components/context/CatalogContext';
import { SearchProvider } from './components/context/SearchContext';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/item/:id', element: <ItemPage /> },
    ],
  },
]);

const App = () => {
  return (
    <CatalogProvider>
      <SearchProvider>
        <RouterProvider router={routes} />
      </SearchProvider>
    </CatalogProvider>
  );
};

export default App;
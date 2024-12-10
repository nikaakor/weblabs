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



import React, { createContext, useState, useContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

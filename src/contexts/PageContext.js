import React, { useState, createContext } from 'react';

export const PageContext = createContext();

export function PageProvider(props) {
  const [page, setPage] = useState(1);
  const addPage = () => {
    setPage(page + 1);
  };
  return (
    <PageContext.Provider value={{ page, addPage }}>
      {props.children}
    </PageContext.Provider>
  );
}

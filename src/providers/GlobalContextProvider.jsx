"use client";
import { useMemo, useState } from "react";
import GlobalContext from "../context/globalContext";


const GlobalContextProvider = ( props) => {
    const [ data, setData ] = useState({});
  
    const value = useMemo(() => ({
      data,
      setData
    }), [data]);

    return (
      <GlobalContext.Provider value={value}>
        {props.children}
      </GlobalContext.Provider>
    );
  }

export default GlobalContextProvider;
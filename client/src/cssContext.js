import React from "react";

const defaultContext = {
    cssText: "",
    setCssText: () => {}    
};

export default React.createContext(defaultContext);
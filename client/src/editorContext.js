import React from "react";

const defaultContext = {
    markdownText: "",
    cssText: "",
    setMarkdownText: () => {},
    setCssText: () => {}    
};

export default React.createContext(defaultContext);
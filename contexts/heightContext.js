import { useState, useEffect, useContext, createContext } from "react";

export const HeightContext = createContext(null);

export const HeightContextFC = ({ children }) => {
  const [height, setHeight] = useState(null);

  const refreshHeight = () => {
    if (document) {
      let body = document.body;
      let html = document.documentElement;

      let tempHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      setHeight(tempHeight);
    }
  };

  useEffect(() => {
    refreshHeight();
  }, []);

  return (
    <HeightContext.Provider value={{ height, refreshHeight }}>
      {children}
    </HeightContext.Provider>
  );
};

export const useHeight = () => {
  const { height, refreshHeight } = useContext(HeightContext);
  return { height, refreshHeight };
};

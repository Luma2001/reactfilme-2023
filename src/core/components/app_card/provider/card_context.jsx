import { createContext, useContext } from "react";
//fue realizado solo a modo de ejemplo para explicar compound component
export const CardContext = createContext();
export const { Provider } = CardContext;
export const useCardContext = () => useContext(CardContext);

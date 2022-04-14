import { createContext, useReducer } from "react";

export const AlertContext = createContext({});

export function AlertContextProvider(props) {
  const initialState = null;
  const alertReducer = (state, action) => {
    switch (action.type) {
      case "SET_ALERT":
        return action.payload;
      case "REMOVE_ALERT":
        return null;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({ type: "SET_ALERT", payload: { message, type } });
  };

  setTimeout(() => {
    dispatch({ type: "REMOVE_ALERT" });
  }, 5000);

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
}

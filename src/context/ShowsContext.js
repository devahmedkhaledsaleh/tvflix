import axios from "axios";
import { createContext, useReducer } from "react";

export const ShowsContext = createContext({});

export function ShowsContextProvider(props) {
  const initialState = {
    shows: [],
    activeShow: {},
    loading: false,
  };
  const showReducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return { ...state, loading: true };
      case "SEARCH_SHOWS":
        return { ...state, shows: action.payload, loading: false };
      case "SET_ACTIVE_SHOW":
        return {
          ...state,
          activeShow: action.payload ? action.payload : {},
          loading: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(showReducer, initialState);

  const searchShows = async (searchKeyword) => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchKeyword}`
    );
    dispatch({ type: "SEARCH_SHOWS", payload: data });
  };

  const getActiveShow = async (id) => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    dispatch({ type: "SET_ACTIVE_SHOW", payload: data });
  };

  return (
    <ShowsContext.Provider
      value={{ shows: state.shows, loading: state.loading, searchShows, getActiveShow,activeShow:state.activeShow }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
}

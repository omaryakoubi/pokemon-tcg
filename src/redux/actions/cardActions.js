import axios from "axios";
import {
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_DEFAULT_PAGE,
  SET_POKEMON_NAME
} from "./actionTypes";

export const setPokemonName = (pokemonName) => {
  return {
    type: SET_POKEMON_NAME,
    payload: pokemonName,
  };
};

export const pageNavigate = (type) => {
  if (type === "next") {
    return {
      type: PREV_PAGE,
    };
  } else if (type === "prev") {
    return {
      type: NEXT_PAGE,
    };
  } else if (type === "main") {
    return {
      type: RESET_DEFAULT_PAGE,
    };
  }
};

export const fetchCards = (pokemonName, page) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CARDS_REQUEST,
    });

    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=20${
          pokemonName ? `&q=name:${pokemonName}` : ""
        }`
      );

      dispatch({
        type: FETCH_CARDS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CARDS_FAILURE,
        payload: error,
      });
    }
  };
};

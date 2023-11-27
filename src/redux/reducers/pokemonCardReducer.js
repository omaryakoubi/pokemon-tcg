import {
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_DEFAULT_PAGE,
  SET_POKEMON_NAME,
} from "../actions/actionTypes";

const initialState = {
  cards: [],
  pokemonPage: 1,
  pokemonName: "",
};

const pokemonCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: [...action.payload],
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_POKEMON_NAME:
      return {
        ...state,
        pokemonName: action.payload,
      };

    case PREV_PAGE:
      return {
        ...state,
        pokemonPage:
          state.pokemonPage > 1 ? (state.pokemonPage -= 1) : state.pokemonPage,
      };

    case NEXT_PAGE:
      return {
        ...state,
        pokemonPage: state.pokemonPage + 1,
      };

    case RESET_DEFAULT_PAGE:
      return {
        ...state,
        pokemonPage: 1,
      };

    default:
      return state;
  }
};

export default pokemonCardReducer;

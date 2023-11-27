import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import pokemonCardReducer from "./pokemonCardReducer";

const rootReducer = combineReducers({ cartReducer, pokemonCardReducer });

export default rootReducer;

import { Button, Circle, Icon } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  pageNavigate,
  setPokemonName,
} from "../redux/actions/cardActions";
import { toggleCart } from "../redux/actions/cartActions";

import CardFilter from "./CardFilter";

export default function Navbar() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const { pokemonPage } = useSelector((state) => state.pokemonCardReducer);

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
        height: "20px !important",
      }}
    >
      <img
        style={{ height: "70px", cursor: "pointer" }}
        src={require("../assets/pokemonLogo.png")}
        alt="pokemon_logo"
        onClick={() => {
          dispatch(pageNavigate("main"));
          dispatch(setPokemonName());
          dispatch(fetchCards("", pokemonPage));
        }}
      />

      <CardFilter />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ marginTop: "5px", width: "5%", color: "white" }}
          colorScheme="blue"
          onClick={() => dispatch(toggleCart())}
        >
          <Icon as={BsCart4} color="white" size="20px" />
        </Button>

        {cart.length > 0 && (
          <div style={{ zIndex: 1, marginBottom: "35px" }}>
            <Circle size="20px" bg="tomato" color="white">
              {cart.length}
            </Circle>
          </div>
        )}
      </div>
    </div>
  );
}

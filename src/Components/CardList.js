import { Button, Icon } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

import Card from "./Card";

const CardList = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.pokemonCardReducer);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Card
            key={card.id}
            name={card.name}
            rarity={card.rarity}
            image={card.images.small}
          />

          <Button
            style={{ margin: "10px 0 35px", width: "100%", color: "white" }}
            colorScheme="blue"
            onClick={() => dispatch(addToCart(card))}
          >
            <Icon as={BsCart4} color="white" size="30px" />
            {card?.cardmarket?.prices?.averageSellPrice}€
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CardList;

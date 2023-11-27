import {
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { BsCartX } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

import Card from "./Card";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);

  const cartSize = cart.length > 0;
  const totalPrice = cart
    .reduce((acc, card) => acc + card?.cardmarket?.prices?.averageSellPrice, 0)
    .toFixed(2);

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <VStack spacing="3" mb="8">
          <Heading as="h3" fontSize="md">
            {cartSize
              ? `Total: ${totalPrice}€`
              : `There are no cards in the cart`}
          </Heading>
          {cartSize}
        </VStack>
        {cartSize && (
          <>
            <Heading as="h4" fontSize="md">
              Your items
            </Heading>
            <SimpleGrid columns={1} spacing="2rem" my="2" w="full">
              {cart?.map((card) => (
                <div>
                  <Card
                    flavor="item"
                    key={card.id}
                    {...card}
                    image={card.images.small}
                  />
                  <Button
                    style={{ marginTop: "5px", width: "90%", color: "white" }}
                    colorScheme="blue"
                    onClick={() => dispatch(removeFromCart(card.id))}
                  >
                    <Icon as={BsCartX} color="white" size="50px" />
                    {card?.cardmarket?.prices?.averageSellPrice}€
                  </Button>
                </div>
              ))}
            </SimpleGrid>
          </>
        )}
      </Flex>
    </>
  );
}

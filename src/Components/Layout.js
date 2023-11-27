import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/modal";

import { Flex, Icon } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";

import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./redux/actions/cartActions";

const Layout = ({ children, searchName }) => {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.cartReducer);

  return (
    <Flex flexDir="column" alignItems="center" h="100vh">
      <Navbar searchName={searchName} />
      <Flex as="main" w="full" pt="72px" px="4" flex="1">
        {children}
      </Flex>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={() => dispatch(toggleCart())}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Icon as={BsCart4} color="white" size="20px" />
          </DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Layout;

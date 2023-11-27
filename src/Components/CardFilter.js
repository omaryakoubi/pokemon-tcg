import { Button, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { pageNavigate, setPokemonName } from "../redux/actions/cardActions";

const CardFilter = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <Input
        placeholder="Search"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(pageNavigate("main"));
            dispatch(setPokemonName(searchName.toLowerCase()));
          }
        }}
        borderRightRadius="2"
      />
      <Button
        borderLeftRadius="2"
        colorScheme="blue"
        onClick={() => {
          dispatch(pageNavigate("main"));
          dispatch(setPokemonName(searchName.toLowerCase()));
        }}
      >
        <Icon as={BsSearch} color="white" size="25px" />
      </Button>
    </div>
  );
};

export default CardFilter;

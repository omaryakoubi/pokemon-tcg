import { Button, Icon } from "@chakra-ui/react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { pageNavigate } from "../redux/actions/cardActions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pokemonPage } = useSelector((state) => state.pokemonCardReducer);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "25px 0px 25px",
        width: "15vw",
      }}
    >
      <Button
        style={{ marginTop: "5px", width: "50px", color: "white" }}
        colorScheme="blue"
        onClick={() => dispatch(pageNavigate("next"))}
      >
        <Icon as={BsChevronDoubleLeft} color="white" size="20px" />
      </Button>
      <h5>{pokemonPage}</h5>
      <Button
        style={{ marginTop: "5px", width: "50px", color: "white" }}
        colorScheme="blue"
        onClick={() => dispatch(pageNavigate("prev"))}
      >
        <Icon as={BsChevronDoubleRight} color="white" size="20px" />
      </Button>
    </div>
  );
};

export default Pagination;

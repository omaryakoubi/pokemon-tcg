import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "./redux/actions/cardActions";

import CardList from "./Components/CardList";
import Pagination from "./Components/Pagination";
import Layout from "./Layout";

function App() {
  const dispatch = useDispatch();
  const { pokemonName } = useSelector((state) => state.pokemonCardReducer);
  const { pokemonPage } = useSelector((state) => state.pokemonCardReducer);

  useEffect(() => {
    dispatch(fetchCards(pokemonName, pokemonPage));
  }, [dispatch, pokemonPage, pokemonName]);

  return (
    <div>
      <Layout>
        <Flex flexDir="column" alignItems="center">
          <CardList />
          <Pagination />
        </Flex>
      </Layout>
    </div>
  );
}

export default App;

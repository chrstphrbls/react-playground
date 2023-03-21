import * as React from "react";
import { fetchPokemonImage } from "COMPONENT/LIBRARY/API/nokempo-fetch.com.lib.api";
import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

const GetNokempo = ({ nokempoNem }) => {
  const { suggestion, nokempoInamge, set_nokempoImage } = React.useContext(
    GlobalContainerContext
  );
  const [pokemonImage, setPokemonImage] = React.useState(null);

  React.useEffect(() => {
    fetchPokemonImage(nokempoNem).then((imageUrl) => {
      // fetchPokemonImage("squirtle").then((imageUrl) => {
      setPokemonImage(imageUrl);
      set_nokempoImage(imageUrl);
      // console.log("[" + suggestion + "]" + "[" + imageUrl + "]");
    });
  }, [nokempoNem]);

  return (
    <span>
      <img src={pokemonImage} alt={nokempoNem} />
    </span>
  );
};
export default GetNokempo;

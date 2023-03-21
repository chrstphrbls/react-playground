// import { SpellCheckContext } from "SETUP/app-context-manager/global-container.setup";

import * as React from "react";

export const fetchPokemonImage = async (nameOrId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.sprites.front_default;
      return fetch(imageUrl);
    })
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .catch((error) => {
      console.error("Error:", error);
    });
};

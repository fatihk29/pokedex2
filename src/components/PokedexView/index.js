import React, { useEffect, useState } from "react";

import { fetchPokemonData, fetchPokemons } from "../../API";
import CardItem from "../../components/CardItem";
import DetailedView from "../../components/DetailedView";
import Navigation from "../../components/Navigation";
import Loading from "../../components/Loading";
import "./PokedexView.css";

function PokedexView({ generation }) {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fillPokemonsArray();

  }, [generation]);

  const fillPokemonsArray = () => {
    setIsLoading(true);
    setPokemons([]);

    if (generation.limit == null || generation.offset == null) {
      return;
    }

    fetchPokemons(generation.limit, generation.offset).then(
      async ({ results }) => {
        let newPokemons = [];

        await Promise.all(
          results.map(async (pokemon, i) => {
            await fetchPokemonData(pokemon.name).then(async (json) => {
              newPokemons[i] = json;
            });
          })
        );

        setPokemons(newPokemons);
        setIsLoading(false);
      }
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <div className="pokedex-view">
        {pokemons.map((p, i) => {
          return (
            <CardItem
              pokemon={p}
              key={p.id}
              onClick={() => setSelectedPokemon(i)}
            />
          );
        })}
      </div>

      {selectedPokemon !== -1 && (
        <DetailedView
          pokemon={pokemons[selectedPokemon]}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </>
  );
}

export default PokedexView;

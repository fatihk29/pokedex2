import React, { useState } from "react";
import About from "./ModalTabs/About";
import BaseStats from "./ModalTabs/BaseStats";
import "./Details.css";

function Details({ pokemon }) {
  const [tab, setTab] = useState("about");

  const sprites = pokemon.sprites.other;
  const imgURL =
    sprites.dream_world.front_default ||
    sprites["official-artwork"].front_default;

  const switchTab = (e) => {
    e.preventDefault();
    setTab(e.target.dataset.tab);
  };

  const getClassName = (tabName) => {
    return `tab-switch ${tab === tabName ? "active" : ""}`;
  };

  return (
    <div className="details">
      <img src={imgURL} className="pokemon-image" alt={pokemon.name} />

      <div className="tabs-switch-container">
        <button
          className={getClassName("about")}
          data-tab="about"
          onClick={switchTab}
        >
          About
        </button>
        <button
          className={getClassName("base-stats")}
          data-tab="base-stats"
          onClick={switchTab}
        >
          Base Stats
        </button>
      </div>

      {tab === "about" && <About pokemon={pokemon} />}

      {tab === "base-stats" && <BaseStats stats={pokemon.stats} />}
    </div>
  );
}

export default Details;

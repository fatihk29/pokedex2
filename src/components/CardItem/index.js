import React from "react";
import "./CardItem.css";

function Card({ pokemon: { name, id, sprites, types }, onClick }) {
  const imgURL =
    sprites.other.dream_world.front_default ||
    sprites.other["official-artwork"].front_default;

  const cssClass = types.map((t) => "type-" + t.type.name).join(" ");
  const paddedId = "#" + id.toString().padStart(3, "000");

  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${cssClass}`}>
        <div className="bg-pokeball"></div>
        <span className="pokemon-id">{paddedId}</span>

        <div className="card-title">
          <h2>{name}</h2>

          <div className="pokemon-types">
            {types.map((item, index) => {
              return (
                <span className="type" key={index}>
                  {item.type.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="pokemon-image">
          <img alt={name} src={imgURL} />
        </div>
      </div>
    </div>
  );
}

export default Card;

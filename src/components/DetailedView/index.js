import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import BackButton from "../../components/BackButton";
import CardItem from "../../components/CardItem";
import Details from "../../components/Details";
import Overlay from "../../components/Overlay";
import "./DetailedView.css";

class DetailedView extends Component {
  constructor(props) {
    super(props);
    this.detailsViewRef = createRef(null);

    this.state = {
      hideOverlay: false,
      pokemon: props.pokemon,
    };

    this.handleBackClick = this.handleBackClick.bind(this);
    this.setPokemonData = this.setPokemonData.bind(this);
  }

  // handle back button clicking
  handleBackClick() {
    this.setState({
      hideOverlay: true,
    });

    this.detailsViewRef.current.classList.add("hidden");

    setTimeout(() => {
      this.props.setSelectedPokemon(-1);
    }, 500);
  }

  setPokemonData(data) {
    this.setState({
      pokemon: data,
    });
  }

  render() {
    return ReactDOM.createPortal(
      <>
        <Overlay
          hidden={this.state.hideOverlay}
          onClick={this.handleBackClick}
        />
        <div className="details-view-container shown" ref={this.detailsViewRef}>
          <BackButton onClick={this.handleBackClick} />
          <CardItem pokemon={this.state.pokemon} />
          <Details
            pokemon={this.state.pokemon}
            setPokemonData={this.setPokemonData}
          />
        </div>
      </>,
      document.body
    );
  }
}

export default DetailedView;

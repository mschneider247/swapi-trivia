import React from 'react';
import { Component } from 'react';
import './Characters.css';
import PropTypes from 'prop-types';

class Characters extends Component {
  constructor(props){
    super()
    this.props = props
    this.state = {
      isFavorited: this.props.checkFavoriteStatus(this.props)
    }
  }

  render() {
    return (
      <section className="charac-card">
        <div className={this.state.isFavorited ? 'favorite' : 'unfavorite'} onClick={() => {
          this.props.updateFavoriteCharacters(this.props)
          this.state.isFavorited ? this.setState({ isFavorited: false}) : this.setState({ isFavorited: true})
          }}>
        </div>
        <h3>{this.props.name}</h3>
        <h4><span className="bold-text">SPECIES </span>{this.props.species}</h4>
        <h4><span className="bold-text">HOMEWORLD </span>{this.props.homeworld}</h4>
        <h4><span className="bold-text">POPULATION </span>{this.props.population}</h4>
        <h4><span className="bold-text">OTHER MOVIES </span>{this.props.films}</h4>
      </section>
    )
  }
}

export default Characters;

Characters.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  films: PropTypes.string,
  population: PropTypes.string,
  updateFavoriteCharacters: PropTypes.func,
  url: PropTypes.string,
  isFavorite: PropTypes.bool,
  checkFavoriteStatus: PropTypes.func,
}

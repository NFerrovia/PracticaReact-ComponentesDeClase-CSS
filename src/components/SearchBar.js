import React from 'react';

// componente de la barra de búsqueda

class SearchBar extends React.Component {
  state = { term: '' };

  // onFormSubmit toma el texto aceptado para la busqueda, previente que el navegador recarge y
  // actualiza el estado en caso del cambio del término.

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Ingrese un término para la busqueda</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

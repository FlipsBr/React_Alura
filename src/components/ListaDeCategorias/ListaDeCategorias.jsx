import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
    /* componentDidMount() serve para re-renderizar categorias novas, que vem da função _novasCategorias,
     que são passadas como parâmetro para o método inscrever do construtor...*/
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
    /* alterando o estado que veio do constructor.
    ele veio avisado pelo inscrever do componentDidMount */
  }
  _handleEventoInput(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
      console.log("adicionar categoria FUCK");
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria."
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;

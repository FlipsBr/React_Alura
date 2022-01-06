import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.nota = "";
  }

  _handleMudancaTitulo(ev) {
    ev.stopPropagation();
    this.titulo = ev.target.value;
  }
  _handleMudancaTexto(ev) {
    ev.stopPropagation();
    this.texto = ev.target.value;
  }
  _criarNota(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(`uma nova nota foi criada. ${this.titulo}, ${this.texto}`);
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
    };
  }
  criarNota(texto, titulo) {
    const novaNota = { titulo, texto };
    const novasNotas = [...this.state.notas, novaNota];
    console.log(`uma nova nota foi criada.2 ${titulo}, ${texto}`);
    const novoEstado = {
      notas: novasNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;

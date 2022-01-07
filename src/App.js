import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    /* Sem alterar o State, o react não re-renderiza a virtual DOM. */
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;

/*criarNota(texto, titulo, categoria) {
    const novaNota = { titulo, texto, categoria };
    console.log(`nova categoria criada: ${titulo}, ${texto},${categoria}`);
    const novasNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novasNotas,
    };
    this.setState(novoEstado);
  }*/

/*adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const newState = { ...this.state, categorias: novoArrayCategorias };
    this.setState(newState);
  }*/

/*apagarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }*/

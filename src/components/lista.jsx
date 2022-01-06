import React, { Component } from "react";
import CardNota from "./cardNota/cardNota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          {Array.of("Trabalho", "Estudos", "Resto").map((categoria, index) => {
            return (
              <li key={index}>
                <div>{categoria}</div>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

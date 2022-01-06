import React, { Component } from "react";
import "./styles.css";
class CardNota extends Component {
  render() {
    return (
      <div className="card-nota">
        <section>
          <header>
            <h3>Título</h3>
          </header>
          <p>Escreva sua nota.</p>
        </section>
      </div>
    );
  }
}

export default CardNota;

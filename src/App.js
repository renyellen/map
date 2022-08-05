import React, { Component } from "react";

export default class App extends Component {
  state = {
    pessoa: [
      { nome: "Renyellen", idade: 25, cidade: "São Paulo" },
      { nome: "Danyellen", idade: 20, cidade: "São Paulo" },
      { nome: "Carlos Eduardo", idade: 21, cidade: "São Paulo" },
      { nome: "Rafael", idade: 40, cidade: "São Paulo" },
      { nome: "Rafaela", idade: 25, cidade: "São Paulo" }
    ]
  };

  render() {
    return (
      <div>
        {this.state.pessoa.map((item) => (
          <p>
            Minha família é composta por :{item.nome}, {item.idade},{" "}
            {item.cidade}
          </p>
        ))}
      </div>
    );
  }
}

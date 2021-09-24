import React from 'react';

export default class Nome extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        nome1:this.props.nome
      }

      // Bind é a definição do que o botao faz
      this.click_botao = this.click_botao.bind(this);
  }
  
  click_botao(){
    // setState muda as informaçoes do state;
    this.setState({ nome1: this.props.apelido })
  }

  
  render() {
    return (
      <div>
        <p> Nome: {this.state.nome1} </p> 
        <button onClick={this.click_botao}>Exibir apelido</button>
        </div>
    )
  }
}
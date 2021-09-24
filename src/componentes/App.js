import React from 'react';
import Nome from './Nomes'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Desafio:</h2>
        <hr/>   
        <h4><Nome nome="Igor" apelido="Igao"/> </h4>   
        <hr/> 
        <h4><Nome nome="José" apelido="Zézinho"/> </h4>
        <hr/>  
        <h4><Nome nome="Loraine" apelido="Lori"/> </h4> 
        <hr/> 
        <h4><Nome nome="Gatinha" apelido="Gatona"/> </h4> 
      </div>
    )
  }
}
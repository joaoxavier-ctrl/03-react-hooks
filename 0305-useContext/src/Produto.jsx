import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  
  function handleClick(){
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      Produto: {global.nome} {global.contar}
      <br />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  )
}

export default Produto;

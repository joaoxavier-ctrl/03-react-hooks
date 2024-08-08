import React from 'react'
import { GlobalContextExercicio } from './GlobalContextExercicio';

const ProdutoExercicio = () => {
    const global = React.useContext(GlobalContextExercicio)
    console.log(global);
    if(global.dados === null) return null;

  return (
    <div>
      Produto: {global.dados[0].nome}
    </div>
  )
}

export default ProdutoExercicio;

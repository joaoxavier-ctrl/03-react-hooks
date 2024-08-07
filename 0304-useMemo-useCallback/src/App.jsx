import React from 'react';

/*function operacaoLenta() {
  let c;
  for(let i = 0; i < 100000000; i++){
    c = i + i / 10;
  }
  return c;
}*/

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  }

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

const App = () => {
  /*const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    console.log('Aconteceu o memo')
    return localItem;
  }, []);*/

  /*const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>*/

  /*const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar+1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>*/
};

export default Produto;

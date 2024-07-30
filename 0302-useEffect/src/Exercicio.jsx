import React from 'react'
import Produtos from './Produtos';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const Exercicio = () => {
  const [produto, setProduto] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal);
  },[]);

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  async function handleClick(event) {
    setProduto(event.target.innerText);
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button style={{ margin: '10px' }} onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />} 
    </div>
  )
}

export default Exercicio;

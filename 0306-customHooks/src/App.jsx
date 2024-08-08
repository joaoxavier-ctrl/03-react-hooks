import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const {request, data, loading, erro} = useFetch();

  React.useEffect(() => {
    async function fetchData(){
      const {response, json} = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      )
    };
    fetchData();
  },[]);

  function handleClick({target}){
    setProduto(target.innerText);
  }

  if(erro) return <p>{erro}</p>
  if(loading) return <div>Carregando...</div>
  if(data) 
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
          ))}
      </div>
    );
    else return null;
}

export default App;

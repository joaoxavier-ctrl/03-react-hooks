import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return ( 
    <GlobalStorage>
      <Produto />
      <div></div>
    </GlobalStorage>
  )
}

export default App;

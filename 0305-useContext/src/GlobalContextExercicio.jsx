import React from 'react'

export const GlobalContextExercicio = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json())
        .then((json) => setDados(json));
    }, [])

  return (
    <GlobalContextExercicio.Provider value={{ dados }}>
        {children}
    </GlobalContextExercicio.Provider>
  )
}

export default GlobalContextExercicio

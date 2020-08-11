import React from 'react';
import Home from './pages/home'
import GlobalStyle from './components/commons.styled'
import Header from './components/Header/index'

function App() {
  return (
    <main className="App">
      <GlobalStyle/>            
      <Header/>
      <Home/>
    </main>
    
  );
}

export default App;

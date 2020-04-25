import React, { useEffect, useState } from 'react';
import {isauth} from './services'
import {Container} from 'react-bootstrap'
import {ContextProvider} from './context/'
import Header from './Components/shared/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes';
function App() {
   const [userAuth,setUserAuth] = useState({})
  useEffect(() => {
    setUserAuth(isauth())
    console.log(userAuth)
  },[])
  return (
    <ContextProvider value={userAuth}>  
    <Header /> 
    <Container>
             <Router>
                 <Routes />
             </Router>        
    </Container>  
      <h1>{JSON.stringify(userAuth)}</h1>
    </ContextProvider>

  );
}

export default App;

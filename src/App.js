import React from 'react';
import {Container} from 'react-bootstrap'
import {AuthProvider} from './context/'
import Header from './Components/shared/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/index';
function App() {
  return (
    <AuthProvider> 
    <Router>  
    <Header /> 
      <Container>
                 <Routes />    
      </Container>  
    </Router> 
    </AuthProvider>

  );
}

export default App;

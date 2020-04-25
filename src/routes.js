import React from 'react';

import{ Switch,Route } from 'react-router-dom'
import LoginPage from './pages/Login'
export default function Routes(){
     return(
         <Switch>
             <Route path="/" exact component={LoginPage} />
         </Switch>
     )
}
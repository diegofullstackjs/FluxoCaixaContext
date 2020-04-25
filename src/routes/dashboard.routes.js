import React from 'react';
import{ Switch,Route } from 'react-router-dom'
import DashboardPage from '../pages/Dashboard'
export default function DashBoardRoutes(){
     return(
         <Switch>
              <Route path="/" exact component={DashboardPage} />
         </Switch>
     )
}
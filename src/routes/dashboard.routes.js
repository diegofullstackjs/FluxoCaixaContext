import React from 'react';
import{ Switch,Route } from 'react-router-dom'
import DashboardPage from '../pages/Dashboard'
import {UserInfoProvider} from '../context/info'
export default function DashBoardRoutes(){
     return(
          <UserInfoProvider>
               <Switch>
                    <Route path="/" exact component={DashboardPage} />
               </Switch>
         </UserInfoProvider>
     )
}
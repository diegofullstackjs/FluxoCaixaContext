import React,{useContext,} from 'react';
import {AuthContext} from '../context/'
import DashBoardRoutes from './dashboard.routes';
import AuthRoutes from './auth.routes';
const AppRoutes = () => {
    const {auth} = useContext(AuthContext);

    return auth? <DashBoardRoutes/> : <AuthRoutes/>
}

export default AppRoutes;
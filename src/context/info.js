import React,{ 
        createContext,
        useEffect,
        useContext,
        useState } from 'react';
import {api} from '../services/'
import {AuthContext} from './index.js'

export const UserInfo = createContext(null)

export const UserInfoProvider = ({children}) =>{
    const {auth} = useContext(AuthContext);
    const [data,setData] = useState({
        dados: []
    })
    const headers = {
        "authorization" :  `Bearer ${auth.token}`
    }
     useEffect(() => {
         setData({
             ...data,
             loading:true
         })
        api.get('/me',{headers}).then((response) => {
            setData({
                ...data,
                dados: response.data,
                loading: false,
            })
        })
    },[])

    return (
        <UserInfo.Provider value={{data}}>
            {children}
        </UserInfo.Provider>
    )
}
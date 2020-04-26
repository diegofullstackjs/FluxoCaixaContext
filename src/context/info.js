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
    const headers = {
        "authorization" :  `Bearer ${auth.token}`
    }
    function loadingData(){
        setData({
            ...data,
            loading:true
        })
        api.get('/',{headers}).then((response) => {
            setData({
                ...data,
                dados: response.data,
                loading: false,
            })
        })
    }
    const [data,setData] = useState({
        dados: []
    })
    const createCategorie = (form) => {
        api.post('/task/categorias/create',form,{headers})
        .then((response) => {
            console.log(response.data)
            if(response.data._id)
            {
                setData({
                    ...data,
                    msg:{
                        type: "success",
                        to: "categorias",
                        message: "Categoria adcionada com sucesso"
                    }
                })
            }
        })
    }


     useEffect(() => {
        loadingData()
    },[])

    return (
        <UserInfo.Provider value={{createCategorie,data}}>
            {children}
        </UserInfo.Provider>
    )
}
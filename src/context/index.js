import React,{createContext,useState,useEffect} from 'react'
import {api,isauth} from '../services/'


export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState(null);

     useEffect(() => {
        let data = isauth();
        setAuth(data)
     },[])
     async function signIn(form){
        const response = await api.post('/user/login',form)
        if(response.data.user){
            const user = response.data.user.email;
            const token = response.data.token;
           setAuth({
                token: token,
                user: user
            })
            localStorage.setItem('token',token)
            localStorage.setItem('user',user)
            localStorage.setItem('last_login',Date.now())
        }

        
    }
    return(
    <AuthContext.Provider value={{signIn,auth}}>
     {children}
    </AuthContext.Provider>
    )
}


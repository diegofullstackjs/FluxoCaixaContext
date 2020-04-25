import React,{createContext} from 'react'


export const Context = createContext({
    logado: false
})

export const ContextProvider = Context.Provider;

import React, {useEffect, useState} from "react";

import userService from '../../service/userService'

export const Context = React.createContext();

export const ContextProvide = ({children}) => {
    const [user, setUser] = useState({username: '', auth: false})
    const loginContext = (name) => {
        setUser({username: name, auth: true})
    }
    const logoutContext = () => {
        setUser({username: '', auth: false})
    }
    useEffect(() => {
        userService.getAccount().then(items => {
            if(items.err !== 0) {
                setUser({username: items.data[0].username, auth: true})
            }
        })
    },[])
    
    return ( 
        <Context.Provider value={{user,loginContext,logoutContext}}>
            {children}
        </Context.Provider>
     );
}
import { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth_context'
import { authApi } from '../../datasources/remote/auth_api';

export const AUTH_KEY = 'isLoggedIn';//para evitar errores humanos

//const delay =(ms) => new Promise((resolve)=>setTimeout(resolve,ms));


export const AuthProvider = ({children})=>{

    const [isLoading,setIsLoading] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState (false);

/*
    const saveLoginState = (state) => {localStorage.setItem(AUTH_KEY, state)};
    const getLoginState = () => localStorage.getItem(AUTH_KEY);
    const removeLoginState = () => localStorage.removeItem(AUTH_KEY);

    Creo un componente AppStorage, para que me sea más fácil migrar a distintos dispositivos que no usen localstorage. Ver /base/ app_storage.js
*/
    
    
    const saveLoginState = (state) => {AppStorage.save(AUTH_KEY, state)};
    const getLoginState = () => {AppStorage.get(AUTH_KEY)};
    const removeLoginState = () => {AppStorage.remove(AUTH_KEY)};
    
    


    useEffect(()=>{
        const initAuth = async () =>{
            try {
                const loginState = getLoginState();
                if(!loginState) return;
                setIsLoggedIn(loginState);
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
                        
        }
        initAuth();
    },[])




    const login = async () => {
        /*Se rompe todo
        //Ahora nos comunicamos con el backend
        const response = await authApi.post('/login',{
            email,
            password,
        }); //la url base ya está definida en authApi solo agrego lo que corresponde a mi login

        console.log(response.data);*/

        setIsLoggedIn(true);
        saveLoginState(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
        removeLoginState();
    };

 

//if(fallback && isLoading) return fallback;

    return (
            <AuthContext.Provider 
                value={{
                isLoggedIn,
                login,
                logout,
            }}>
                {children}
            </AuthContext.Provider>
            );

};

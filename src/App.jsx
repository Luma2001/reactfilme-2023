import React, { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './core/routers/app_router'
import RootProvider from './core/providers/root_provider';
import axios from 'axios';


//
const App = () => {

const[data,setData] = useState([]);


const getUsers = async () => {
    const response = await jsonPlaceHolderApi.get("/users");

    setData(response.data);
};

/*
useEffect(()=>{
   getUsers();
},[]);

 */


  return (
    <>
        {/*<div>
            <h1>USERS</h1>
        
            <button onClick={()=>{getUsers();}}>Lista de Usuarios</button>
        </div>
          
          {data.map((user) => (
                              <div key={user?.id}>{user.name}</div>
                              ))
          }
      */}
      
    <RootProvider>
    
            <RouterProvider router={appRouter} />
            
    </RootProvider>
  
   
     
    </>
    
  );
};

export default App;


/*
const jsonPlaceHolderApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000, //si pasa este tiempo y el backend no respondió da por fallada la petición
});
*/
/*
//Aplicando interceptores
useEffect(()=>{

  //ocurre antes de enviar la solicitud al servidor
  axios.interceptors.request.use(
          async (config)=>{
              
              console.log("REQUEST", config);
              return config;
          },
          (error) => {
              return Promise.reject(error);
          }
  );


//una vez que el servidor nos respondió
  axios.interceptors.response.use(
      (response)=> {
        return response;
      },
      async (error) => {
          
          return Promise.reject(error);
      }
      
  );

},[])
*/
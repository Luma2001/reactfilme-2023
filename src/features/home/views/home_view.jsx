import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import axios from 'axios';
import Carrusel from '../../../core/components/carrusel/carrusel';


const HomeView = () => {

  const { logout, isLoggedIn } = useAuth();

  console.log("estado ", isLoggedIn);

  
  
  return (

    <>
    <div>
          <h1>HORAS DE ENTRETENIMIENTO</h1>

          <button onClick={logout}>Cerrar Sesión</button>
    </div>

    <Carrusel />

    </>
  )
}

export default HomeView
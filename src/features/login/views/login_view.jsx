import React, { useState } from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../../core/components/button/app_button';


const LoginView = () => {
    const {login, isLoggedIn} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) =>{
      e.preventDefault();

      setIsLoading(true);
      
    try {
      const form = e.target; //e es el evento. El target es quien dispara el evento. Acá es el formulario. Me sirve para obtener una referencia al formulario
      const formData = new FormData(form);//para poder manejar toda la info que tiene el formulario
      const {email, password} =Object.fromEntries(formData);//me presenta todos los campos con su info, en un objeto con formato clave valor. Desestructuro esta info para obtener el valor de cada campo
      
      /* Se puede hacer en una sola linea
      const {email, password} = Object.fromEntries(new FormData(e.target));
      */
      form.reset();
      console.log(email, password);
      await login(email,password);

    } catch (error) {
        setError(error);
      
    }  finally{
      setIsLoading(false);
    }
    
    };//fin handleSubmit


console.log("estado ", isLoggedIn);

  return (

    <div >
      

        <h1>ReactivosFilms</h1>
        <h2>Disfruta las mejores películas online</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" name='email' placeholder='email'/>
          <input type="password" name='password' placeholder='password'/>
          <AppButton type='submit' ><h2>Iniciar sesión</h2></AppButton>
        </form>
      
        
    </div>
  )
}

export default LoginView
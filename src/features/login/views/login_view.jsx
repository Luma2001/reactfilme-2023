import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const LoginView = () => {
    const {login, isLoggedIn} = useAuth();

    const handleSubmit = (e) =>{
      e.preventDefault();

      
    const form = e.target; //e es el evento. El target es quien dispara el evento. Acá es el formulario. Me sirve para obtener una referencia al formulario
    const formData = new FormData(form);//para poder manejar toda la info que tiene el formulario
    const {email, password} =Object.fromEntries(formData);//me presenta todos los campos con su info, en un objeto con formato clave valor. Desestructuro esta info para obtener el valor de cada campo
    
    /* Se puede hacer en una sola linea
    const {email, password} = Object.fromEntries(new FormData(e.target));
    */
    console.log(email, password);
    login(email,password);

    }


console.log("estado ", isLoggedIn);

  return (

    <div><h1>ReactFilms</h1>

    <form onSubmit={handleSubmit}>
      <input type="email" name='email' placeholder='email'/>
      <input type="password" name='password' placeholder='password'/>
      <button type='submit'><h2>Iniciar sesión</h2></button>
    </form>

        
    </div>
  )
}

export default LoginView
import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../../features/home/views/home_view';
import LoginView from '../../features/login/views/login_view';
import PrivateRoute from '../auth/components/private_route';
import PublicRoute from '../auth/components/public_route';


//createBrowserRouter es la fc que le indica que utilice una 
//librería nativa como navegador. Recibe un arreglo de rutas

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element: (
                    <PrivateRoute>
                        <HomeView />
                    </PrivateRoute>
                ),
        //Component: HomeView,
    },
    {
        path:"/login",
        element:(
                    <PublicRoute>
                        <LoginView />
                    </PublicRoute>
                ),
        
        //Component: LoginView,
    },

    //manejando status 404: no es realmente un 404. Lo estamos simulando
    {
        path:"*",
        element: <div><h1>Lo sentimos mucho, no se encontró la página</h1></div>
    },


]);
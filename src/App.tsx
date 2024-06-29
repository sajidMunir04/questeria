import './App.css'
import 'tailwindcss/tailwind.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
      path: '/',
      element: <MainPage/>
  },
  {
      path: '/formPage',
      element: <FormPage/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

function App() {
  return (<>
  <RouterProvider router={router}/>
  </>);
}


export default App;

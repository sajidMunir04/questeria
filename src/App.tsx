import './App.css'
import 'tailwindcss/tailwind.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';

const router = createBrowserRouter([
  {
      path: '/',
      element: <MainPage/>
  },
  {
      path: '/formPage',
      element: <FormPage/>
  }
])

function App() {
  return (<>
  <RouterProvider router={router}/>
  </>);
}


export default App;

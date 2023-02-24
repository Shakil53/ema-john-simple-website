

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main';
import Order from './components/Order/Order';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }


      ]
    }

  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

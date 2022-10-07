import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import productsAndCartLoaders from './loaders/productsAndCartLoaders'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main />, children: [
      {path: '/', element: <Shop />, loader: productsAndCartLoaders},
      {path: 'orders', element: <Orders />, loader: productsAndCartLoaders},
      {path: 'inventory', element: <Inventory />},
    ]}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

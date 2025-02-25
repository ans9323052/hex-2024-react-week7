import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';


function App() {

  const [isAuth, setIsAuth] = useState(false); //是否是可以使用的權限

  return (
    <>
      {isAuth ?
        (<ProductPage setIsAuth={setIsAuth} />) :
        (<LoginPage setIsAuth={setIsAuth} />)}



    </>
  )
}
export default App

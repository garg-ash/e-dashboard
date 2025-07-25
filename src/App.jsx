
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import PrivateComponents from './Components/PrivateComponents'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import ProductList from './Components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element = {<PrivateComponents />}>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update' element={<h1>This is a product update page</h1>}/>
      <Route path='/logout' element={<h1>This is a Log Out page</h1>}/>
      <Route path='/profile' element={<h1>This is a profile page</h1>}/>
      </Route>

      <Route path='/signup' element = {<Signup />}/>
      <Route path='/login' element = {<Login />} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App

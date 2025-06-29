
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import PrivateComponents from './Components/PrivateComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element = {<PrivateComponents />}>
      <Route path='/' element={<h1>This is a product page</h1>}/>
      <Route path='/add' element={<h1>This is a product Add page</h1>}/>
      <Route path='/update' element={<h1>This is a product update page</h1>}/>
      <Route path='/logout' element={<h1>This is a Log Out page</h1>}/>
      <Route path='/profile' element={<h1>This is a profile page</h1>}/>
      </Route>

      <Route path='/signup' element = {<Signup />}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App

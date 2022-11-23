import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ReadAll from './components/ReadAll/ReadAll'
import Create from './components/Create/Create'



function App() {
  return (
    <div className="App">
      <Header/>

      <div className='content'>
      
        <Routes>
          <Route path='/'element={<ReadAll/>}/>
          <Route path='/create'element={<Create/>}/>
        </Routes>
      
      </div>
      <Footer/>
    </div>
  )
}

export default App

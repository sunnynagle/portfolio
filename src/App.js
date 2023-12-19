
import './App.css';
import {Routes, Route} from 'react-router-dom';

import About from './container/About';
import Home from './container/Home';
import Contenct from './container/contenct';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import Navbar from './components/navBar'
function App() {
  return (
    <div className="App">
    {/* paricles js*/}


    {/* navbar*/}
    <Navbar/>



    {/* main page content*/}
    <Routes>
      <Route index path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contenct' element={<Contenct/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>

    </Routes>
     
    </div>
  );
}

export default App;

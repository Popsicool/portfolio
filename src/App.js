import './App.css';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Frontend } from './pages/Frontend';
import { Backend } from './pages/Backend';
import { Devops } from './pages/Devops';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { NotFound } from './pages/NotFound';
import { Blog } from './pages/Blog';

function App() {
  return (
    <div className='App'>
      <ToastContainer limit={1}/>
      <Layout>
        <Routes>
          <Route path='/' exact="true" element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/blog' element= {<Blog/>}/>
          <Route path='/frontend' element= {<Frontend/>}/>
          <Route path='/backend' element= {<Backend/>}/>
          <Route path='/devops' element= {<Devops/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path= "*" element={<NotFound/>} />
        </Routes>
      </Layout>
      </div>
  )
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Models from './routes/Models';
import Testimonies from './routes/Testimonies';
import Infos from './routes/Infos';
import Project from './routes/Project';
import NoRoute from './routes/NoRoute';

export default function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="ample" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="models" element ={<Models/>}/>
              <Route path="testimonies" element ={<Testimonies/>}/>
              <Route path="infos" element ={<Infos/>}/>
              <Route path="project" element ={<Project/>}/>
              <Route path="*" element={<NoRoute />}/>
          </Route>
      </Routes>
    </div>
  );
};

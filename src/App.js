import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import Models from './routes/Models';
import Testimonies from './routes/Testimonies';
import Infos from './routes/Infos';
import Project from './routes/Project';
import Rabi from './routes/models/Rabi';
import Melissa from './routes/models/Melissa';
import Loic from './routes/models/Loic';
import Cassandra from './routes/models/Cassandra';
import Adeline from './routes/models/Adeline';
import Emma from './routes/models/Emma';
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
              <Route path="models/Rabi" element={<Rabi/>}/>
              <Route path="models/Melissa" element ={<Melissa/>}/>
              <Route path="models/Loic" element ={<Loic/>}/>
              <Route path="models/Cassandra" element ={<Cassandra/>}/>
              <Route path="models/Adeline" element ={<Adeline/>}/>
              <Route path="models/Emma" element={<Emma />}/>
              <Route path="*" element={<NoRoute />}/>
          </Route>
      </Routes>
    </div>
  );
};

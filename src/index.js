import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="ample" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="models" element ={<Models/>}/>
              <Route path="testimonies" element ={<Testimonies/>}/>
              <Route path="infos" element ={<Infos/>}/>
              <Route path="project" element ={<Project/>}/>
              <Route path="Rabi" element={<Rabi/>}/>
              <Route path="Melissa" element ={<Melissa/>}/>
              <Route path="Loic" element ={<Loic/>}/>
              <Route path="Cassandra" element ={<Cassandra/>}/>
              <Route path="Adeline" element ={<Adeline/>}/>
              <Route path="Emma" element={<Emma />}/>
              <Route path="*" element={<NoRoute />}/>
          </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
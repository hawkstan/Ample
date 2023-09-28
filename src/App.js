import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import NoRoute from './routes/NoRoute';

function App() {
  return (
    <div className="App">
      {/* <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<NoRoute />} />
          </Route>
      </Routes> */}
      <h1>UwU</h1>
    </div>
  );
}

export default App;

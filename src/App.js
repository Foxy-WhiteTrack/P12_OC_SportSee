import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profil from './pages/Profil/Profil';
import Setting from './pages/Setting/Setting';
import Community from './pages/Community/Community';

import Error404 from './pages/Error404/Error404';

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profil/:id" element={<Profil />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
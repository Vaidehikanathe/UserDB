import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Events from './Events';
import Categories from './Categories';
import Campaigns from './Campaigns';
import Help from './Help';
import Reports from './Reports';
import './App.css';
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <Routes>
          {/* <Route path="/events" component={Events} />
          <Route path="/categories" component={Categories} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/help" component={Help} />
          <Route path="/reports" component={Reports} /> */}
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/Campaigns" element={<Campaigns />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

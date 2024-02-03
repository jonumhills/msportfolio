import React from 'react';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './components/Banner';
import  { Projects } from './components/Projects';
import { Contact } from './components/Contact';
export default function App() {
  return (
    <>
    <div className="App">
       <NavBar/>
       <Banner/>
       <Projects/>
       <Contact/>
       </div>

    </>
  );
}
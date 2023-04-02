import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Header = lazy(() => import('./Header'));
const NavBar = lazy(() => import('./NavBar'));
const Slider = lazy(() => import('./Slider'));
const Footer = lazy(() => import('./Footer'));
const MainSection = lazy(() => import('./MainSection'));
const Category = lazy(() => import('./Category'));
const Category2 = lazy(() => import('./Category2'));
const Offer = lazy(() => import('./Offer'));
// import NavBar from './NavBar';
// import Slider from './Slider';
// import Footer from './Footer';
// import MainSection from './MainSection';
// import Category from './Category';
// import Category2 from './Category2';
// import Offer from './Offer';


export default function App() {


  return (

    <div className="app">
      <div className='sticky-top'>
        <Header />
        <NavBar />
      </div>
      <Slider />
      <Category />
      <Suspense>
        <MainSection />
      </Suspense>
      <Suspense>
        <Category2 />
        <Offer />
        <Footer />
      </Suspense>
    </div>
  );
}
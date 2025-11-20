import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RecipesPage from './components/RecipesPage';
import SideBar from './components/SideBar';
import Footer from './components/Footer';


import { useState } from 'react';

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  
  function toggleSideBar() {
    setOpenSideBar(!openSideBar);
  }
  
  let content;

  if(activePage === 'Home') {
    content = <HomePage selectPage={setActivePage} />;
  } else if(activePage === 'About') {
    content = <AboutPage />;
  } else if (activePage === 'Recipes') {
    content = <RecipesPage />;
  }

  return (
    <>
      <Header 
        toggleSideBar={toggleSideBar}
        selectPage={setActivePage} 
      />
      {openSideBar ? <SideBar 
        selectPage={setActivePage}
      /> : null}
      {content}
      <Footer />
    </>
  )
}

export default App

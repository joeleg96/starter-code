import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RecipesPage from './components/RecipesPage';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import RecipeDetailsPage from './components/RecipeDetailsPage';

import { useState } from 'react';


function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  
  function toggleSideBar() {
    setOpenSideBar(!openSideBar);
  }

  function handleSelectedRecipe(id) {
    setSelectedRecipe(id-1);
  }
  
  let content;

  if(activePage === 'Home') {
    content = <HomePage selectPage={setActivePage} />;
  } else if(activePage === 'About') {
    content = <AboutPage />;
  } else if (activePage === 'Recipes') {
    content = <RecipesPage selectPage={setActivePage} selectRecipe={handleSelectedRecipe} />;
  } else if (activePage === 'Details') {
    content = <RecipeDetailsPage selectPage={setActivePage} chosenRecipe={selectedRecipe} selectRecipe={handleSelectedRecipe} />;
  }

  return (
    <>
      <Header 
        toggleSideBar={toggleSideBar}
        selectPage={setActivePage} 
      />
      {openSideBar ? <SideBar 
        selectPage={setActivePage}
        toggleSideBar={toggleSideBar}
      /> : null}
      {content}
      <Footer />
    </>
  )
}

export default App

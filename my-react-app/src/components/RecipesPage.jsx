import RecipeHero from "./RecipeHero";
import RecipeFiltersSection from "./RecipeFiltersSection";
import Recipes from "./Recipes";
import { useState, useRef } from 'react';

export default function RecipesPage({selectPage, selectRecipe}) {
       
    const searchRef = useRef();
    const [search, setSearch] = useState('');
    const updateSearch = () => {
        setSearch(searchRef.current.value);
        console.log(searchRef.current.value);
    };

    return <main className='max-w-350 mx-auto'>
        <RecipeHero />
        <RecipeFiltersSection 
            ref={searchRef}
            updateSearch={updateSearch}
        />
        <Recipes 
            selectPage={selectPage}
            selectRecipe={selectRecipe}
            search={search}
        />
    </main>
}
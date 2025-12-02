import RecipeFilterButton from "./RecipeFilterButton";
import SearchBar from "./SearchBar";
import PrepTime from "./PrepTime";
import CookTime from "./CookTime";
import { useState } from 'react';

export default function RecipeFiltersSection({ref, updateSearch}) {
    const [filters, setFilters] = useState({
        prepTime: false,
        cookTime: false
    });

    const toggleFilters = (filterName)=> {
        setFilters((prev) =>({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    }

    return <section className='md:grid md:grid-cols-3 md:w-200 mx-auto md:pr-10 lg:px-0'>
        <div className='relative w-100 md:w-50 lg:w-60 mx-auto'>
           <RecipeFilterButton 
                onClick={()=>toggleFilters("prepTime")}
                >Max Prep Time
            </RecipeFilterButton> 
            {filters.prepTime && <PrepTime />}
        </div>
        
        <div className='relative w-100 md:w-50 lg:w-60 mx-auto'>
            <RecipeFilterButton 
                onClick={()=>toggleFilters("cookTime")}
                >Max Cook Time
            </RecipeFilterButton>
            {filters.cookTime && <CookTime />}
        </div>
        
        <SearchBar ref={ref} updateSearch={updateSearch} />
    </section>
}
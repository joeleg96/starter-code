import RecipeFilterButton from "./RecipeFilterButton";
import SearchBar from "./SearchBar";

export default function RecipeFiltersSection() {
    return <section className='md:grid md:grid-cols-3 md:w-200 mx-auto'>
        <RecipeFilterButton>Max Prep Time</RecipeFilterButton>
        <RecipeFilterButton>Max Cook Time</RecipeFilterButton>
        <SearchBar />
    </section>
}
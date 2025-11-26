import Feature from './Feature';
import WholeFoodRecipesImg from '../../public/images/icon-whole-food-recipes.svg';
import MinimumFussImg from '../../public/images/icon-minimum-fuss.svg';
import SearchInSecondsImg from '../../public/images/icon-search-in-seconds.svg';

export default function FeaturesSection() {
    return <section className='mt-14 text-[#163A34] w-[95%] mx-auto'>
        <h2 className='text-5xl font-extrabold mb-8 lg:text-center'>What you'll get</h2>
        <div className='lg:flex lg:justify-center lg:gap-8'>
          <Feature 
            img={WholeFoodRecipesImg}
            title="Whole-food recipes"
            description="Each dish uses everyday, unprocessed ingredients."
            />
            <Feature 
            img={MinimumFussImg}
            title="Minimum fuss"
            description="All recipes are designed to make eating healthy quick and easy."
            />
            <Feature 
            img={SearchInSecondsImg}
            title="Search in seconds"
            description="Filter by name or ingredient and jump straight to the recipe you need."
            />  
        </div>
        
        
    </section>
}
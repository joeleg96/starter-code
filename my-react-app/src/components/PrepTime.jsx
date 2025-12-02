import RadioInput from "./RadioInput"
import RadioLabel from "./RadioLabel"
import ClearButton from "./ClearButton"

export default function PrepTime() {
    return <section className='w-100 md:w-50 lg:w-60 bg-white border border-[#E0E6E3] rounded-xl p-2 mt-2'>
        <form className='flex flex-col gap-4 ml-1 mb-2'>
                <RadioLabel>
                    <RadioInput />0 minutes
                </RadioLabel> 
                
                <RadioLabel>
                    <RadioInput />5 minutes
                </RadioLabel>
                          
                <RadioLabel>
                    <RadioInput />10 minutes
                </RadioLabel>  
        </form>
        <ClearButton />
    </section>
}
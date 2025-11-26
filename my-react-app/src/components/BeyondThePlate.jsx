import P from "./P";
import BeyondImg from '../../public/images/image-about-beyond-the-plate-large.webp';

export default function BeyondThePlate() {
    return <section className='mt-12'>
        <hr className='w-full border-[#E0E6E3] mb-12'></hr>
        <div className='w-[95%] mx-auto lg:flex lg:gap-8'>
            <div>
                <h2 className='text-6xl text-[#163A34] font-bold lg:mt-6'>Beyond the plate</h2>
                <P>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</P>
                <ol className='w-[90%] mx-auto list-disc marker:text-red -mt-4'>
                    <li><p className='text-xl text-[#163A34] my-2'>Encourage family dinners and social cooking.</p></li>
                    <li><p className='text-xl text-[#163A34] my-2'>Reduce reliance on single-use packaging and delivery waste.</p></li>
                    <li><p className='text-xl text-[#163A34] my-2'>Spark curiosity about seasonal produce and local agriculture.</p></li>
                </ol>
            </div>
            <img className='rounded-xl my-8 lg:min-w-145 mx-auto' src={BeyondImg} />
        </div>
    </section>
}
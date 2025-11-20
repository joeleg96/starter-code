export default function Feature({ img, title, description }) {
    return <section>
        <div className="bg-white w-14 h-14 flex justify-center items-center rounded-xl border border-[#E0E6E3] mb-4">
          <img src={img} />  
        </div>
        <h3 className='text-[#163A34] text-3xl font-semibold mb-2'>{title}</h3>
        <p className='text-xl mb-10'>{description}</p>
    </section>
}
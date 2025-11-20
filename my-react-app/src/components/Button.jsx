export default function Button({ children, ...props }) {
    return <button className='w-full bg-[#163A34] text-[#FFFFFF] px-6 py-4 rounded-xl font-semibold hover:cursor-pointer' {...props}>{children}</button>
}
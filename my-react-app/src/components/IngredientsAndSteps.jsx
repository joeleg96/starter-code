import Arrow from '../assets/images/arrow-right.svg'
export default function IngredientsAndSteps({text}) {
    return <section>
        <img src={Arrow} />
        <p>{text}</p>
    </section>
}
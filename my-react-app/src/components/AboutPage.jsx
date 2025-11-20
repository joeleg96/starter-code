import OurMission from "./OurMission";
import WhyWeExist from "./WhyWeExist";
import OurPhilosophy from "./OurPhilosophy";
import BeyondThePlate from "./BeyondThePlate";
import CallToAction from "./CallToAction";

export default function AboutPage() {
    return <main className='max-w-350 mx-auto'>
        <OurMission />
        <WhyWeExist />
        <OurPhilosophy />
        <BeyondThePlate />
        <CallToAction />
    </main>
}
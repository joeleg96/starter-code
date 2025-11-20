import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import RealLifeSection from './RealLifeSection';
import CallToAction from './CallToAction';

export default function HomePage({selectPage}) {
    return <main className='max-w-350 mx-auto'>
      <Hero selectPage={selectPage} />
      <FeaturesSection />
      <RealLifeSection />
      <CallToAction selectPage={selectPage} />
    </main>
}
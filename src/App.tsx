import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Office } from './components/Office';
import { Trust } from './components/Trust';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#18212B]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#C99A38] focus:text-[#07182B] focus:font-semibold focus:text-sm"
        >
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal" className="flex-1">
          <Hero />
          <About />
          <Services />
          <Differentials />
          <Office />
          <Trust />
          <FAQ />
          <Contact />
        </main>

        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
        <WhatsAppButton />
        <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      </div>
    </MotionConfig>
  );
}

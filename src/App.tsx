import SnowEffect from './components/SnowEffect';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-sans text-white">
      <SnowEffect />

      <main className="relative z-10">
        <Hero />
        <Lore />
        <Tokenomics />
        <HowToBuy />
      </main>
      <Footer />
    </div>
  );
}

export default App;

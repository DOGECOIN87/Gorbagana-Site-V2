import { useState } from 'react';
import { Copy, Check, ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../lib/constants';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function Home() {
  const [copiedRpc, setCopiedRpc] = useState(false);

  const copyRpc = () => {
    navigator.clipboard.writeText("https://rpc.gorbagana.wtf");
    setCopiedRpc(true);
    setTimeout(() => setCopiedRpc(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gorb-bg text-gorb font-sans selection:bg-gorb selection:text-gorb-bg overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-sm md:text-base text-gorb-text font-bold tracking-widest uppercase mb-6">
          High-performance L1 chain forked from Solana
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase mb-10 max-w-5xl text-gorb">
          One dev's trash is another dev's treasure! But this... this is ALL TRASH!
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto">
          <a href="#join-gang" className="rounded-full w-full sm:w-auto px-8 py-4 bg-gorb text-gorb-bg font-display text-2xl uppercase tracking-wider hover:bg-gorb-text transition-colors">
            Join gang
          </a>
          <a href="https://docs.gorbagana.wtf/" target="_blank" rel="noreferrer" className="rounded-full w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gorb text-gorb font-display text-2xl uppercase tracking-wider hover:bg-gorb hover:text-gorb-bg transition-colors">
            Trash manual
          </a>
        </div>

        <div className="w-full max-w-5xl relative mt-10">
           <motion.div
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           >
              <img src={ASSETS.mascot} alt="Gorbagana Mascot in Trash" className="w-full max-w-2xl mx-auto drop-shadow-2xl" />
           </motion.div>
        </div>
      </section>

      {/* Explore Grid Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-gorb/10 border border-gorb/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-gorb/30 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-gorb-text font-bold uppercase tracking-widest text-sm mb-2">Powered by</p>
                  <h3 className="font-display text-4xl md:text-5xl uppercase text-gorb">$GOR</h3>
                </div>
                <a href="https://jup.ag/swap/GOR-USDC" target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 border border-gorb text-gorb text-xs font-bold uppercase tracking-widest hover:bg-gorb hover:text-gorb-bg transition-colors">
                  Trade on Jup
                </a>
              </div>
              <p className="text-gorb-text text-lg leading-relaxed max-w-sm">
                Initially started from a series of tweets, to now powering a high-performance L1 chain, used as gas fee.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <img src={ASSETS.cookie} alt="Cookie" className="w-24 h-24 object-contain group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>

          <div className="bg-gorb rounded-3xl p-8 flex items-center justify-center min-h-[300px]">
             <h1 className="font-display text-6xl md:text-8xl text-center text-gorb-bg uppercase leading-none break-words">
               THE<br/>TRASH<br/>CHAIN
             </h1>
          </div>

          <div className="bg-gorb/10 border border-gorb/10 rounded-3xl p-8 flex flex-col hover:border-gorb/30 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gorb-text font-bold uppercase tracking-widest text-sm mb-2">Forked from</p>
                <h3 className="font-display text-4xl md:text-5xl uppercase text-gorb">SOLANA</h3>
              </div>
            </div>
            <p className="text-gorb-text text-lg leading-relaxed">
              We took Solana's speed, stripped out everything that wasn't pure degen energy, and rebuilt it for the culture. No corporate hype - just raw garbage infrastructure that hits different.
            </p>
          </div>

          <div className="bg-gorb/10 border border-gorb/10 rounded-3xl p-8 flex flex-col hover:border-gorb/30 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gorb-text font-bold uppercase tracking-widest text-sm mb-2">Created for</p>
                <h3 className="font-display text-4xl md:text-5xl uppercase text-gorb">Degens</h3>
              </div>
            </div>
            <p className="text-gorb-text text-lg leading-relaxed">
              Lightning-fast execution with anti-snipe protection so you actually get your entry price. No more watching bots feast while you're stuck in pending hell.
            </p>
          </div>

        </div>
      </section>

      {/* What is Gorbagana */}
      <section id="what-is-gor" className="py-24 px-4 md:px-8 border-t border-gorb/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-center mb-16 text-gorb">What is Gorbagana?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gorb/10 rounded-3xl border-l-4 border-gorb">
              <h3 className="font-display text-3xl uppercase mb-4 text-gorb">Millisecond Finality</h3>
              <p className="text-gorb-text text-lg">Your trade confirms before you can even doubt yourself. When the dumpster door opens, your trash is already in.</p>
            </div>
            <div className="p-8 bg-gorb/10 rounded-3xl border-l-4 border-gorb">
              <h3 className="font-display text-3xl uppercase mb-4 text-gorb">Degen Native Apps</h3>
              <p className="text-gorb-text text-lg">This chain isn't for corporate dashboards. It's for launchpads, prediction markets, and whatever degens dream up at 3 a.m.</p>
            </div>
            <div className="p-8 bg-gorb/10 rounded-3xl border-l-4 border-gorb">
              <h3 className="font-display text-3xl uppercase mb-4 text-gorb">Chaotic Infrastructure</h3>
              <p className="text-gorb-text text-lg">Runs on weird experiments, half-finished ideas, and meme-powered chaos. Innovation happens when you throw things in the bin.</p>
            </div>
            <div className="p-8 bg-gorb/10 rounded-3xl border-l-4 border-gorb">
              <h3 className="font-display text-3xl uppercase mb-4 text-gorb">Memes as a Service</h3>
              <p className="text-gorb-text text-lg">Not just JPEGs - they're the economic backbone of the only economy that makes sense anymore. Trash has never been this valuable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build on Gor */}
      <section id="build-on-gor" className="py-24 px-4 md:px-8 bg-gorb text-gorb-bg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-none">
              Build on gor.<br/>WE ARE WAITING FOR YOU.
            </h2>
            
            <div className="space-y-4 mt-8">
              <p className="font-bold uppercase tracking-widest text-gorb-bg/70 mb-4 text-sm">Dev Arsenal</p>
              
              <a href="https://docs.gorbagana.wtf/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 rounded-3xl border-2 border-gorb-bg hover:bg-gorb-bg hover:text-gorb transition-colors group">
                <div className="flex items-center gap-4">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                  <span className="font-display text-2xl uppercase tracking-widest">Read the Docs</span>
                </div>
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </a>

              <a href="https://calendly.com/sarv_gor/30min" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 rounded-3xl border-2 border-gorb-bg hover:bg-gorb-bg hover:text-gorb transition-colors group">
                <div className="flex items-center gap-4">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                  <span className="font-display text-2xl uppercase tracking-widest">Book a Slot</span>
                </div>
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </a>
            </div>

            <div className="mt-12">
              <p className="font-bold uppercase tracking-widest text-gorb-bg/70 mb-4 text-sm">Bootstrap</p>
              <div 
                onClick={copyRpc}
                className="flex items-center justify-between p-4 rounded-3xl bg-gorb-bg border-2 border-gorb-bg text-gorb cursor-pointer hover:bg-opacity-80 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="bg-gorb text-gorb-bg text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block w-fit">RPC Endpoint</span>
                  <span className="font-sans font-medium text-sm sm:text-base break-all">https://rpc.gorbagana.wtf</span>
                </div>
                {copiedRpc ? <Check className="w-5 h-5 text-gorb shrink-0 ml-4" /> : <Copy className="w-5 h-5 text-gorb shrink-0 ml-4" />}
              </div>
            </div>

          </div>
          <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
             <div className="absolute inset-0 bg-gorb-bg/10 blur-3xl rounded-full scale-75"></div>
             <img src={ASSETS.mascot} alt="Gorbagana Building" className="w-full max-w-md relative z-10 drop-shadow-2xl transform rotate-3" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

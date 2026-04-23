import { useState, useEffect } from 'react';
import { Copy, Check, Twitter, Send, ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

// Use same assets but adapt to the user's instruction
// Since we don't have direct URLs to the user's uploaded image files, 
// I'll keep the assets object layout but user can swap the URLs if needed.
// Actually, earlier you provided URLs for generativeai-downloads. I'll stick to a blue/cyan theme to match the images.
const ASSETS = {
  mascot: "https://storage.googleapis.com/generativeai-downloads/images/5dhl1f3t72t5.png", // The trash can monster
  logo: "https://storage.googleapis.com/generativeai-downloads/images/g22swb9wte5s.png", // GORBAGANA logo
  cookie: "https://storage.googleapis.com/generativeai-downloads/images/zuxl0p9oeg3i.png" // Cookie
}

export default function App() {
  const [copiedRpc, setCopiedRpc] = useState(false);

  const copyRpc = () => {
    navigator.clipboard.writeText("https://rpc.gorbagana.wtf");
    setCopiedRpc(true);
    setTimeout(() => setCopiedRpc(false), 2000);
  };

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="text-sm font-semibold uppercase tracking-widest text-[#86A76A] hover:text-white transition-colors">
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white font-sans selection:bg-[#86A76A] selection:text-[#0c0c0e] overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 bg-[#0c0c0e]/80 backdrop-blur-md border-b justify-center flex border-white/10">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img src={ASSETS.logo} alt="Gorbagana" className="h-6 sm:h-8 object-contain group-hover:scale-105 transition-transform" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#what-is-gor">What is Gorbagana</NavLink>
            <NavLink href="#build-on-gor">Build on GOR</NavLink>
            <NavLink href="#join-gang">Join gang</NavLink>
            <a href="https://docs.gorbagana.wtf/" target="_blank" rel="noreferrer" className="text-sm font-semibold uppercase tracking-widest text-[#86A76A] hover:text-white transition-colors">
              Docs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-sm md:text-base text-[#86A76A] font-bold tracking-widest uppercase mb-6">
          High-performance L1 chain forked from Solana
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase mb-10 max-w-5xl">
          One dev's trash is another dev's treasure! But this... this is ALL TRASH!
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <a href="#join-gang" className="w-full sm:w-auto px-8 py-4 bg-[#86A76A] text-[#0c0c0e] font-display text-2xl uppercase tracking-wider hover:bg-white transition-colors">
            Join gang
          </a>
          <a href="https://docs.gorbagana.wtf/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#86A76A] text-[#86A76A] font-display text-2xl uppercase tracking-wider hover:bg-[#86A76A] hover:text-[#0c0c0e] transition-colors">
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
          
          <div className="bg-[#151518] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#86A76A]/50 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[#86A76A] font-bold uppercase tracking-widest text-sm mb-2">Powered by</p>
                  <h3 className="font-display text-4xl md:text-5xl uppercase">$GOR</h3>
                </div>
                <a href="https://jup.ag/swap/GOR-USDC" target="_blank" rel="noreferrer" className="px-4 py-2 border border-[#86A76A] text-[#86A76A] text-xs font-bold uppercase tracking-widest hover:bg-[#86A76A] hover:text-[#0c0c0e] transition-colors">
                  Trade on Jup
                </a>
              </div>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                Initially started from a series of tweets, to now powering a high-performance L1 chain, used as gas fee.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <img src={ASSETS.cookie} alt="Cookie" className="w-24 h-24 object-contain group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>

          <div className="bg-[#86A76A] p-8 flex items-center justify-center min-h-[300px]">
             <h1 className="font-display text-6xl md:text-8xl text-center text-[#0c0c0e] uppercase leading-none break-words">
               THE<br/>TRASH<br/>CHAIN
             </h1>
          </div>

          <div className="bg-[#151518] border border-white/10 p-8 flex flex-col hover:border-[#86A76A]/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[#86A76A] font-bold uppercase tracking-widest text-sm mb-2">Forked from</p>
                <h3 className="font-display text-4xl md:text-5xl uppercase">SOLANA</h3>
              </div>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              We took Solana's speed, stripped out everything that wasn't pure degen energy, and rebuilt it for the culture. No corporate hype - just raw garbage infrastructure that hits different.
            </p>
          </div>

          <div className="bg-[#151518] border border-white/10 p-8 flex flex-col hover:border-[#86A76A]/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[#86A76A] font-bold uppercase tracking-widest text-sm mb-2">Created for</p>
                <h3 className="font-display text-4xl md:text-5xl uppercase">Degens</h3>
              </div>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              Lightning-fast execution with anti-snipe protection so you actually get your entry price. No more watching bots feast while you're stuck in pending hell.
            </p>
          </div>

        </div>
      </section>

      {/* What is Gorbagana */}
      <section id="what-is-gor" className="py-24 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-center mb-16">What is Gorbagana?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#151518] border-l-4 border-[#86A76A]">
              <h3 className="font-display text-3xl uppercase mb-4">Millisecond Finality</h3>
              <p className="text-white/60 text-lg">Your trade confirms before you can even doubt yourself. When the dumpster door opens, your trash is already in.</p>
            </div>
            <div className="p-8 bg-[#151518] border-l-4 border-[#86A76A]">
              <h3 className="font-display text-3xl uppercase mb-4">Degen Native Apps</h3>
              <p className="text-white/60 text-lg">This chain isn't for corporate dashboards. It's for launchpads, prediction markets, and whatever degens dream up at 3 a.m.</p>
            </div>
            <div className="p-8 bg-[#151518] border-l-4 border-[#86A76A]">
              <h3 className="font-display text-3xl uppercase mb-4">Chaotic Infrastructure</h3>
              <p className="text-white/60 text-lg">Runs on weird experiments, half-finished ideas, and meme-powered chaos. Innovation happens when you throw things in the bin.</p>
            </div>
            <div className="p-8 bg-[#151518] border-l-4 border-[#86A76A]">
              <h3 className="font-display text-3xl uppercase mb-4">Memes as a Service</h3>
              <p className="text-white/60 text-lg">Not just JPEGs - they're the economic backbone of the only economy that makes sense anymore. Trash has never been this valuable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build on Gor */}
      <section id="build-on-gor" className="py-24 px-4 md:px-8 bg-[#86A76A] text-[#0c0c0e]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-none">
              Build on gor.<br/>WE ARE WAITING FOR YOU.
            </h2>
            
            <div className="space-y-4 mt-8">
              <p className="font-bold uppercase tracking-widest text-[#0c0c0e]/70 mb-4 text-sm">Dev Arsenal</p>
              
              <a href="https://docs.gorbagana.wtf/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 border-2 border-[#0c0c0e] hover:bg-[#0c0c0e] hover:text-[#86A76A] transition-colors group">
                <div className="flex items-center gap-4">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                  <span className="font-display text-2xl uppercase tracking-widest">Read the Docs</span>
                </div>
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </a>

              <a href="https://calendly.com/sarv_gor/30min" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 border-2 border-[#0c0c0e] hover:bg-[#0c0c0e] hover:text-[#86A76A] transition-colors group">
                <div className="flex items-center gap-4">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                  <span className="font-display text-2xl uppercase tracking-widest">Book a Slot</span>
                </div>
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </a>
            </div>

            <div className="mt-12">
              <p className="font-bold uppercase tracking-widest text-[#0c0c0e]/70 mb-4 text-sm">Bootstrap</p>
              <div 
                onClick={copyRpc}
                className="flex items-center justify-between p-4 bg-[#0c0c0e] border-2 border-[#0c0c0e] text-white cursor-pointer hover:bg-[#1a1a1f] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="bg-[#86A76A] text-[#0c0c0e] text-xs font-bold px-2 py-1 uppercase tracking-wider inline-block w-fit">RPC Endpoint</span>
                  <span className="font-mono text-sm sm:text-base break-all">https://rpc.gorbagana.wtf</span>
                </div>
                {copiedRpc ? <Check className="w-5 h-5 text-[#86A76A] shrink-0 ml-4" /> : <Copy className="w-5 h-5 text-[#86A76A] shrink-0 ml-4" />}
              </div>
            </div>

          </div>
          <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
             <div className="absolute inset-0 bg-[#0c0c0e]/10 blur-3xl rounded-full scale-75"></div>
             <img src={ASSETS.mascot} alt="Gorbagana Building" className="w-full max-w-md relative z-10 drop-shadow-2xl transform rotate-3" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="join-gang" className="pt-24 pb-12 px-4 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#86A76A]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-12 leading-tight">
            Builders. Degens. Shitposters.<br/>Trash philosophers.<br/><br/>
            <span className="text-[#86A76A]">If you're pushing garbage on-chain, this is your landfill.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <a href="https://x.com/Gorbagana_chain" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#151518] text-white font-display text-xl uppercase tracking-wider hover:bg-[#86A76A] hover:text-[#0c0c0e] transition-colors flex items-center justify-center gap-3 border border-white/10">
              <Twitter className="w-6 h-6" /> Follow us on X
            </a>
            <a href="https://t.me/gorbagana_portal" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#151518] text-white font-display text-xl uppercase tracking-wider hover:bg-[#86A76A] hover:text-[#0c0c0e] transition-colors flex items-center justify-center gap-3 border border-white/10">
              <Send className="w-6 h-6" /> Join on Telegram
            </a>
          </div>

          <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
            <img src={ASSETS.logo} alt="Gorbagana" className="h-10 object-contain grayscale invert mb-4" />
            <p className="text-sm font-bold tracking-widest text-white/50 uppercase">© {new Date().getFullYear()} The Trash Chain</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

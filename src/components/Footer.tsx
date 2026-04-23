import { Twitter, Send } from 'lucide-react';
import { ASSETS } from '../lib/constants';

export function Footer() {
  return (
    <footer id="join-gang" className="pt-24 pb-12 px-4 border-t border-gorb/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gorb/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display text-3xl md:text-5xl uppercase mb-12 leading-tight">
          Builders. Degens. Shitposters.<br/>Trash philosophers.<br/><br/>
          <span className="text-gorb">If you're pushing garbage on-chain, this is your landfill.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <a href="https://x.com/Gorbagana_chain" target="_blank" rel="noreferrer" className="rounded-full px-8 py-4 bg-gorb-bg text-gorb font-display text-xl uppercase tracking-wider hover:bg-gorb hover:text-[#0c0f0a] transition-colors flex items-center justify-center gap-3 border border-gorb/20">
            <Twitter className="w-6 h-6" /> Follow us on X
          </a>
          <a href="https://t.me/gorbagana_portal" target="_blank" rel="noreferrer" className="rounded-full px-8 py-4 bg-gorb-bg text-gorb font-display text-xl uppercase tracking-wider hover:bg-gorb hover:text-[#0c0f0a] transition-colors flex items-center justify-center gap-3 border border-gorb/20">
            <Send className="w-6 h-6" /> Join on Telegram
          </a>
        </div>

        <div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
          <img src={ASSETS.logo} alt="Gorbagana" className="h-10 object-contain mb-4" />
          <p className="text-sm font-bold tracking-widest text-gorb/50 uppercase font-sans">© {new Date().getFullYear()} The Trash Chain</p>
        </div>
      </div>
    </footer>
  );
}

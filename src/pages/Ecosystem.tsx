import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { DAPPS } from '../data/dapps';
import { ASSETS } from '../lib/constants';

export function Ecosystem() {
  return (
    <div className="min-h-screen bg-transparent text-gorb font-sans selection:bg-gorb selection:text-gorb-bg overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center outline-none">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase mb-8 text-gorb">
            Gorbage Dapps for the Trash Gang
          </h1>
          <p className="font-sans text-gorb-text text-lg md:text-xl leading-[160%] max-w-2xl mx-auto">
            Dumpster dive into our curated list of Dapps where you can unload your <span className="text-gorb font-bold">$GOR</span> and familiarize yourself with the ecosystem.
          </p>
        </motion.div>
      </section>

      {/* Dapps Section */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-24">
          {DAPPS.map((dapp, index) => (
            <motion.div 
              key={dapp.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gorb-dark/10 border border-gorb/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 group transition-shadow relative overflow-hidden items-start"
            >
              <div className="absolute top-10 right-10 text-gorb-dark/20 font-display text-8xl md:text-[10rem] leading-none pointer-events-none">
                {dapp.id}
              </div>
              
              <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 relative z-10 flex flex-col overflow-hidden rounded-2xl bg-gorb-bg aspect-square">
                <img src={ASSETS.mascot} alt={dapp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50 group-hover:saturate-100" />
              </div>

              <div className="flex-1 relative z-10 flex flex-col h-full w-full">
                <div className="mb-4">
                  <h2 className="font-display text-5xl md:text-[4rem] text-gorb uppercase tracking-wider mb-2 leading-none drop-shadow-sm">{dapp.name}</h2>
                  <p className="font-sans text-gorb-text text-sm md:text-base mt-2">{dapp.tagline}</p>
                </div>

                <p className="text-gorb-text text-sm md:text-[15px] leading-[170%] mb-8 max-w-3xl font-sans mt-2">
                  {dapp.description.includes("100% fair launch") 
                    ? <>{dapp.description.split("100% fair launch")[0]}<span className="text-gorb">100% fair launch</span>{dapp.description.split("100% fair launch")[1]}</>
                    : dapp.description.includes("cultural garbage artifact") 
                    ? <>{dapp.description.split("cultural garbage artifact")[0]}<span className="text-gorb">cultural garbage artifact</span>{dapp.description.split("cultural garbage artifact")[1]}</>
                    : dapp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 w-full max-w-4xl">
                  {dapp.features.map((feature, i) => {
                     const parts = feature.split(' - ');
                     return (
                    <div key={i} className="flex items-start gap-4 p-0">
                      <div className="w-[5px] h-[5px] rounded-full bg-gorb mt-2 shrink-0" />
                      <p className="font-sans text-[13px] md:text-sm text-gorb-text leading-[160%]">
                        {parts.length > 1 ? (
                          <><span className="text-gorb">{parts[0]}</span> - {parts.slice(1).join(' - ')}</>
                        ) : (
                          feature
                        )}
                      </p>
                    </div>
                  )})}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {dapp.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`rounded-full px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        i === 0 
                          ? "bg-gorb text-gorb-bg hover:bg-gorb-text" 
                          : "bg-transparent text-gorb-text border border-gorb-text/20 hover:bg-gorb-text/10 hover:text-gorb"
                      }`}
                    >
                      {link.text} {i === 0 && <ArrowUpRight className="w-3.5 h-3.5" />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 border-t border-gorb/10 bg-gradient-to-b from-transparent to-gorb/5 text-center">
        <h2 className="font-display text-5xl md:text-7xl uppercase text-gorb mb-6">Building on Gorbagana?</h2>
        <p className="text-gorb-text text-xl md:text-2xl mb-12">Get your dapp featured in the ecosystem</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://calendly.com/sarv_gor/30min" target="_blank" rel="noreferrer" className="rounded-full px-10 py-5 bg-gorb-dark text-white font-display text-2xl uppercase tracking-wide hover:bg-gorb transition-colors shadow-lg hover:shadow-gorb-dark/20">
            Book a slot
          </a>
          <a href="https://t.me/gorbagana_portal" target="_blank" rel="noreferrer" className="rounded-full px-10 py-5 bg-gorb-bg text-gorb font-display text-2xl uppercase tracking-wide hover:bg-gorb/10 border border-gorb/20 transition-colors">
            Join Telegram
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

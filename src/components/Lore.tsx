import React from 'react';
import { motion } from 'framer-motion';

const Lore: React.FC = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-slate-950">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-fantasy text-ice-300 mb-8 drop-shadow-[0_0_10px_rgba(125,211,252,0.5)]">
                        The Legend of the Frost
                    </h2>

                    <div className="bg-slate-900/50 backdrop-blur-sm border border-ice-700/30 p-8 rounded-2xl shadow-lg relative">
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-ice-400/50 rounded-tl-2xl -mt-2 -ml-2"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-ice-400/50 rounded-br-2xl -mb-2 -mr-2"></div>

                        <p className="text-lg md:text-xl text-ice-100 leading-relaxed font-light mb-6 text-left">
                            When the <span className="text-white font-bold tracking-widest uppercase">Snow Meta</span> collided with the legendary <span className="text-ice-300 font-bold">Trout</span>, a new titan was forged.
                            <span className="text-ice-300 font-bold"> $SNOUT </span> is the culmination of the frozen narrative—the evolution of the river warrior into a galactic frost lord.
                        </p>
                        <p className="text-lg md:text-xl text-ice-100 leading-relaxed font-light mb-6 text-left border-l-2 border-ice-500 pl-6 italic bg-ice-900/10 py-4">
                            "The legacy is clear. We watched <span className="text-white font-bold uppercase">Big Trout</span> rip to a massive <span className="text-green-400 font-mono tracking-tighter">$2M Market Cap</span>. $SNOUT is here to break the ice and take it even further."
                        </p>
                        <p className="text-lg md:text-xl text-ice-100 leading-relaxed font-light text-left">
                            Clad in armor forged from permafrost and wearing the skulls of the fudders he's outlived, the Snow Trout doesn't just swim; he reigns. He is the guardian of the frozen liquidity, waiting for the global thaw that will unleash the greatest bull run in history.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Lore;

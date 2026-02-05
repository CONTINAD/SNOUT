import React from 'react';
import { motion } from 'framer-motion';

const Lore: React.FC = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-slate-900 transform -skew-y-2 origin-top-left border-y-8 border-ice-900">
            <div className="container mx-auto px-4 relative z-10 transform skew-y-2">
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

                    <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.1)] relative">
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-ice-400/50 rounded-tl-2xl -mt-2 -ml-2"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-ice-400/50 rounded-br-2xl -mb-2 -mr-2"></div>

                        <p className="text-xl md:text-2xl text-ice-100 leading-relaxed font-bold mb-6 text-left">
                            The <span className="text-white tracking-widest uppercase">Snow Meta</span> collided with the <span className="text-ice-300">Trout</span>, and a frost-covered god was born.
                            <span className="text-ice-300 font-bold"> $SNOUT </span> isn't just a fish—it's the apex predator of the tundra.
                        </p>
                        <p className="text-lg md:text-xl text-ice-100 leading-relaxed font-light mb-6 text-left border-l-4 border-green-500 pl-6 italic bg-ice-900/20 py-4">
                            "We watched <span className="text-white font-bold uppercase">Big Trout</span> absolutely SEND IT to <span className="text-green-400 font-mono tracking-tighter font-bold">$2M MC</span>. Now $SNOUT is here to freeze the Jeets and take the throne."
                        </p>
                        <p className="text-lg md:text-xl text-ice-100 leading-relaxed font-light text-left">
                            Clad in absolute zero armor and rocking the skulls of paper-handed traders using his liquidity as exit liquidity. The Snow Trout doesn't swim; he dominates. The thaw is coming, and only the frozen will survive the pump.
                        </p>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Lore;

import React from 'react';
import { motion } from 'framer-motion';

const Lore: React.FC = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-black border-y border-white/10">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="max-w-3xl mx-auto border-t border-b border-white/20 py-16 my-12">
                        <p className="text-3xl md:text-5xl text-white leading-tight font-serif font-bold mb-12 text-center uppercase tracking-widest">
                            Snow Meta <span className="text-white/50">×</span> Trout
                        </p>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-serif text-center mb-12 px-4 md:px-12">
                            "And lo, the <span className="text-white font-bold border-b border-white/50">Big Trout</span> did ascend to <span className="text-white font-bold">$2M</span>, paving the way. But from the permafrost emerges <span className="text-white font-bold">$SNOUT</span>—not to swim, but to conquer."
                        </p>

                        <div className="flex justify-center mb-12">
                            <span className="text-2xl text-white/30">†</span>
                        </div>

                        <p className="text-lg md:text-xl text-white/60 leading-relaxed font-serif text-center italic uppercase tracking-widest">
                            Absolute Zero Armor. Paper Hand Skulls. <br />
                            The Thaw is a lie. Only the Frozen survive.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Lore;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Zap, ExternalLink } from 'lucide-react';
import snowTroutImg from '../assets/snow_trout.jpg';
import bannerImg from '../assets/banner_v2.png';

const Hero: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const ca = "0x0000000000000000000000000000000000000000"; // Placeholder CA

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden border-b-2 border-white/10">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bannerImg} alt="Background" className="w-full h-full object-cover opacity-30 grayscale" />
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Main Image - Raw Border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-64 h-64 md:w-80 md:h-80 mb-12 border-2 border-white/20"
                >
                    <img
                        src={snowTroutImg}
                        alt="Snow Trout"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Title - Serif & Raw */}
                <div className="relative mb-8">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white italic font-serif">
                        $SNOUT
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 mt-6 italic font-serif tracking-widest uppercase border-y border-white/10 py-2">
                        The Frozen Will to Power
                    </p>
                </div>

                {/* Raw Actions */}
                <div className="flex flex-col gap-6 w-full max-w-lg">
                    {/* Main CA Box - Raw */}
                    <div
                        onClick={handleCopy}
                        className="bg-black border border-white/30 p-4 cursor-pointer hover:bg-white hover:text-black transition-all group flex items-center justify-between gap-4 font-mono text-sm"
                    >
                        <span className="truncate flex-grow text-left">
                            CA: {ca}
                        </span>
                        <div>
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </div>
                    </div>

                    {/* Buttons - Brutalist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black text-lg font-bold hover:bg-ice-200 transition-all uppercase tracking-widest border border-white flex items-center justify-center gap-2">
                            <span>Buy / Pump</span>
                            <Zap size={20} fill="currentColor" />
                        </a>

                        <a href="https://x.com/i/communities/2019316024764448961" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white text-lg font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest border border-white flex items-center justify-center gap-2">
                            <span>Tribe</span>
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

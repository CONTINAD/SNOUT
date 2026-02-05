import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';
import snowTroutImg from '../assets/snow_trout.jpg';
import bannerImg from '../assets/banner.png';

const Hero: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const ca = "0x0000000000000000000000000000000000000000"; // Placeholder CA

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bannerImg} alt="Background" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96 mb-8 rounded-full border-4 border-ice-400/30 shadow-[0_0_50px_rgba(56,189,248,0.3)] overflow-hidden bg-slate-900"
                >
                    <img
                        src={snowTroutImg}
                        alt="Snow Trout"
                        className="w-full h-full object-contain scale-100 hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 ring-inset ring-2 ring-ice-200/20 rounded-full pointer-events-none"></div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-fantasy font-bold text-transparent bg-clip-text bg-gradient-to-b from-ice-100 to-ice-600 drop-shadow-[0_0_15px_rgba(14,165,233,0.6)] mb-4"
                >
                    $SNOUT
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-xl md:text-2xl text-ice-200 max-w-2xl mb-8 font-light tracking-wide"
                >
                    The Frozen Warrior of the Solana Tundra
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 items-center"
                >
                    <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-green-500 hover:bg-green-400 text-slate-900 font-bold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105 flex items-center gap-2">
                        <span>Buy on Pump.fun</span>
                        <ExternalLink size={18} />
                    </a>

                    <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-md border border-ice-500/30 px-4 py-3 rounded-lg hover:border-ice-400/50 transition-colors">
                        <span className="font-mono text-ice-100 text-sm md:text-base mr-2">
                            {ca.slice(0, 6)}...{ca.slice(-4)}
                        </span>
                        <button
                            onClick={handleCopy}
                            className="text-ice-400 hover:text-white transition-colors p-1"
                            title="Copy CA"
                        >
                            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

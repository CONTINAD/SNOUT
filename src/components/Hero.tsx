import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Zap } from 'lucide-react';
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
        <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden border-b-8 border-ice-500/50">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bannerImg} alt="Background" className="w-full h-full object-cover opacity-40 blur-[2px] scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="relative w-72 h-72 md:w-[500px] md:h-[500px] mb-8 rounded-full border-8 border-ice-400/50 shadow-[0_0_100px_rgba(56,189,248,0.5)] overflow-hidden bg-slate-900 group"
                >
                    <img
                        src={snowTroutImg}
                        alt="Snow Trout"
                        className="w-full h-full object-contain scale-100 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 ring-inset ring-4 ring-ice-200/20 rounded-full pointer-events-none animate-pulse"></div>
                </motion.div>

                {/* Title */}
                <div className="relative mb-6">
                    <h1 className="text-7xl md:text-9xl font-fantasy font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-ice-300 to-white drop-shadow-[0_0_30px_rgba(14,165,233,0.8)] font-glitch transform -skew-x-6">
                        $SNOUT
                    </h1>
                </div>

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
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-green-500 hover:bg-green-400 text-slate-900 text-xl font-black rounded-xl shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_rgba(34,197,94,0.8)] transition-all hover:-translate-y-1 hover:scale-105 flex items-center gap-3 animate-pulse-fast border-2 border-green-300">
                        <span>BUY ON PUMP.FUN</span>
                        <Zap size={24} className="animate-shake" />
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

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Coins, Rocket } from 'lucide-react';

const HowToBuy: React.FC = () => {
    const steps = [
        {
            title: "Create Wallet",
            desc: "Download Phantom wallet. Don't be a normie, get the best one.",
            icon: <Wallet className="w-6 h-6" />
        },
        {
            title: "Get SOL",
            desc: "Load up on SOL. You're gonna need it for the ride.",
            icon: <Coins className="w-6 h-6" />
        },
        {
            title: "Go to Pump.fun",
            desc: "Head over to Pump.fun and connect your wallet.",
            icon: <ArrowRight className="w-6 h-6" />
        },
        {
            title: "Buy $SNOUT",
            desc: "Paste the CA, smash the buy button, and hold on tight.",
            icon: <Rocket className="w-6 h-6" />
        }
    ];

    return (
        <section className="relative py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-fantasy text-center text-ice-300 mb-16"
                >
                    How to Ape
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 mb-8 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-green-900/20 rounded-full flex items-center justify-center border border-green-500/50 text-green-400 group-hover:bg-green-500 group-hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                {step.icon}
                            </div>
                            <div className="flex-grow bg-slate-900/40 p-6 rounded-xl border border-ice-900/30 group-hover:border-green-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-ice-100 mb-1">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToBuy;

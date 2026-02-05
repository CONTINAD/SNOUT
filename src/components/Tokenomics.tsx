import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Flame, Lock } from 'lucide-react';

const Tokenomics: React.FC = () => {
    const stats = [
        {
            label: "Total Supply",
            value: "1,000,000,000",
            icon: <Snowflake className="w-8 h-8 text-ice-300" />,
            desc: "Minted in the cold"
        },
        {
            label: "Tax",
            value: "0/0",
            icon: <Flame className="w-8 h-8 text-ice-300" />,
            desc: "No friction"
        },
        {
            label: "Liquidity",
            value: "Burned",
            icon: <Lock className="w-8 h-8 text-ice-300" />,
            desc: "Frozen forever"
        }
    ];

    return (
        <section className="relative py-20 bg-slate-900 border-t border-ice-900/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-fantasy text-center text-ice-300 mb-16"
                >
                    Frozen Tokenomics
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate-950/80 p-8 rounded-xl border border-ice-800/50 hover:border-ice-500/50 transition-colors group text-center"
                        >
                            <div className="bg-slate-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-ice-900/30 transition-colors border border-ice-800/30">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-ice-400 font-bold uppercase tracking-wider text-sm mb-2">{stat.label}</p>
                            <p className="text-slate-500 text-sm">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;

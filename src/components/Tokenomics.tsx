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
                            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border-2 border-ice-800/50 hover:border-green-400/50 transition-all duration-300 group text-center hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-rotate-1"
                        >
                            <div className="bg-slate-950 w-20 h-20 rounded-xl rotate-3 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-900/20 group-hover:rotate-12 transition-all border border-ice-700">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-black text-white mb-2 italic">{stat.value}</h3>
                            <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">{stat.label}</p>
                            <p className="text-slate-500 text-sm">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;

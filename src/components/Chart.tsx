import React from 'react';
import { motion } from 'framer-motion';

const Chart: React.FC = () => {
    // Placeholder CA for the chart, will be updated when real CA is available
    const ca = "FAvSN6T9QsYf5xCFi6jKgxxHTw4e2SnnXdnkuGtwpump";

    return (
        <section className="relative py-20 bg-slate-950 border-y border-ice-900/50">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-fantasy text-ice-300 mb-12"
                >
                    Live $SNOUT Action
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden border border-ice-500/30 shadow-[0_0_30px_rgba(14,165,233,0.1)] bg-slate-900"
                >
                    <iframe
                        src={`https://dexscreener.com/solana/${ca}?embed=1&theme=dark&info=0`}
                        className="w-full h-full border-0"
                        title="DexScreener Chart"
                    ></iframe>
                </motion.div>

                <p className="mt-6 text-ice-200/50 text-sm italic">
                    *Chart will update automatically once liquidity is deployed
                </p>
            </div>
        </section>
    );
};

export default Chart;

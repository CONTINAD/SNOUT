import React from 'react';
import { Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-ice-900/50 py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-3xl font-fantasy text-ice-300 mb-8">$SNOUT</h2>

                <div className="flex gap-6 mb-8">
                    <a href="#" className="p-3 bg-slate-800 rounded-full text-ice-400 hover:bg-ice-600 hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full text-ice-400 hover:bg-ice-600 hover:text-white transition-colors">
                        <Send size={24} />
                    </a>
                </div>

                <p className="text-slate-600 text-sm text-center max-w-md">
                    $SNOUT is a meme coin with no intrinsic value or expectation of financial return.
                    There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
                </p>

                <p className="mt-8 text-slate-700 text-xs">
                    © 2024 Snow Trout. All rights frozen.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

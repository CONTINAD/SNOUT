import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-8">
                    {/* Raw Links */}
                    <div className="flex justify-center flex-wrap gap-8 mb-8">
                        <a href="https://x.com/i/communities/2019316024764448961" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-white/20 hover:border-white">
                            X Community (Tribe)
                        </a>
                        <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-white/20 hover:border-white">
                            Twitter
                        </a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-white/20 hover:border-white">
                            Telegram
                        </a>
                    </div>
                </div>
                <p className="text-white/30 text-xs uppercase tracking-widest font-serif">
                    $SNOUT © 2026. The Frozen Will.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

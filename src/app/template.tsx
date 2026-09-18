const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            <div className="relative z-10">
                {children}
            </div>

            {/* Subtle Grain */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-[0.035] bg-[url('/svg/noise.svg')] mix-blend-overlay"
            />
        </div>
    );
};

export default Template;
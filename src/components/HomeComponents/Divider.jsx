import React from 'react';

function Divider( { text = "Section" } ) {
    return (
        <div className="flex items-center w-full gap-6">
            <div className="relative w-fit isolate">
                <h3 className="font-kugile-demo text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tighter relative z-20 uppercase">
                    {text}
                </h3>

                <div 
                    className="absolute bottom-0 left-1/4 w-3/4 h-1/2 bg-neutral-500 z-10 transform translate-x-0 translate-y-0" 
                    aria-hidden="true"
                />
            </div>
            <div className="flex-1 h-1 bg-white opacity-60" aria-hidden="true" />
        </div>
    );
}

export default Divider;
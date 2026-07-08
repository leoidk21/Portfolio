import React from 'react';

function Button( { text = "Section" } ) {
    return (
        <button className="cursor-pointer relative w-64 py-2 overflow-hidden border border-zinc-600 bg-zinc-900 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-zinc-600 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
            <p className='text-[16px] lg:text-[22px] font-extralight relative z-10'>{text}</p>
        </button>
    )
}

export default Button;
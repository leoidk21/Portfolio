import React from 'react';

function Button( { text = "Section" } ) {
    return (
        <div className='flex items-center justify-center mt-12 mb-12 lg:mt-24'>
            <button className="bg-black p-3 lg:w-74 w-54 cursor-pointer">
                <p className='text-[16px] lg:text-[22px] font-extralight'>{text}</p>
            </button>
        </div>
    )
}

export default Button;
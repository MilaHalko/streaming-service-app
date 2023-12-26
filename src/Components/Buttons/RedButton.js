import React from 'react'

function RedButton({title, onClick}) {
    return (
        <button onClick={onClick}
                className="bg-subMain font-medium transitions active:bg-main border border-subMain text-white py-2 px-6 rounded w-full sm:w-auto">
            {title}
        </button>
    )
}

export default RedButton

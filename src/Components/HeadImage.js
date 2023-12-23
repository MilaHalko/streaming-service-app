import React from 'react'

function HeadImage({title}) {
    return (
        <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden">
            <img src="/images/cinemaPosters/cinemaPoster.jpg" alt="About us"
                 className="w-full h-full object-cover"/>
            <div className="darker-bg"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
                    {title && title}
                </h1>
            </div>
        </div>
    )
}

export default HeadImage

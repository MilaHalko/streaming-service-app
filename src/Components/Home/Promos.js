import React from 'react'
import {FiUser} from "react-icons/fi";

function Promos() {
    return (
        <div className="my-20 py-10 lg:px-10 px-8 bg-dry">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                {/* Description */}
                <div className="flex lg:gap-10 gap-6 flex-col mb-6 lg:mb-0">
                    <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
                        Watch your favorite movies <br/> Enjoy the best stories
                    </h1>
                    <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias asperiores
                        aspernatur atque autem commodi consequatur, cumque cupiditate delectus dolorum eaque eius
                        eligendi eos et eum eveniet excepturi exercitationem fugiat fugit hic illo illum ipsa
                        laboriosam laborum magnam maxime molestiae natus nemo nihil nisi nobis nostrum numquam.
                    </p>
                    <div className="flex gap-4 md:text-lg text-sm">
                        <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
                            HD 4K
                        </div>
                        <div className="flex-rows gap-2 bg-black text-subMain px-6 py-3 rounded font-bold">
                            <FiUser/> 0,8K
                        </div>
                    </div>
                </div>
                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                    <img src="/images/appViews/Iphone13.png" alt="Mobile app" className="w-auto h-full object-contain"/>
                    <img src="/images/appViews/XiaomiMi11i.png" alt="Mobile app" className="w-auto h-full object-contain"/>
                </div>

            </div>
        </div>
    )
}

export default Promos

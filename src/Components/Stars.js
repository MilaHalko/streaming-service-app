import React from 'react'
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

function Rating({valueBy100}) {
    const value = valueBy100 / 20;
    console.log(value);
    return (
        <>
            <span>
                {value >= 1 ?
                    (<FaStar/>)
                    : value >= 0.5 ?
                        (<FaStarHalfAlt/>)
                        : (<FaRegStar/>)
                }
            </span>
            <span>
                {value >= 2 ?
                    (<FaStar/>)
                    : value >= 1.5 ?
                        (<FaStarHalfAlt/>)
                        : (<FaRegStar/>)
                }
            </span>
            <span>
                {value >= 3 ?
                    (<FaStar/>)
                    : value >= 2.5 ?
                        (<FaStarHalfAlt/>)
                        : (<FaRegStar/>)
                }
            </span>
            <span>
                {value >= 4 ?
                    (<FaStar/>)
                    : value >= 3.5 ?
                        (<FaStarHalfAlt/>)
                        : (<FaRegStar/>)
                }
            </span>
            <span>
                {value >= 5 ?
                    (<FaStar/>)
                    : value >= 4.5 ?
                        (<FaStarHalfAlt/>)
                        : (<FaRegStar/>)
                }
            </span>
        </>
    )
}

export default Rating
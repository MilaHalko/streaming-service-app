import React, {useState, Fragment} from 'react'
import {Listbox, Transition} from "@headlessui/react";
import {FaAngleDown, FaCheck} from "react-icons/fa";
import {GetAllGenres} from "./Functions/GetMovieGenres";
import RedBorderBlackButton from "./Buttons/RedBorderBlackButton";
import {useNavigate} from "react-router-dom";
import requests from "../Requests";

function Filters({handleFilter, movieTitle}) {
    const navigate = useNavigate()
    const allGenres = GetAllGenres()
    const GenresData = [
        {title: 'Genre'},
        ...Array.from({length: allGenres.length}, (_, i) => ({title: allGenres[i].name})),
    ]

    const minYear = 1900;
    const maxYear = 2025;
    const YearsData = [
        {title: 'Year'},
        ...Array.from({length: maxYear - minYear}, (_, i) => ({title: maxYear - i})),
    ]

    const [genre, setGenre] = useState(GenresData[0]);
    const [year, setYear] = useState(YearsData[0]);

    const Filter = [
        {
            value: genre,
            onchange: setGenre,
            items: GenresData
        },
        {
            value: year,
            onchange: setYear,
            items: YearsData
        }
    ]

    const handleSearch = () => {
        const genreRequest = genre.title === 'Genre' ? '' : genre.title
        const yearRequest = year.title === 'Year' ? '' : year.title
        const titleRequest = movieTitle ? movieTitle : ''
        const request = requests.requestMovies(yearRequest, genreRequest, titleRequest)
        console.log('Title in filter: ', movieTitle)
        handleFilter(request)
    }

    return (
        <div className={`bg-dry border text-dryGray border-border md:grid md:grid-cols-${Filter.length + 1} gap-6 rounded-lg p-4`}>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onchange}>
                        <div className="relative">

                            {/* Filter title */}
                            <Listbox.Button className="relative border border-border w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs mb-2 md:mb-0">
                                <span className='block truncate'>{item.value.title}</span>
                                <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2'>
                                    <FaAngleDown className='w-4 h-4 text-gray-400' aria-hidden='true'/>
                                </span>
                            </Listbox.Button>

                            {/* Filter options */}
                            <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-0'>
                                <Listbox.Options className='absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                                    {
                                        item.items.map((item, index) => (

                                            // Filter option
                                            <Listbox.Option key={index} value={item}
                                                            className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-subMain text-white' : 'text-main'}`}>
                                                {
                                                    ({selected}) => (
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                        {item.title}
                                                            {
                                                                selected && (
                                                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                                                        <FaCheck className='w-3 h-3' aria-hidden='true'/>
                                                                    </span>
                                                                )
                                                            }
                                                        </span>
                                                    )
                                                }
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Transition>

                        </div>
                    </Listbox>
                ))
            }

            <RedBorderBlackButton title='Search' onClick={handleSearch} className='w-full md:w-auto'/>
        </div>
    )
}

export default Filters

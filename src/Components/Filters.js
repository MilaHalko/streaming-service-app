import React, {useState, Fragment} from 'react'
import {GenresData} from "../Data/genresData";
import {Listbox, Transition} from "@headlessui/react";
import {FaAngleDown, FaCheck} from "react-icons/fa";

const YearsFilterData = [
    {title: 'Sort by Year'},
    {title: '1970s'},
    {title: '1980s'},
    {title: '1990s'},
    {title: '2000s'},
    {title: '2010s'},
    {title: '2020s'},
]

const DurationFilterData = [
    {title: 'Sort by Duration'},
    {title: '0-1 hour'},
    {title: '1-2 hours'},
    {title: '2-3 hours'},
    {title: '3-4 hours'},
    {title: '4-5 hours'},
    {title: '5-10 hours'},
    {title: '10+ hours'},
]

const RatesFilterData = [
    {title: 'Sort by Rate'},
    {title: '1 Star'},
    {title: '2 Stars'},
    {title: '3 Stars'},
    {title: '4 Stars'},
    {title: '5 Stars'},
]

function Filters() {
    const [genre, setGenre] = useState({title: 'Genre'});
    const [year, setYear] = useState(YearsFilterData[0]);
    const [duration, setDuration] = useState(DurationFilterData[0]);
    const [rate, setRate] = useState(RatesFilterData[0]);

    const Filter = [
        {
            value: genre,
            onchange: setGenre,
            items: GenresData
        },
        {
            value: year,
            onchange: setYear,
            items: YearsFilterData
        },
        {
            value: duration,
            onchange: setDuration,
            items: DurationFilterData
        },
        {
            value: rate,
            onchange: setRate,
            items: RatesFilterData
        }
    ]

    return (
        <div
            className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onchange}>
                        <div className="relative">
                            <Listbox.Button
                                className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                                <span className='block truncate'>{item.value.title}</span>
                                <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2'>
                                    <FaAngleDown className='w-4 h-4 text-gray-400' aria-hidden='true'/>
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-0'>
                                <Listbox.Options className='absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                                    {
                                        item.items.map((item, index) => (
                                            <Listbox.Option key={index} value={item}
                                                            className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 
                                                            ${active ? 'bg-subMain text-white' : 'text-main'}`}>
                                                {({selected}) =>(
                                                    <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                        {item.title}
                                                        {
                                                            selected ? (
                                                                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                                                    <FaCheck className='w-3 h-3' aria-hidden='true'/>
                                                                </span>
                                                            ) : null
                                                        }
                                                    </span>
                                                )}
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }
        </div>
    )
}

export default Filters

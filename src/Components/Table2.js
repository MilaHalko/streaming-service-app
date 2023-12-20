import React from 'react'
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";

const Head = "text-xs text-left text-main font-semibold px-4 py-2 uppercase";
const Text = "text-xs text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (data, index, users, OnEdit) => {
    return (
        <tr key={index}>
            {/* Users */}
            {users ? (<>
                    <td className={`${Text}`}>
                        <div className="w-12 bg-dry border border-border h-12 rounded overflow-hidden">
                            <img src={`/images/users/${data.image ? data.image : "user.jpg"}`}
                                 alt={data?.FullName}
                                 className="h-full w-full object-cover"/>
                        </div>
                    </td>
                    <td className={`${Text}`}>{data?.id ? data.id : "S2LJ3X"}</td>
                    <td className={`${Text}`}>{data.createAt ? data.createAt : "19, Dec, 2023"}</td>
                    <td className={`${Text}`}>{data.FullName}</td>
                    <td className={`${Text}`}>{data.email}</td>
                    <td className={`${Text} float-right flex-rows gap-2`}>
                        <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
                            <MdDelete/>
                        </button>
                    </td>
                </>
            ) : (<> {/* Genres */}
                <td className={`${Text} font-bold`}>{data?.id ? data.id : "S2LJ3X"}</td>
                <td className={`${Text}`}>{data.createAt ? data.createAt : "19, Dec, 2023"}</td>
                <td className={`${Text}`}>{data.title}</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    <button
                        onClick={() => OnEdit(data)}
                        className="borders border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
                        Edit <FaEdit className="text-green-500"/>
                    </button>
                    <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
                        <MdDelete/>
                    </button>
                </td>
            </>)}
        < /tr>
    )
}

function Table2({data, users, OnEdit}) {
    return (
        <div className="overflow-x-scroll overflow-hidden relative w-full">
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                <tr className='bg-dryGray'>
                    {users ? (<>
                        <th scope="col" className={`${Head}`}>
                            Image
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Id
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Date
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Full Name
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Email
                        </th>
                    </>) : (<>
                        <th scope="col" className={`${Head}`}>
                            Id
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Date
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Title
                        </th>
                    </>
                    )}
                    <th scope="col" className={`${Head} text-end`}>
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                {data.map((data, index) => Rows(data, index, users, OnEdit))}
                </tbody>
            </table>
        </div>
    )
}

export default Table2

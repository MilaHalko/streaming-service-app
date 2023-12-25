import React from 'react'
import SideBar from "../SideBar";
import {Input, Message, Select} from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import {GenresData} from "../../../Data/genresData";
import {ImUpload} from "react-icons/im";

function AddMovie() {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Add Movie</h2>

                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input label='Movie Title' placeholder='Movie Name' type='text' bg={true}/>
                    <Input label='Hours' placeholder='1hr 30m' type='text' bg={true}/>
                </div>

                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input label='Language' placeholder='English' type='text' bg={true}/>
                    <Input label='Release Year' placeholder='2023' type='number' bg={true}/>
                </div>

                {/* IMAGES */}
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Image with title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">Image with title</p>
                        <Uploader/>
                    </div>
                    {/* Image without title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">Image without title</p>
                        <Uploader/>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <Message label='Movie Description' placeholder='Write movie description here...'/>

                {/* GENRE */}
                <div className="text-sm w-full">
                    <Select label='Genres' options={GenresData} multiple={true}/>
                </div>

                {/* VIDEO */}
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-border font-semibold text-sm">
                        Movie Video
                    </label>
                    <Uploader image={false}/>
                </div>


                {/* SUBMIT */}
                <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
                    <ImUpload/> Publish Movie
                </button>
            </div>
        </SideBar>
    )
}

export default AddMovie

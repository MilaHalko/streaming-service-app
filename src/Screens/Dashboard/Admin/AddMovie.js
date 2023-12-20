import React, {useEffect, useState} from 'react'
import SideBar from "../SideBar";
import {Input, Message, Select} from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import {GenresData} from "../../../Data/genresData";
import {ActorsData} from "../../../Data/actorsData";
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";
import {ImUpload} from "react-icons/im";
import ActorModal from "../../../Components/Modals/ActorModal";

function AddMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const [actor, setActor] = useState(null);

    useEffect(() => {
        if (modalOpen === false) {
            setActor();
        }
    }, [modalOpen]);

    return (
        <SideBar>
            <ActorModal modalOpen={modalOpen} setModalOpen={setModalOpen} actor={actor}/>
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

                {/* ACTOR */}
                <div className="w-full">
                    <button onClick={() => setModalOpen(true)}
                            className="w-full py-6 mb-4 bg-main border border-subMain border-dashed text-white rounded">
                        Add Actor
                    </button>
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-2">
                        {
                            ActorsData.map((actor, index) => (
                                <div key={index} className="p-2 italic text-xs text-text rounded flex flex-col justify-between items-center bg-main border border-border">
                                    <img src={actor.image ? `/images/actors/${actor.image}` : "/images/users/user.jpg"}
                                         alt={actor.name}
                                         className="w-full h-28 object-cover rounded mb-2"/>
                                    <p>{actor.name}</p>
                                    <div className="flex-rows mt-2 w-full gap-2">
                                        <button onClick={() => {setActor(actor); setModalOpen(true);}}
                                            className="w-6 h-6 flex-colo border border-border text-subMain rounded">
                                            <MdDelete/>
                                        </button>
                                        <button className="w-6 h-6 flex-colo border border-border text-green-600 rounded">
                                            <FaEdit/>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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

import React from 'react'
import MainModal from "./MainModal";
import {Input} from "../UsedInputs";
import {HiPlusCircle} from "react-icons/hi";

function GenreModal({modalOpen, setModalOpen, genre} ) {
    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-md">
                <h2 className="text-3xl font-bold">{genre ? "Update" : "Create"}</h2>
                <form className="flex flex-col gap-6 text-left mt-6">
                    <Input label='Genre Name'
                           placeholder={genre ? genre.title : "Genre Name"}
                           type='text' bg={false}/>
                    <button
                        onClick={() => setModalOpen(false)}
                        className="w-full flex-rows gap-2 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white">
                        {genre ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </MainModal>
    )
}

export default GenreModal

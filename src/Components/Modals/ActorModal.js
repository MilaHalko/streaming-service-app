import React from 'react'
import MainModal from "./MainModal";
import {Input} from "../UsedInputs";
import Uploader from "../Uploader";

function ActorModal({modalOpen, setModalOpen, actor} ) {
    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-md">
                <h2 className="text-3xl font-bold">{actor ? "Update Actor" : "Create Actor"}</h2>
                <form className="flex flex-col gap-6 text-left mt-6">
                    <Input label='Actor Name'
                           placeholder={actor ? actor.name : "Margot Robbie"}
                           type='text' bg={false}/>
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">Actor portrait</p>
                        <Uploader/>
                    </div>
                    <button
                        onClick={() => setModalOpen(false)}
                        className="w-full flex-rows gap-2 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white">
                        {actor ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </MainModal>
    )
}

export default ActorModal

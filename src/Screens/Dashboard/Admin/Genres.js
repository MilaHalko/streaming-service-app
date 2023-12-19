import SideBar from "../SideBar";
import React, {useEffect, useState} from "react";
import {HiPlusCircle} from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import {GenresData} from "../../../Data/genresData";
import GenreModal from "../../../Components/Modals/GenreModal";

function Genres() {
    const [modalOpen, setModalOpen] = useState(false);
    const [genre, setGenre] = useState();

    const OnEdit = (id) => {
        setGenre(id);
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        if (modalOpen === false) {
            setGenre()
        }
    }, [modalOpen]);

    return (
        <SideBar>
            <GenreModal modalOpen={modalOpen} setModalOpen={setModalOpen} genre={genre}/>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Genres</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-subMain flex-rows gap-2 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded">
                        <HiPlusCircle/> Create
                    </button>
                </div>
                <Table2 data={GenresData} users={false} OnEdit={OnEdit}/>
            </div>
        </SideBar>
    )
}

export default Genres
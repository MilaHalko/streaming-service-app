import React from 'react'
import {useDropzone} from "react-dropzone";
import {FiUploadCloud} from "react-icons/fi";
import {Input} from "./UsedInputs";

function Uploader({image = true}) {
    const {getRootProps, getInputProps} = useDropzone({
        multiple: false,
        maxSize: 10000,
        onDrop: acceptedFiles => {
            alert(acceptedFiles[0].name);
        },
    });
    return (
        <div className='w-full text-center'>
            <div {...getRootProps()} className='px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer'>
                <input {...getInputProps()} />
                <span className='mx-auto flex-colo text-subMain text-3xl'>
                    <FiUploadCloud/>
                </span>
                {
                    image ? (
                        <>
                        <p className='text-sm mt-2'>Drag your image here or click to upload</p>
                        <em className='text-xs text-border'>
                            (Only *.jpeg and *.png images will be accepted)
                        </em>
                        </>
                    ) : (
                        <>
                        <p className='text-sm mt-2'>Drag your video here or click to upload</p>
                        <em className='text-xs text-border'>
                            (Only *.mp4 videos will be accepted)
                        </em>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Uploader

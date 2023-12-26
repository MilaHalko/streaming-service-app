import {Input} from "../UsedInputs";
import React from "react";

export function ProfileEditLine({label, type, value, onChange, autoComplete, placeholder}) {
    return (
        <div className="flex flex-col">
            <Input label={label} placeholder={placeholder} type={type} bg={true} onChange={onChange} value={value}
                   autoComplete={autoComplete}/>
        </div>
    )
}
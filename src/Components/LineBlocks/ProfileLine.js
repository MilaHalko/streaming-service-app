import React from "react";

export function ProfileLine({label, value}) {
    return (
        <div className="flex flex-col">
            <label className="text-border font-semibold text-base">{label}</label>
            <span className="text-lg font-semibold">{value}</span>
        </div>
    )
}
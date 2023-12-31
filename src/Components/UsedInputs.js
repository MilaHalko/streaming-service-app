export const Message = ({label, placeholder, onChange}) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
                      placeholder={placeholder}
                      onChange={onChange}>
            </textarea>
        </div>
    )
};

export const Select = ({label, options, onChange, multiple = false}) => {
    return (
        <>
            <label className="text-border font-semibold">{label}</label>
            <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" multiple={multiple}
                    onChange={onChange}>
                {options.map((o, index) => (<option key={index} value={o.value}>{o.title}</option>))}
            </select>
        </>
    )
};

export const Input = ({label, placeholder, type, bg, onChange, autoComplete, value}) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold text-base">{label}</label>
            <input required
                   type={type}
                   placeholder={placeholder}
                   autoComplete={autoComplete}
                   onChange={onChange}
                   value={value}
                   className={`w-full mt-1 p-3 text-base border border-border rounded text-white ${bg ? 'bg-main' : 'bg-dry'}`}/>
        </div>
    )
};
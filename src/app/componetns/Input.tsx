
function Input({placeholder} : {placeholder:string}) {
    return (
        <input className="bg-gray-200 w-[100%] h-[2rem] ps-[1rem] text-xs rounded-sm"
            type="text"
            placeholder={placeholder}
        />
    )
}

export default Input
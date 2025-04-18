function Input({inputType, placeholder, label, inputChangeHandler}){
    return(
        <label className="flex justify-center item-center gap-3 w-auto">
            <span className="text-gray-700 w-auto flex justify-center items-center text-xl font-semibold">{label}</span>
            <input
                type={inputType}
                className="px-4 py-2 border border-gray-500 rounded-md text-xl outline-none"
                placeholder={placeholder}
                onChange={inputChangeHandler}
            ></input>
        </label>
    );
}
export default Input;
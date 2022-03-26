const Input = props => {
    const  { labelName, typeInput, inputName, nameTag, onChange}  = props

    return (
        <div className="ml-6 mt-8 text-left">
            <label 
            className="block font-medium text-white ">
                {labelName}:
            </label>
            <input
            className='w-32 md:w-80 border border-slate-300 rounded-md py-2 pl-9 pr-3 mr-5'
            name={inputName}
            type={typeInput}
            placeholder={nameTag}
            onChange={onChange}
            />
        </div>
    )
}

export default Input

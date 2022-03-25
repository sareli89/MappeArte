const Input = props => {
    const  { labelName, typeInput, inputName, nameTag }  = props

    return (
        <div className="mb-8 mt-8 text-left">
            <label 
            className="block font-medium text-white ">{labelName}:
            </label>
            <input
            name={inputName}
            type={typeInput}
            placeholder={nameTag}
            className='form-controlw-10 rounded h-mid w-small lg:w-big'
            />
        </div>
    )
}

export default Input

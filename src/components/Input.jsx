function Input({ text, setState, placeholder }) {

    return (
        <input
            type="text"
            placeholder={placeholder}
            className="bg-white px-3 py-1 text-area rounded-md placeholder:text-center"
            value={text}
            onChange={(event) => {
                setState(event.target.value)
            }}
        />
    );


};

export default Input;
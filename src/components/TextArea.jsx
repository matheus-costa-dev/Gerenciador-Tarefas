function TextArea({ text, setState, placeholder }) {
    const condition = screen.height < 600 ? 40 : 50;

    return (
        <textarea
            type="text"
            placeholder={placeholder}
            className={`bg-white $ px-3 py-1 ${text.length < condition ? 'h-8' : 'h-30' } rounded-md placeholder:text-center`}
            value={text}
            onChange={(event) => {
                setState(event.target.value)
            }}
        />
    );


};

export default TextArea;
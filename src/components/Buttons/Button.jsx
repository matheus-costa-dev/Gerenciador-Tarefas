
function Button({children,text, onClick, hoverColor}) {


    const hover = hoverColor ? hoverColor : "hover:text-gray-900"

    return (
        <button
           
            className={`bg-slate-400 text-white cursor-pointer rounded-md p-3 ${hover}`}
            onClick={onClick}
        >
            {children || text}
        </button>

    )
}

export default Button
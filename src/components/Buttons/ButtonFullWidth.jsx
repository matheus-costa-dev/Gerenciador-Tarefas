function ButtonFullWidth({children, onClick, condition, hoverColor}) {

    const hover = hoverColor ? hoverColor : "hover:text-gray-900" 
    const color = condition ? "text-green-900" :  "text-white"

    return (

        <button
        className={`bg-slate-400 w-full ${color} p-2 rounded-md text-left flex items-center gap-2 cursor-pointer ${hover} ${condition && 'line-through'} `}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonFullWidth
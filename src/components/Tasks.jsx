import { Check, ChevronRight, Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(title, description){
        const query = new URLSearchParams();
        query.set('title', title)
        query.set('description', description)
       return navigate(`/task?${query.toString()}`)
    };
    

    return (
        <ul className='bg-slate-300 shadow space-y-4 p-6 rounded-md'>


            {tasks.map(task => {

                return (
                    <li
                        className='flex gap-4'
                        key={task.id}
                    >
                        <button
                        className={`bg-slate-400 w-full text-white p-2 rounded-md text-left flex items-center gap-2 cursor-pointer hover:text-gray-900 ${task.isCompleted && 'line-through'} `}
                        onClick={() => onTaskClick(task.id)}
                        >
                            {task.isCompleted && <span className='text-green-900'> <Check/></span> }
                            {task.title}
                        </button>
                        <button
                        className='bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:text-blue-900'
                        onClick={() => onSeeDetailsClick(task.title, task.description)}
                        >
                            <ChevronRight />
                        </button>
                        <button
                        className='bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:text-red-900'
                        onClick={() => onDeleteTaskClick(task.id)}
                        >
                            <Trash2Icon />
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};


export default Tasks;
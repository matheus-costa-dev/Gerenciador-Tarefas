import { Check, ChevronRight, Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Buttons/Button';
import ButtonFullWidth from './Buttons/ButtonFullWidth';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(title, description) {
        const query = new URLSearchParams();
        query.set('title', title)
        query.set('description', description)
        return navigate(`/task?${query.toString()}`)
    };


    return (
        
        <ul className={tasks.length > 0 ? `bg-slate-300 shadow space-y-4 p-6 rounded-md ` : ''}>


            {tasks.map(task => {

                

                return (
                    <li
                        className='flex gap-4'
                        key={task.id}
                    >
                        <ButtonFullWidth
                            condition={task.isCompleted}
                            onClick={() => onTaskClick(task.id)}
                        >
                            {task.isCompleted && <span className='text-green-900'> <Check /></span>}
                            {task.title}
                        </ButtonFullWidth>
                   

                        <Button
                            onClick={() => onSeeDetailsClick(task.title, task.description)}
                            text={<ChevronRight />}
                            hoverColor={"hover:text-blue-900"}
                            
                        />


                        <Button
                            onClick={() => onDeleteTaskClick(task.id)}
                            text={<Trash2Icon />}
                            hoverColor={"hover:text-red-900"}
                        />


                    </li>
                )
            })}
        </ul>
    )
};


export default Tasks;
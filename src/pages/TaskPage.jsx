import { ChevronLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom'

function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")


    function onBackClick() {
        navigate("/")
    }

    return (
        <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
            <div className="w-[500px] text-center space-y-6 ">
                <div className='text-left'>
                    <button
                        className='text-white p-4 cursor-pointer hover:text-blue-900 z'
                        onClick={onBackClick}
                    >
                        <ChevronLeft />

                    </button>
                </div>

                <div className='flex flex-col bg-slate-300 space-y-6 p-4 rounded-md'>

                        <h1
                            className='bg-slate-400 text-white font-bold text-3xl p-6'>
                            {title}
                        </h1>

                   
                    <p
                    className='text-white bg-slate-400 p-6'
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;
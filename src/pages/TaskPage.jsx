import { ChevronLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import Title from '../components/Title.jsx';
import Button from '../components/Buttons/Button.jsx';
import ContainerAll from '../components/Containers/ContainerAll.jsx';
import ContainerOut from '../components/Containers/ContainerOut.jsx';
import ContainerIn from '../components/Containers/ContainerIn.jsx';


function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")


    function onBackClick() {
        navigate("/")
    }

    return (
        <ContainerAll>

            <ContainerOut>


                <ContainerIn>

                    <div className='flex items-center gap-0.5'>
                        <Button
                            text={<ChevronLeft />}
                            onClick={onBackClick}
                        />
                        <Title text={title} />

                    </div>



                    <p
                        className='text-white bg-slate-400 p-6'
                    >
                        {description}
                    </p>


                </ContainerIn>


            </ContainerOut>




        </ContainerAll>

    )
}

export default TaskPage;
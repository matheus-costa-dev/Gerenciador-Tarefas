import { useNavigate, useParams } from 'react-router-dom'
import SectionApp from '../components/SectionApp'
import NavbarApp from '../components/NavbarApp'
import Layout from '../components/Layout'
import { useAuth } from '../context/UseAuth'
import { FaArrowLeft } from 'react-icons/fa'
import { formStyle } from '../customStyle'

const { bgForm } = formStyle;


function AppTaskDescription() {
    const params = useParams();
    const { getTask, isLoading } = useAuth();
    const task = getTask(params.id)
    const navigate = useNavigate()


    if (isLoading) {
        return (
            <Layout>
                <NavbarApp />
                <SectionApp title={"Carregando"} />
            </Layout>
        )
    }

    return (

        <Layout>
            <NavbarApp />
            {!task ? (
                <SectionApp title={"Nenhuma tarefa encontrada com esse id"} />
            ) : (
                <SectionApp>
                    <section className='w-full lg:w-1/2 flex items-center'>
                        <FaArrowLeft onClick={() => navigate("/app")} className='' />
                        <h2 className='w-full text-center'>{task.title}</h2>
                    </section>
                    <div className={`w-full lg:w-1/2 flex rounded-2xl flex-col gap-4 p-4 ${bgForm}`}>
                        <span className='tracking-tighter font-light'>{task.description}</span>

                    </div>
                    <ul>
                        <li>Status: {task.isCompleted ? "Tarefa concluída" : "Tarefa não concluída"}</li>
                        <li>Criada: {task.createdAt}</li>
                        <li>Finalizada: {task.finishedAt ? task.finishedAt : "-"}</li>
                    </ul>

                </SectionApp>

            )}

        </Layout>
    )
}

export default AppTaskDescription

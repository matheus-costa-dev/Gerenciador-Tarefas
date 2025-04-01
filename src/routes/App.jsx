import { useState } from "react";
import Layout from "../components/Layout";
import NavbarApp from "../components/NavbarApp";
import SectionApp from "../components/SectionApp";
import toast, { Toaster } from "react-hot-toast";
import { FaAngleRight, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../customStyle";
import { useAuth } from "../context/UseAuth";

const {bgForm, bgOnFocus, bgOutFocus } = formStyle;

function App() {
  const { user, isLoading, addNewTask, removeTask, changeStatusTask } = useAuth();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTitleOnFocus, settaskTitleOnFocus] = useState(false);
  const [taskDescriptionOnFocus, settaskDescriptionOnFocus] = useState(false);

  const navigate = useNavigate();

  async function onHandleNewTask() {
    const toastId = toast.loading("Criando tarefa");

    if (taskTitle === "" && taskDescription === "") {
      toast.error("Preencha os campos titulo e descrição da tarefa", { id: toastId });
      return null;
    }

    try {
      const newTask = {
        id: uuidv4(),
        title: taskTitle,
        description: taskDescription,
        createdAt: new Date().toLocaleDateString(),
        finishedAt: null,
        isCompleted: false,
      };
      await addNewTask(newTask);
      toast.success("Tarefa criada", { id: toastId });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  }

  async function onHandleTaskCompleted(taskId) {
    const toastId = toast.loading("alterando status da tarefa");

    try {
      await changeStatusTask(taskId);
      toast.success("Status da tarefa alterado", { id: toastId });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  }

  async function onHandleDeleteTask(taskId) {
    const toastId = toast.loading("Apagando");

    try {
      await removeTask(taskId);
      toast.success("Tarefa removida", { id: toastId });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  }

  return (
    <Layout>
      <NavbarApp />
      <SectionApp title={"Tarefas"}>
        <section className={`w-full text-2xl lg:text-base lg:w-1/2 flex flex-col items-center gap-4 rounded-2xl p-4 ${bgForm}`}>
          <h2>Nova tarefa</h2>
          <input
            type="text"
            className={`rounded-2xl px-4 w-full ${taskTitleOnFocus ? bgOnFocus : bgOutFocus}`}
            placeholder="Titulo"
            onChange={(e) => setTaskTitle(e.target.value)}
            value={taskTitle}
            onFocus={() => settaskTitleOnFocus(true)}
            onBlur={() => settaskTitleOnFocus(false)}
          />
          <textarea
            name="description"
            className={`rounded-2xl px-4 w-full ${taskDescriptionOnFocus ? bgOnFocus : bgOutFocus}`}
            placeholder="Descrição"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
            onFocus={() => settaskDescriptionOnFocus(true)}
            onBlur={() => settaskDescriptionOnFocus(false)}
          />
          <button
            className="rounded-2xl bg-amber-400 px-4"
            onClick={() => onHandleNewTask()}
          >
            Adicionar
          </button>
        </section>

        <section className={`w-full lg:w-1/2 text-2xl lg:text-base flex flex-col items-center gap-4 mb-5 rounded-2xl p-4 ${bgForm}`}>
          <h2>Todas tarefas</h2>
          <ul className="flex flex-col gap-4 justify-center items-center w-full">
            {isLoading ? (
              <div className="w-full mx-auto">carregando...</div>
            ) : user?.tasks?.length > 0 ? (
              <>
                <h3 className={`w-full px-2 rounded-2xl text-center ${bgOutFocus}`}>
                  Tarefas encontradas: {user.tasks.length}
                </h3>
                {user.tasks.map((task, index) => (
                  <li key={index} className="w-full flex items-center gap-2 px-2">
                    <h3
                      onClick={() => onHandleTaskCompleted(task.id)}
                      className={`w-full px-2 rounded-2xl text-center ${bgOutFocus} ${task.isCompleted && "line-through text-green-700"}`}
                    >
                      {task.title}
                    </h3>
                    <FaAngleRight
                      className="text-2xl"
                      onClick={() => navigate(`/app/task/${task.id} `)}
                    />
                    <FaTrash
                      className="text-red-800 text-2xl"
                      onClick={() => onHandleDeleteTask(task.id)}
                    />
                  </li>
                ))}
              </>
            ) : (
              <h3>Nenhuma tarefa encontrada</h3>
            )}
          </ul>
        </section>
      </SectionApp>
      <Toaster />
    </Layout>
  );
}

export default App;

import { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Buttons/Button.jsx";
import ContainerIn from "./Containers/ContainerIn.jsx";

function AddTask({ onAddTaskClick }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [alert, setAlert] = useState(false);

    function onHandClickAdd() {
        const val = onAddTaskClick(title, description)
        val === null ? setAlert(true) : setAlert(false)
        setTitle("")
        setDescription("")
    }

    return (
        <ContainerIn>

            {alert &&

                <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-600 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                    <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="text-center w-full">
                        <span className="font-medium">Aviso!</span> Preencha os campos.
                    </div>
                </div>

            }

            <Input 
            text={title}
            setState={setTitle}
            placeholder={"Digite a tarefa"}
            />
    

            <Input 
            text={description}  
            setState= {setDescription}
            placeholder={"Digite a descrição da tarefa"}
            />

            
            <Button 
            text={"Adicionar"}
            onClick={onHandClickAdd}/>
     
        </ContainerIn>
    )
}

export default AddTask
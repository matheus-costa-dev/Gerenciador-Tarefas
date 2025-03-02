import AddTask from "../components/addTasks";
import Tasks from "../components/Tasks";
import { useEffect, useState } from 'react';
import {v4} from 'uuid'

function App() {

  const [tasks, setTasks] = useState(
   JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  useEffect( () => {
    async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos?_limit=5",
        {method: 'GET'}
      );
      const datas = await response.json();

      const descriptions = [
        "Uma equipe de exploradores espaciais embarca em uma missão perigosa para salvar a Terra de uma ameaça alienígena.",
        "Um grupo de amigos passa um fim de semana em uma mansão antiga e isolada, onde eventos sobrenaturais começam a acontecer.",
        "Um samurai busca vingança após o assassinato de seu mestre, embarcando em uma jornada perigosa e cheia de desafios.",
        "Uma jovem descobre um mundo mágico escondido em uma floresta, onde precisa enfrentar criaturas místicas para salvar seu lar.",
        "Um grupo de ladrões planeja um assalto audacioso a um banco, mas precisam lidar com a polícia e um rival perigoso.",
        "Um romance proibido floresce em meio a um conflito devastador, onde dois jovens de lados opostos precisam lutar por seu amor.",
        "Um mergulhador explora as profundezas do oceano em busca de um tesouro perdido, enfrentando perigos e descobrindo segredos antigos.",
        "Uma mulher busca respostas sobre seu passado misterioso, desvendando segredos de família e enfrentando perigos inesperados.",
        "Em um futuro distópico, robôs se rebelam contra a humanidade, e um grupo de rebeldes luta para restaurar a ordem.",
        "Uma bailarina talentosa busca realizar seu sonho de se apresentar em um grande palco, enfrentando desafios e superando seus próprios limites."
      ]

      const newDatas = datas.map( data => {
        delete data.userId;
        data.description = descriptions[data.id -1]
        data.id = v4();

        return data
      } )  

      await setTasks(newDatas)
    }

    fetchTasks()
    
  }, [])

  function onAddTaskClick(title, description) {

    if (!title.trim() || !description.trim()){
      return null
    }

    const newTask = {
      id:v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    return setTasks([...tasks, newTask])

  };

  function onTaskClick(id){
    const changeTask =  tasks.map(task => {
      if (task.id == id) {
        task.isCompleted = !task.isCompleted
      } 

      return task
    });

    setTasks(changeTask)

  }

  function onDeleteTaskClick(id){
    return setTasks(tasks.filter(task=> {
      return task.id != id
    }));
  };

  return (
      <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6 ">

          <div className="w-[500px]  text-center space-y-6 ">
            <h1 className="text-white text-3xl">
              Gerenciador de tarefas
              </h1>
            <AddTask onAddTaskClick= {onAddTaskClick}  />
            <Tasks 
            tasks= {tasks} 
            onTaskClick = {onTaskClick}
            onDeleteTaskClick = {onDeleteTaskClick}
            
            />

          </div>

      </div>
  );
};

export default App;
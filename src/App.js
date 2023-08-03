import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { createContext,useState } from "react"

export const ThemeContext = createContext(null)

const App= () => {
  const [showAddTask,setShowAddTask] =useState(false)
  const [theme,setTheme] = useState("light")

  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text:'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false,
    }
    
    ])

    //Add Task
    const addTask =(task)=> {
    const id = Math.floor(Math.random()*10000)+1
  
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])  
  }
 //theme

 const toggleTheme =()=>{
  setTheme((curr)=> (curr === "light" ? "dark": "light"));
 }
     
//Delete Task
const deleteTask =(id) =>{
setTasks(tasks.filter((task)=> task.id !== id))
// console.log(id)
}

//Toggle Reminder

const toggleReminder = (id) => {
setTasks(
  tasks.map((task)=>
  task.id === id ? {...task, reminder: !task.reminder}
  : task)
)
}

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className='container' id={theme}>
    <Header onAdd={( )=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks available'
        )
      }
      </div>
      </ThemeContext.Provider>
  )
}

export default App


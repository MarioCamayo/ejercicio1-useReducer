
import { useReducer } from "react";

const TYPES = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",


}

const InitialTasks = [
  {id:1, taskName: 'Estudiar HTML'},
  {id:2, taskName: 'Estudiar PYTHON'},
  {id:3, taskName: 'Estudiar JAVASCRIPT'},
]

const reducer = (state, action)=>{
    switch (action.type) {
      case 'TYPE.ADD_TASK':
        return [...state,
        {
          id: state.length + 1,
          taskName: action.payload
          }
        ]
       case 'TYPE.DELETE_TASK':
        return state.filter(task => task.id !== action.payload)
      default:
         return state
     }
  }

const TaskList = () => {
  const [tasks, dispatch] = useReducer(reducer, InitialTasks);

 const handleDelete = (id)=>{
  dispatch({
    type: 'TYPE.DELETE_TASK',
    payload: id
 
 })
 }


  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(event);
    dispatch({
      type:'TYPE.ADD_TASK',
      payload: event.target[0].value
    })
  }
    


  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //  name="task"
           placeholder="Enter a task"
           className="newInput"
        />
        <input
         type="submit" value='Add Task'
        />
      </form>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <p>{task.taskName}</p>
            <button onClick={()=>handleDelete(task.id)}>Delete</button>
          </div>
        ))}
        </div>
    </div>
  )
}
  export default TaskList
           
            
/*
  const newTask = {
      id: tasks.length + 1,
      taskName: event.target.taskName.value
      }
      dispatch({type: 'AGREGAR_TAREA', newTask})
      event.target.taskName.value = ''
      }
      const handleDelete = (id)=>{
        dispatch({type: 'ELIMINAR_TAREA', id})
        }
        return (
          <div>
            <h1>Lista de Tareas</h1>
          </div>
        )
*/ 

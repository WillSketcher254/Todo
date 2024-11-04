import React, {useContext, useState, useEffect} from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const TaskForm = () => {
    const{addTask, clearList,editItem,editTask} = useContext(TaskListContext);
    
    const[title,setTitle] = useState("")
    const handleChange = e =>{
        setTitle(e.target.value)
        console.log(title)
    };
    const handleSubmit = e =>{
        e.preventDefault()
        if(editItem === null){
            addTask(title)
            setTitle("")

        }else{
            editTask(title, editItem.id)
        }
    };


    useEffect(()=>{
        if(editItem !==null){
            setTitle(editItem.title)
        }else{
            setTitle("")
        }
    },[editItem])
    return (
        <div className='p-4'>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                value={title}
                type="text" 
                placeholder='Enter a task' 
                required />
                <div className='p-4'>
                    <button type='submit'className='p-2 mx-9'>
                        {editItem ? "Edit Task" : "Add task"}
                    </button>
                    <button 
                    onClick={clearList}
                    className='p-2 mx-9'> Clear </button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
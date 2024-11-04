import React, { useContext } from 'react'
import { TaskListContext } from '../Context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const { tasks } = useContext(TaskListContext)
    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map((task) => {
                        return (
                            
                            <Task task={task} key={task.id} />
                        )
                    })}
                </ul>
            ) : (
                <div>
                    <h1 className='italic text-[25px] text-gray-500  w-[400px] hover:text-gray-400'>No-Tasks-Here</h1>
                </div>
            )}
        </div>
    )
}

export default TaskList
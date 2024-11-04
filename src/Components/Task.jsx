import React, { useContext, useState } from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const Task = ({ task }) => {
  const [complete, setComplete] = useState(true)

  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <div>
      <li
        onClick={() => setComplete(!complete)}
        className="flex p-2 px-6 justify-between w-[400px] hover:bg-slate-900"
      >
        {complete ? `` : (<h1 className='text-[25px]'>✔</h1>) }
        <span className={`${complete ? `cursor-pointer` : 'cursor-pointer line-through'}`} >{task.title}</span>
        <div>
          <button onClick={() => removeTask(task.id)} className='btn-delete'>🗑️</button>
          <button onClick={() => findItem(task.id)} className='btn-edit'>✍️</button>
        </div>
      </li>
    </div>
  )
}

export default Task
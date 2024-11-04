import './App.css'
import Header from './Components/Header'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import TaskListContextProvider from './Context/TaskListContext'

function App() {

  return (
    <>
      <div  className='bg-slate-800 h-[550px]'>
        <TaskListContextProvider>
          <div className="container">
            <div className="app-wrapper">
              <Header/>
              <div className="main">
              <TaskForm/>
                <TaskList />
              </div>
            </div>
          </div>
        </TaskListContextProvider>
      </div>
    </>
  )
}

export default App

import { useState } from 'react';

function App() {
  const [activeBoard, setActiveBoard] = useState('tasks');
  const [tasks, setTasks] = useState(['task', 'task']);
  const [projects, setProjects] = useState(['project', 'project']);

  return (
    <main className='App'>
      <Header />
      <div className='row'>
        <Sidebar activeBoard={activeBoard} setActiveBoard={setActiveBoard} />
        <TaskTable
          activeBoard={activeBoard}
          tasks={tasks}
          projects={projects}
          setTasks={setTasks}
          setProjects={setProjects}
        />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header>
      <img src='images/logo.webp' alt='Tandem Theory' />
      <h1>CM Task Manager 2.0</h1>
    </header>
  );
}

function Sidebar({ activeBoard, setActiveBoard }) {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <nav className={sideBarOpen ? 'open' : 'closed'}>
      <button
        className='close-sidebar'
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        {sideBarOpen ? '<' : '>'}
      </button>
      <h2>Boards</h2>
      <ul>
        <li>
          <button
            className={activeBoard === 'tasks' ? 'active' : ''}
            onClick={() => setActiveBoard('tasks')}
          >
            Tasks
          </button>
        </li>
        <li>
          <button
            className={activeBoard === 'projects' ? 'active' : ''}
            onClick={() => setActiveBoard('projects')}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
}

function TaskTable({ activeBoard, tasks, projects, setTasks, setProjects }) {
  const newTask = 'task';
  const newProject = 'project';

  function handleAddItem() {
    activeBoard === 'tasks'
      ? setTasks([...tasks, newTask])
      : setProjects([...projects, newProject]);
  }

  return (
    <section className='task-list'>
      <h2>{activeBoard === 'tasks' ? 'Tasks' : 'Projects'} </h2>
      <button onClick={handleAddItem}>
        Add {activeBoard === 'tasks' ? 'Task' : 'Project'}
      </button>
      <table>
        {activeBoard === 'tasks'
          ? tasks.map((task) => {
              return (
                <tr>
                  <td>{task}</td>
                </tr>
              );
            })
          : projects.map((project) => {
              return (
                <tr>
                  <td>{project}</td>
                </tr>
              );
            })}
      </table>
    </section>
  );
}

export default App;

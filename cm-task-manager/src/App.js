import { useState } from 'react';

function App() {
  const [activeBoard, setActiveBoard] = useState('tasks');
  const [tasks, setTasks] = useState([
    {
      name: 'Campaign 123',
      bu: 'ENT',
      owner: 'Houston',
      status: 'CS Review',
      launch: 'test',
      notes: 'Cole is reviewing currently',
      id: crypto.randomUUID(),
    },
    {
      name: 'Campaign 456',
      bu: 'DTC',
      owner: 'Alissa',
      status: 'Client Review',
      launch: 'test',
      notes: 'Cole is reviewing currently',
      id: crypto.randomUUID(),
    },
  ]);
  const [projects, setProjects] = useState([
    {
      name: 'Project 123',
      bu: 'ENT',
      owner: 'Houston',
      status: 'CS Review',
      launch: 'test',
      notes: 'Cole is reviewing currently',
      id: crypto.randomUUID(),
    },
    {
      name: 'Project 456',
      bu: 'DTC',
      owner: 'Alissa',
      status: 'Client Review',
      launch: 'test',
      notes: 'Cole is reviewing currently',
      id: crypto.randomUUID(),
    },
  ]);

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

function Task({ task, tasks, setTasks }) {
  function handleRemoveTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <tr>
      <td>
        <button onClick={(e) => handleRemoveTask(e.target.id)} id={task.id}>
          ❌
        </button>
        {task.name}
      </td>
      <td>{task.bu}</td>
      <td>{task.owner}</td>
      <td>{task.status}</td>
      <td>{task.launch}</td>
      <td>{task.notes}</td>
    </tr>
  );
}

function Project({ project, projects, setProjects }) {
  function handleRemoveProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }
  return (
    <tr>
      <td>
        <button
          onClick={(e) => handleRemoveProject(e.target.id)}
          id={project.id}
        >
          ❌
        </button>
        {project.name}
      </td>
      <td>{project.bu}</td>
      <td>{project.owner}</td>
      <td>{project.status}</td>
      <td>{project.launch}</td>
      <td>{project.notes}</td>
    </tr>
  );
}

function TaskTable({ activeBoard, tasks, projects, setTasks, setProjects }) {
  const newTask = {
    name: `Campaign ${crypto.randomUUID().slice(0, 3)}`,
    bu: 'DTC',
    owner: 'Alissa',
    status: 'Client Review',
    launch: 'test',
    notes: 'Cole is reviewing currently',
    id: crypto.randomUUID(),
  };
  const newProject = {
    name: `Project ${crypto.randomUUID().slice(0, 3)}`,
    bu: 'DTC',
    owner: 'Alissa',
    status: 'Client Review',
    launch: 'test',
    notes: 'Cole is reviewing currently',
    id: crypto.randomUUID(),
  };

  function handleAddItem() {
    activeBoard === 'tasks'
      ? setTasks([...tasks, newTask])
      : setProjects([...projects, newProject]);
  }

  return (
    <section className='task-list'>
      <h2>{activeBoard === 'tasks' ? 'Tasks' : 'Projects'} </h2>
      <button className='add' onClick={handleAddItem}>
        Add {activeBoard === 'tasks' ? 'Task' : 'Project'}
      </button>
      <table>
        <thead>
          <tr>
            <th>
              {activeBoard === 'tasks' ? 'Campaign Name' : 'Project Name'}
            </th>
            <th>BU</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Launch Date</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {activeBoard === 'tasks'
            ? tasks.map((task) => {
                return (
                  <Task
                    task={task}
                    tasks={tasks}
                    key={task.id}
                    setTasks={setTasks}
                  />
                );
              })
            : projects.map((project) => {
                return (
                  <Project
                    project={project}
                    projects={projects}
                    key={project.id}
                    setProjects={setProjects}
                  />
                );
              })}
        </tbody>
      </table>
    </section>
  );
}

export default App;

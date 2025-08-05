import { useState } from 'react';

function App() {
  const [activeBoard, setActiveBoard] = useState('tasks');

  return (
    <main className='App'>
      <Header />
      <div className='row'>
        <Sidebar activeBoard={activeBoard} setActiveBoard={setActiveBoard} />
        <TaskTable activeBoard={activeBoard} />
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

function TaskTable({ activeBoard }) {
  return <p>{activeBoard === 'tasks' ? 'Tasks' : 'Projects'} </p>;
}

export default App;

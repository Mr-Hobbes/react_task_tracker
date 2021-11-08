import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import About from './components/About'




function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className="container">
        <Header toggleAddTask={() => setShowAddTask(!showAddTask)} toggleAddBtn={showAddTask}/>
        <Routes>
          <Route path='/' element={<TaskList toggleAddTask={showAddTask}/>}/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

import { useState } from 'react'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import Counter from './components/Counter.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const [showModal, setShowModal] = useState(false)


  function onTodoDelete(){
    console.log('onTodoDelete()')
    setShowModal(true)
  }

  function cancelModal(){
    return (
        setShowModal(false)
    )
}

function confirmModal(){
    return (
        setShowModal(false)
    )
}

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" 
      paragraph="Code along with Frontend Simplified"
      />
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" 
      paragraph="Finish Interview section in the next 6 weeks"
      />
      <Todo onTodoDelete={onTodoDelete} title="Land a Six Figure Job" 
      paragraph="Apply to 100 jobs"
      />
    </div>
    {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Are you sure?" />}
    </>
  );
}
export default App

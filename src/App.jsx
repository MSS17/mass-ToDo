import { useState } from 'react'
import './App.css'
// import { useEffect } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [entrada, setEntrada] = useState('')
  const buscardorTarea = ({target}) => setEntrada(target.value)
  const crearTarea = (e) => {
    e.preventDefault();
    setTareas([{id: Date.now(), pendiente: entrada, estado: false}, ...tareas])
    setEntrada('')
  }
  const modificarTarea = (id) => {
    const arrayModificar = [...tareas]
    const elementos = arrayModificar.find( elemento  => elemento.id === id)
    elementos.estado = !elementos.estado
    setTareas(arrayModificar)
  }
  const eliminarTarea = () => setTareas(tareas.filter((tareas) => !tareas.estado))
  // console.log(tareas)
  return (
    <>
      <p className='title'>Ejercicio ? ToDo list</p>
      <div className="btns">
        <input className='inp' placeholder='Ingresa una actividad' type="text" value={entrada} onChange={buscardorTarea}/>
        <button className='btn btn-add' onClick={crearTarea}>Agregar tarjeta</button>
        <button className='btn btn-delete'  onClick={eliminarTarea}>Eliminar tarjeta</button>
      </div>
      <div className="container">
        <p className='subtitle'>Lista de tareas</p>
        <div className="container-card">
          {tareas.map(({id,estado,pendiente}) =>(
            <div className='card' key={id}>
              <p className={`text ${estado ? 'completed-tasks' : ''  }`} onClick={() => modificarTarea(id)}> <span className='icon'>{estado ? '✔️' : ''}</span> {pendiente}</p>
            </div>
          ))}
        </div>
        <div className="container-jobs">
          <p>Total de tareas <span>{tareas.length}</span></p>
          <p>Tareas realizadas <span>{tareas.filter(elementos => elementos.estado).length}</span></p>
          <p>Tareas pendientes <span>{tareas.filter(elementos => !elementos.estado).length}</span></p>
        </div>
      </div>
    </>
  )
}
export default App

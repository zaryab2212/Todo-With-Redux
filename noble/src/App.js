import './App.css';
import {useEffect, useState} from "react"
import { useSelector,useDispatch} from "react-redux"
import { add, edit, remove } from './redux/todoSlice';

function App() {
const [text, setText]= useState()
const [editState, setEditState]= useState(null)

const todo = useSelector((state)=> state.todo.todos)
const dispatch = useDispatch()

const handleEdit = (ele,i)=>{
  setEditState(ele)
  setText(ele)
}

const handleButton = (e)=>{
  e.preventDefault()
  if(!editState){
    dispatch(add(text))

  }
  dispatch(edit({editState,text}))
  setEditState(null)
  setText("")

}

const handleDell = (i)=>{
    dispatch(remove(i))
      setText("")
    }

return (
  <>
  <h2 className='Heading'>Todo List With Redux
  </h2>
<form  onSubmit={handleButton}>
  <input onChange={(e)=> setText(e.target.value)} value={text} type="text" placeholder="Enter your todo"/>
{text && (
    <span>
    <button className='btn' type='submit' onClick={handleButton}>
      
    {editState ? "Edit ": "ADD"}</button>

  </span>
)}
  </form>
  <h2 className='Heading'>TodoList</h2>

   {todo?.map((ele,i)=>(<div className='form'>
    <span className='serialNo' >{i+1}</span>
      <span className='todo'>{ele}</span>
      <span>
       <button style={{backgroundColor: "chocolate"}} className='btn' onClick={(e)=>handleEdit(ele,i)}>Edit</button>  
       <button style={{backgroundColor: "red"}} className='btn' onClick={()=>handleDell(ele)}> Dell</button> 
      </span>  
    </div>)
  )}     
  </>
  )
}
export default App;

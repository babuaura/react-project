import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import classes from './styles.module.css'
import { TodoItems, TotoDetails } from './components/todo-details/index'
import { Skeleton } from '@mui/material'

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  // const [setErrorMsg, setSetErrorMsg] = useState([]);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchListOfTodo = async ()=> {
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      if(result?.todos && result?.todos.length > 0){
        setTodoList(result?.todos);
        setLoading(false);
        // setErrorMsg('');
      }
      else{
        setTodoList([]);
        setLoading(false);
        // setErrorMsg('Some Error Occured');

      }
    }catch(e){
      console.log("Error", e);
    }

  };

  const fetchDetailsById = async (getId)=>{
    console.log(getId);
    
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getId}`);
      const result = await apiResponse.json();

      console.log(result);
      if(result){
      setTodoDetails(result);
      setOpenDialog(true);
      // setErrorMsg('');  
    } else{
      setTodoDetails(result);
      setOpenDialog(false);
      // setErrorMsg('Error Occured');  
      
    }

    }catch(e){
      console.log(e);
      // setErrorMsg('Some Error Ocurred on Getting Single data');
      
    }

  }

  useEffect(()=>{

    fetchListOfTodo();
  },[]);

  if(loading) {
    return (
    <>
    {/* <h2>Please wait, It's loading .....</h2> */}
    <Skeleton variant='rectangular' width={650} height={650}></Skeleton>
    </>
    )
  }

  return (
    <>
    <div className ={classes.mainWrapper}>
      <h1> Material UI</h1>
      <h2 className ={classes.headerTitle}>Simple TODO App using Material UI</h2>
      <div className = {classes.todolistWrapper}>
        {
          todoList && todoList.length > 0 
          ? todoList.map(item => <TodoItems todo = {item} fetchDetailsById = { fetchDetailsById }/>) 
          : null
        }

      </div>

    </div>
    <TotoDetails todoDetails = {todoDetails}  openDialog = {openDialog} setOpenDialog = {setOpenDialog} setTodoDetails = {setTodoDetails}/>
    </>
  )
}

export default App

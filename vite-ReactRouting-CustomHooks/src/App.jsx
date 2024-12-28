import { Children, useState } from 'react'
import './App.css'
import { RecipeList } from './pages/recipes'
import { CommentList } from './pages/comment/comment'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import { RecipeDetailsPage } from './pages/recipe-details'
import { NotFoundPage } from './pages/not-folder'
import { Layout } from './components/layout'
import { ReactHookForm } from './pages/react-hook-form-exmaple'
import { Hooks } from './pages/hooks/useRef'
import { UseMemo } from './pages/use-memo-example'
import { UseCallBack } from './pages/use-callback-hook'

//creating routes =2
const CustomRoutes = () => {
  return useRoutes([
    {
      path: '/home', element : <Layout/>,
      children : [
        { path: 'recipe-list', element : <RecipeList/> },
        { path: 'comment-list', element : <CommentList/> },
        { path: 'recipe-list/:id', element : <RecipeDetailsPage/> }
      ]
    },
    {
      path: '*', element : <NotFoundPage/>,
    },
    {
      path : '/react-hook-form', element : <ReactHookForm />
    },
    {
      path : '/react-hook', element : <Hooks />
    },
    {
      path : '/react-useMemo-hook', element : <UseMemo />
    },{
      path : "/react-useCallBack", element : <UseCallBack />
    }
  ]);
}
 
function App() {

  const navigate = useNavigate();

  return (
    <>
    {/* <h2>React Routing and Custom Hooks</h2>
    <h3>Navigator Hook</h3>
    <button onClick = {() => navigate("/home/recipe-list")} style ={{backgroundColor : "blue", color : "pink"}}>Navigate to Recipe List Page</button>
    <button  onClick = {() => navigate("/home/comment-list")} style ={{backgroundColor : "blue", color : "pink"}}>Navigate to Comment List Page</button>
    <h3>Link = other type to navigate</h3>
    <Link to = {"/home/recipe-list"}>
      <button>Link to Recipe List Page</button>
    </Link>
    <Link to = {"/home/comment-list"}>
      <button>Link to Comment List Page</button>
    </Link>
    <Link to = {"/home/recipe-list/:id"}>
      <button>Link to Recipe Details Page</button>
    </Link>

    //creating routes =1 */}
    {/* <Routes>
      <Route path = "/home" element = {<Layout />}>
        <Route path = "recipe-list" element = {<RecipeList />} />
        <Route path = "comment-list" element = {<CommentList />} />
        <Route path = "recipe-list/:id" element = {<RecipeDetailsPage/>}/>    
      </Route>
      <Route path = "*" element = {<NotFoundPage/>}/>    
    </Routes> */}
    <CustomRoutes />
    </>
  )
}

export default App

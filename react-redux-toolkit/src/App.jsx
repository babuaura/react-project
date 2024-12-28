import { AddNewBlog } from "./blog-app/add-new-blog"
import BlogList from "./blog-app/blog-list"
import { CounterButton } from "./counter-example/counter-button"
import { CounterValue } from "./counter-example/counter-value"

function App() {

  return (
    <>
      <h1>React Redux Toolkit - Blog List</h1>
      {/* <CounterButton /> */}
      {/* <CounterValue /> */}
      <AddNewBlog />
      <BlogList />
    </>
  )
}

export default App

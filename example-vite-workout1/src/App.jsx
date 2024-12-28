import { useState } from 'react'
import './App.css'
import ClassComponents from './components/class-components.jsx'
import FunctionalBasedComponents from './components/functional-components.jsx';
import { FormComponent } from './components/form/index.jsx';
import { LoginComponent } from './components/login/index.jsx';
import { RegisterComponent } from './components/register/index.jsx';
import { CommonForm } from './components/common-form/index.jsx';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>App = Root Created React with vite</h1>

      {/* <ClassComponents /> */}
      {/* <FunctionalBasedComponents /> */}
      {/* <FormComponent /> */}
      <div style = {{display : "flex", gap : "20px"}}>
        <LoginComponent/>
        <RegisterComponent/>
        {/* <CommonForm/> */}
      </div>
    </>
  );
};

export default App;
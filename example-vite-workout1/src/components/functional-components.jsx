import { useState } from 'react'
import '../App.css'
import ProductListFunction from './products/productIndex'
import Users from './users';
import { ContextButtonComponent } from './context-concept/button';
import { ContextTextComponent } from './context-concept/text';
import { UseReducerExmaple } from './use-reducer-example';

const ProductList = ["Product 1", "Product 2", "Product 3"];

const FunctionalBasedComponents = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Functional Based Created React with vite</h1>
    {/* <ProductListFunction name = "babu" age = "32" ProductList = {ProductList}/>  */}
    {/* <Users /> */}
    {/* <ContextButtonComponent/>
    <ContextTextComponent/> */}
    <UseReducerExmaple/>
    </>
  );
};

export default FunctionalBasedComponents;
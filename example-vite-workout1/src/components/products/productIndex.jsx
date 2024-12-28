import { useEffect, useState } from "react";
import ProductItems from "./productItems/ProductItems";
import './productStyle.css'

const ProductListFunction = ({name, age, ProductList}) => {

    // const flag = true ? <h4>Name is  {name} and age is {age}</h4> : <h4>Hello, Flag False</h4>;

    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

    // const renderBlock = (getflag) => {
    //     return getflag ? <h4>Name is  {name} and age is {age}</h4> : <h4>Hello, Flag False</h4>
    // };

    const toggleButton = ()=>{
        console.log("UseState action event");
        setFlag(!flag)
    }

    const IncrCount = () =>{
        setCount(count + 1);
    }

    useEffect(()=>{

        console.log("UseEffect on run time");
    
        return () =>{
            console.log("Component Unamounted");
            
        }
    },[])

    useEffect(()=>{

        console.log("count changes");
        if(count ===10) setChangeStyle(true);

    },[count])

    return (
        <>
            <h2 className = "title">ECommerce Project</h2>
            <button onClick={toggleButton}>Toogle</button>
           {
           /* {renderBlock(flag)} */
        //    flag
        flag ? <h4>Name is  {name} and age is {age}</h4> : <h4>Hello, Flag False</h4>
           }
           <button onClick={IncrCount}>Incr</button>
           <p style = {{ color: changeStyle ? "blue" : "red"}}>count is {count}</p>

            <ul>
                {
                    ProductList.map((item, index) => (<ProductItems singleProduct = {item} keyId = {index}/>))
                }
            </ul>
        </>
    );
};

export default ProductListFunction;
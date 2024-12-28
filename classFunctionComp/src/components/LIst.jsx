import React, {useState} from 'react'

export default function LIst() {
    const [list, setList] = useState(['Item1', 'Item2']);
    const [count, setCount] = useState(1);

    function addItem(){
        const itemName = 'Item'+count;
        setList((prevList)=>{return [...prevList, itemName]});
        setCount((prevCount)=>{return prevCount+1});
    }
  return (
    <>
        <h1>List</h1>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
                list.map((e, i)=><li key={i}>{e}</li>)
            }    
        </ul>

        </>
  )
}

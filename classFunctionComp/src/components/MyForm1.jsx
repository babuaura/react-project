import React, { useState, useEffect} from 'react'

export default function MyForm() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  const [formInput, setFormInput] = useState({
    name: "", 
    age: "", 
    email: "abc@gmail.com", 
    phone: "+91", 
    country: "India",
    about: "I am a Student"
  });

  // console.log("Current State: ", formInput.name);
  // console.log("Current State: ", formInput.age);
  // console.log("Current State: ", formInput.email);

  function formSubmit(e){
    e.preventDefault();
    // console.log("Form Submitted Name", formInput.name);
    // console.log("Form Submitted Age", formInput.age);
    // console.log("Form Submitted Email", formInput.email);
    console.log("Form Submitted Form Inputs", formInput);
  }

  function changeHandler(e) {
    // console.log("e.target", e.target);
    setFormInput((prevState) => {
      return {...prevState, [e.target.name]: e.target.value }})
    }

  return (
    <form action="" onSubmit={formSubmit}>
        <div>MyForm</div>
        <label htmlFor="name"> Enter your Name: 
            <input type="text" name="name" id="name" onChange={changeHandler}/>
        </label><br />
        <label htmlFor="age"> Enter your Age: 
            <input type="text" name="age" id="age" onChange={changeHandler}/>
        </label><br />
        <label htmlFor="email"> Enter your Email: 
            <input type="text" name="email" id="email" onChange={changeHandler} value= {formInput.email}/>
        </label><br />
        <label htmlFor="phone"> Enter your Phone: 
            <input type="text" name="phone" id="phone" onChange={changeHandler} value={formInput.phone}/>
        </label><br />
        <label htmlFor="country"> Enter your Country:
            <select name="country" id="country" onChange={changeHandler}  value={formInput.country}>
              <option value="" >Select</option>
              <option value="India" >India</option>
              <option value="Russia" >Russia</option>
              <option value="Australia" >Australia</option>
              <option value="USA" >USA</option>
            </select> 
        </label><br />
        <label htmlFor="about"> Enter About you:
          <textarea name="about" id="about" cols="30" rows="10" onChange={changeHandler}  value={formInput.about} />
        </label><br />
        <input type="submit" value="Submit" />
    </form>
  )
}

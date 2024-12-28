import { useState } from "react"

export const FormComponent = () =>{
    const [name, setName] = useState("");
    const [email, setEmai] = useState("");
    const [formData, setFormData] = useState({
        name : '',
        email : ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event?.target?.name] : [event?.target?.value]
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("name : ", event.target.elements.name.value);
        console.log("email : ", email);
        console.log("event : ", event);
    }

    return (
        <>
        <h1>Form Component</h1>
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "name" id = "name" placeholder = "Please Enter the name" value = {formData?.name} onChange = { handleInputChange }/>
            <input type = "email" name = "email" id = "email" placeholder = "Please Enter the email" value = {formData?.email} onChange = { handleInputChange }/>
            <button type = "submit">Submit</button>
        </form>
        </>
    )
}
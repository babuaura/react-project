import { useState } from "react";
import { CommonForm } from "../common-form";
import { loginFormElements, registerFormElements } from "../../config";

const initalFormData = {
    name : '',
    email : '',
    password : ''
};

export const RegisterComponent = () =>{

    const [registerFormData , setRegisterFormData] = useState(initalFormData);

    const onHandleSubmit = () => {
        event.preventDefault();
        
        setRegisterFormData(initalFormData);

    }

    return (
        <>
        <h2>Register Component</h2>
        <CommonForm formControls = {registerFormElements} formData = {registerFormData} setFormData = {setRegisterFormData}
        buttonText = {'submit'}  onHandleSubmit = {onHandleSubmit}/>
        </>
    )
}
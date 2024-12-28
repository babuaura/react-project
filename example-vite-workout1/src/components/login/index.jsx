import { useState } from "react";
import { CommonForm } from "../common-form";
import { loginFormElements } from "../../config";

const initalFormData ={
    email : '',
    password : ''
};

export const LoginComponent = () => {

    const [loginFormData, setLoginFormData] = useState(initalFormData);

    const onHandleSubmit = () => {
        event.preventDefault();

        setLoginFormData(initalFormData);        
    };

    return (
        <>
        <h1>LogIn Component</h1>
        <CommonForm formControls = {loginFormElements} formData = {loginFormData} setFormData = {setLoginFormData} 
        buttonText = {'Login'} onHandleSubmit = {onHandleSubmit}/>
        </>
    );
}
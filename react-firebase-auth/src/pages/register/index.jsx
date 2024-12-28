import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
import { RegisterFrom } from '../../config';
import { CommonForm } from '../../components/common-form';
import { updateProfile } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import auth from "../../firebase.config";

export const RegisterPage = () => {

    const {registerFormData, setRegisterFormData, RegisterWithFirebase, user, isLoading} = useContext(GlobalContext);

    const navigate = useNavigate();

    const RegisterOnSubmit = async (event) => {
        event.preventDefault();

        const result = await RegisterWithFirebase()

        if(result?.user){
            updateProfile(result.user, {
                displayName : registerFormData.name
            });

            if(auth?.currentUser.displayName) navigate('/profile')
        }
    }

    if(isLoading) return <h2>Loading Please Wait</h2>

    if(user) return <Navigate to = '/profile'/>

  return (
    <div>
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome back</h3>
                <p>Register Page</p>
                <CommonForm
                formControls = {RegisterFrom}
                formData = {registerFormData}
                setFormData = {setRegisterFormData}
                onSubmit = {RegisterOnSubmit}
                buttonText = {"Save"}
                />
            </div>
        </div>
    </div>
  )
}
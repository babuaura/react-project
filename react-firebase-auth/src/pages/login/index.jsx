import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
import { LoginFromControls } from '../../config';
import { CommonForm } from '../../components/common-form';
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {

    const {loginFormData, setLoginFormData, user, isLoading} =useContext(GlobalContext);

    const handleLoginOnSubmit = async() =>{

        const result = await LoginWithFirebase ();

        if(result) return <Navigate to = '/profile'/>

    }

    if(isLoading) return <h2>Loading... please wait</h2>

    if(user) return <Navigate to = '/profile'/>

    return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
    <div className="px-6 py-5">
      <h1>Welcome Back</h1>
      <p>Login Page</p>
      <CommonForm
        formControls={LoginFromControls}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        onSubmit={handleLoginOnSubmit}
      />
    </div>
  </div>
);
}

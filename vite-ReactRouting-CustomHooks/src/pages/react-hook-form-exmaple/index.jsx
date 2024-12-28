import React from 'react'
import { useForm } from 'react-hook-form'; 

export const ReactHookForm = () => {

    const {register, handleSubmit, formState : {errors}, reset} = useForm();

    const onSubmitForm = (formData) => {
        console.log("formData", formData);

        reset();
    }

  return (
    <div>
        <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label>Email</label>
                <input {...register("email", {required : true})} type="email" name="email" id="email"/>
                {
                    errors.email && errors.email.type === 'required' ? 
                    <p style = {{color : "red", fontWeight : 'bolder', margin : '20px'}}>Email is Required</p> : null
                }
            </div>
            <div>
                <label>Password</label>
                <input {...register("password", {required : true , minLength : 5, maxLength : 10})} type="password" name="password" id="password" />
                {
                    errors.password && errors.password.type === 'required' ? 
                    <p style = {{color : "red", fontWeight : 'bolder', margin : '20px'}}>Password is Required</p> : null
                }
                {
                    errors.password && errors.password.type === 'minLength' ? 
                    <p style = {{color : "red", fontWeight : 'bolder', margin : '20px'}}>Password Length minimum 5 is Required</p> : null
                }
                {
                    errors.password && errors.password.type === 'maxLength' ? 
                    <p style = {{color : "red", fontWeight : 'bolder', margin : '20px'}}>Password Length Maximum crossed10 is Required</p> : null
                }
            </div>
            <button type = "submit">Submit</button>
        </form>
    </div>
  )
}

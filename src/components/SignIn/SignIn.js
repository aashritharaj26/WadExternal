import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function SignIn() {
    let navigate=useNavigate()
    function handleFormSubmit(){
        alert("Sign In Successful!");
        navigate('/catalogue')
    }
    let {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm()
  return (
    <div className='card w-50 m-auto mt-5 mb-5'>
        <div className='card-header'>
            <h1 className='text-center'>Sign In</h1>
        </div>
        <div className='card-body'>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <div className=''>
                    <label htmlFor='username' className='form-label'>username</label>
                    <input type='text' className='form-control' id="username" {...register("username",{required:true,minLength:4,maxLength:10})}/>
                    {errors.username?.type==='required' && (
                        <p className='text-danger'>please enter username</p>
                    )}
                    {errors.username?.type==='minLength' && (
                        <p className='text-danger'>minlength is 4</p>
                    )}
                    {errors.username?.type==='maxLength' && (
                        <p className='text-danger'>maxLength is 10</p>
                    )}
                </div>
                <div className=''>
                    <label htmlFor='password' className='form-label'>password</label>
                    <input type='password' className='form-control' id="password" {...register("password",{required:true})}/>
                    {errors.password?.type==='required' && (
                        <p className='text-danger'>please enter password</p>
                    )}
                </div>
                <button type='submit' className='btn btn-primary mt-3 w-75 d-block m-auto '>Sign In</button>
              
            </form>
        </div>
    </div>
  )
}

export default SignIn
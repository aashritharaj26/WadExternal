import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function SignUp() {
    let navigate=useNavigate()
    function handleFormSubmit(){
        alert("Sign Up Successful!");
        navigate('/signin')
    }
    let {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm()
  return (
    <div className='card w-50 m-auto mt-5 mb-5'>
        <div className='card-header'>
            <h1 className='text-center'>Sign Up</h1>
        </div>
        <div className='card-body'>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className=''>
                    <label htmlFor='firstname' className='form-label'>First Name</label>
                    <input type='text' className='form-control' id="firstname" {...register("firstname",{required:true})}/>
                    {errors.firstname?.type==='required' && (
                        <p className='text-danger'>please enter first name</p>
                    )}
                </div>
                <div className=''>
                    <label htmlFor='lastname' className='form-label'>Last Name</label>
                    <input type='text' className='form-control' id="lastname" {...register("lastname",{required:true})}/>
                    {errors.lastname?.type==='required' && (
                        <p className='text-danger'>please enter last name</p>
                    )}
                </div>
                <div className=''>
                    <h4 className='fs-5 mt-1'>Address</h4>
                    <label htmlFor='city' className='form-label'>City</label>
                    <input type='text' className='form-control' id="city" {...register("city",{required:true})}/>
                    {errors.city?.type==='required' && (
                        <p className='text-danger'>please enter city</p>
                    )}
                </div>
                <div className=''>
                    <label htmlFor='state' className='form-label'>State</label>
                    <input type='text' className='form-control' id="city" {...register("state",{required:true})}/>
                    {errors.state?.type==='required' && (
                        <p className='text-danger'>please enter state</p>
                    )}
                </div>
                <div className=''>
                    <label htmlFor='country' className='form-label'>Country</label>
                    <input type='text' className='form-control' id="country" {...register("country",{required:true})}/>
                    {errors.country?.type==='required' && (
                        <p className='text-danger'>please enter country</p>
                    )}
                </div>
                <div className='radio mt-3 mb-3'>
                <label htmlFor='gender' className='form-check-inline fw-bold'>Gender</label>
    
                    <input type='radio' className='form-check-input' id="gender" value="female" {...register("gender")}/>
                    <label htmlFor='gender' className='form-check-label ms-1'>female</label>
                 
                    <input type='radio' className='form-check-input  ms-4' id="gender" value="male" {...register("gender")}/>
                    <label htmlFor='gender' className='form-check-label ms-1'>male</label>
                </div>
               
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
                <button type='submit' className='btn btn-primary mt-3 w-75 d-block m-auto '>Sign Up</button>
              
            </form>
        </div>
    </div>
  )
}

export default SignUp
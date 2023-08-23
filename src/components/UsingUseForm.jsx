import React, { useState } from 'react'
import "./FormValidation.css"
import { useForm } from 'react-hook-form'
const UsingUseForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const password = watch("password")
    const onSubmit = (data) => console.log(data)


    return (
        <>
            <div className='container'>
                <h1>Using useForm FormValidation</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name'>Name :</label>
                        <input type='text' name="name" {...register("name", { required: "Name is Required" })} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email :</label>
                        <input type='email' name="email" {...register("email", { required: "Email is Required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email" } })} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='password'>Password :</label>
                        <input type='password' name="password" {...register("password", { required: "Password is Required", minLength: { value: 6, message: "Password must b at least 6 character" } })} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>ConfirmPassword :</label>
                        <input type='password' name="'confirmPassword" {...register("confirmPassword", { required: "confirmPassword is Required", validate: value => value === password || "Password do Not match" })} />
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='Age'>Age :</label>
                        <input type='text' name="'age" {...register("age", { required: "age is Required", validate: value => isNaN(value) || value > 18 || "Age must be Grater Then 18 and must be a Number" })} />
                        {errors.age && <span>{errors.age.message}</span>}
                    </div>
                    <div>
                        <label htmlFor='gender'>Gender :</label>
                        <select name='gender' {...register("gender", { required: "gender is Required" })}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <span>{errors.gender.message}</span>}
                    </div>

                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default UsingUseForm
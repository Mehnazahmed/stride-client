import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    
    const [createdUserEmail,setCreatedUserEmail]= useState('')
    
    
     const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
     }
    
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                 updateUser(userInfo)
                   .then(() => {
                         saveUser(data.name,data.email,data.role);
                     })
                     .catch(err => console.log(err))

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });

             const saveUser = (name,email,role)=>{
                 const user ={name,email,role};
                 fetch('http://localhost:5000/users',{
                     method: 'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                     body: JSON.stringify(user)
                 })
                 .then(res=>res.json())
                .then(data=>{
                    
                    setCreatedUserEmail(email)
                 })
             }
    }

    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center' >Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >


                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text' {...register("name", {
                            required: "name is required"
                        })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' {...register("email", {
                            required: "email is required"
                        })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: 'password must be 6 characters' },
                            pattern: { value: /(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/, message: "password must be strong" }
                        })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <select {...register("role")}>
                     <option value="user">User</option>
                     <option value="seller">Seller</option>
                     <option value="buyer">Buyer</option>
                      
                     </select>

                    <input className='btn btn-accent w-full my-5' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already Have an Account <Link className='text-secondary' to='/login'>  Please Log in</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>



            
        </div>

        
    );
};

export default Signup;
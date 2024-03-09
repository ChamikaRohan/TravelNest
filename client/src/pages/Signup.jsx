import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function Signup() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (event)=>
  {
      setFormData({
        ...formData,
        [event.target.id] : event.target.value,
      })

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch("/api/auth/signup", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success == false)
      {
        setLoading(false);
        setError(data.message);
        return;
      }
      console.log(data);
      setLoading(false);
      setError(null);
      navigate('/sign-in');  
    }
    catch(e)
    {
      setLoading(false);
      setError(e.message);
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type='text' placeholder='username' className="boarder p-3 rounded-lg " id="username"/>
        <input onChange={handleChange} type='email' placeholder='email' className="boarder p-3 rounded-lg " id="email"/>
        <input onChange={handleChange} type='password' placeholder='password' className="boarder p-3 rounded-lg " id="password"/>
        <button disabled={loading} className='uppercase bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80 '>{loading? 'Loading...' : 'Sign up'}</button>
        <OAuth/>
      </form>
      <div className='flex text-blue gap-2 mt-5'>
        <p>
          Have an account?
        </p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>
            Sign in
          </span>
        </Link>
      </div>
      <div className='text-red-500 mt-3'>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

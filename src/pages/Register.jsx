import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'

export default function Register() {
  const [usrename,setUsrename]=useState("")
  const [usreemail,setUsreemail]=useState("")
  const [usrepassword,setUsrepassword]=useState("")
  const [confirmpass,setConfirmpass]=useState("")
  let move=useNavigate()
  const userData={
    usrename,
    usreemail,
    usrepassword,
    userSignin:false
  }
  const storage=(name,x)=>{
    localStorage.setItem(name,JSON.stringify(x))
  }
  const submit=(e)=>{
    if(usrepassword==confirmpass){
      e.preventDefault()
    storage("userData",userData)
    alert(`you're welcome ${userData.usrename}`)
    setUsrename("")
    setUsreemail("")
    setUsrepassword("")
    setConfirmpass("")
    setTimeout(()=>{
     move("/login")
    },1000)
    }else{
      alert("a password is not confirmed")
    }
  }

  return (
    <div className='  bg-slate-900 h-[1000px] md:h-[750px] flex justify-center items-center'>
    <div className=' container w-[90%] m-auto text-slate-200 grid grid-cols-1 md:grid-cols-2 '>
     <div className='w-[90%] md:ml-auto m-auto '>
      <img className='w-full' src="./src/assets/images/illustration-stay-productive.png" alt="#" />
     </div>
     <div>
      <form onSubmit={submit}
      className=' text-slate-900 md:w-[80%] gap-3 w-[90%] lg:h-[80%] h-[100%] grid grid-cols-1 my-[10px]  m-auto border-2 rounded-xl p-6 '>
      <h2 className='text-center text-white text-3xl my-2'>Sign up</h2>
        <input 
        value={usrename}
        onChange={(e)=>setUsrename(e.target.value)}
        className='p-1 h-10 rounded-lg outline-0' 
        type="text"
        placeholder='Enter your full name' 
        required/>
        <input 
        value={usreemail}
        onChange={(e)=>setUsreemail(e.target.value)}
        className='p-1 h-10 rounded-lg outline-0' 
        type="email"
        placeholder='Enter your email' 
        required/>
        <input 
        value={usrepassword}
        onChange={(e)=>setUsrepassword(e.target.value)}
        className='p-1 h-10 rounded-lg outline-0' 
        type="password" 
        placeholder='Enter your password' 
        required/>
        <input 
        value={confirmpass}
         onChange={(e)=>setConfirmpass(e.target.value)}
        className='p-1 h-10 rounded-lg outline-0' 
        type="password" 
        placeholder='Confirm password ' 
        required/>
        <input 
        
        className='border-1 shadow-[0_0_10px_#ddd] m-auto rounded-[30px] text-base lg:text-lg w-[40%] md:w-[30%] h-[40px] hover:bg-slate-400 text-white transition duration-150'
        type="submit" 
        value="sign up" />
        <p className='text-center text-white'>have an account <Link className='text-blue-500' to="/login"> Sign in</Link> </p>
      </form>
     </div>
     
    </div>
  </div>
  )
}

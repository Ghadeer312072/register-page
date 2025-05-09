import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Landing() {
 const move=useNavigate()
  const [user,setUser]=useState(localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")):"")
 const getstart=()=>{
if(user){
  alert(`hi ${user.usrename}`)
}else{
move("/signup")
}
 }
  return (
    <section className=' text-slate-100 pt-[150px] h-[1000px] mb-10'>
      <div className='container w-[85%] md:w-[90%] m-auto flex flex-col items-center  gap-[30px]'>
        <div className=''>
          <img className='m-auto' src="/src/assets/images/illustration-intro.png" alt="#" />
        </div>
        <div className='text-center space-y-6'>
          <h1 className='text-xl md:text-[40px] font-semibold '>Lorem ipsum dolor sit amet consectetur.</h1>
          <p className='" font-normal text-sm md:text-lg px-[15px] md:w-[600px] md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit rem quam tempore dolor tempora beatae sint illo. Fugiat, magnam</p>
          <button className='border-1 shadow-[0_0_20px_#ddd] rounded-[30px] text-lg w-[30%] h-[50px] my-5 hover:bg-slate-400 transition duration-150'onClick={getstart} >Get started</button>
        </div>
      </div>
    </section>
  )
}

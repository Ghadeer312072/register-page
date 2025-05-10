import { React, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const x = useRef()
  const navX = useRef()
  const navY = useRef()
  const move = useNavigate()
  const location = useLocation()
  const usersign=JSON.parse(localStorage.getItem("usersign"))

  const [user, setUser] = useState(null)
 
useEffect(()=>{
       const changeHeaderHeight=()=>{
    if(!x.current)return;
    if(window.scrollY>60){
      x.current.classList.add("bg-slate-900");
      x.current.classList.add("md:h-[90px]")
    }else{
      x.current.classList.remove("bg-slate-900");
      x.current.classList.remove("md:h-[100px]")
    }
    }
    
  window.addEventListener("scroll",changeHeaderHeight)
  return ()=>removeEventListener("scroll",changeHeaderHeight)
  },[])
 
  const updateUserData=()=>{
 const storedUser = localStorage.getItem("userData")
   setUser(storedUser ? JSON.parse(storedUser): null) 
  }
  useEffect(()=>{
     updateUserData()
    window.addEventListener("storage",updateUserData)
     if(! navX.current||!navY.current)return;
    if (user&&location.pathname=="/"&&usersign) {
      navX.current?.classList.add("hidden")
      navY.current?.classList.remove("hidden")
      navY.current?.classList.add("flex")

    } else {
      navX.current?.classList.remove("hidden")
      navY.current?.classList.add("hidden")
    }
    return()=> window.removeEventListener("storage",updateUserData)
    
  },[location.pathname,usersign])
  

  const logoutAction = () => {
    localStorage.removeItem("userData")
    setUser(null)
    move("/signup")
  }

   return (
  
    <div ref={x} className="container fixed h-32 md:h-[100px] top-0 max-w-full transition-all duration-150 text-white">
      <div className='m-auto flex flex-col py-2 md:flex-row max-w-full md:w-[90%] items-center h-full md:justify-between'>
        <Link to="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </Link>
        <nav>
          <ul ref={navX} className='flex space-x-5 mt-4'>
            <li className='hover:border-b-2 h-6 w-12 pb-1'><Link to="/">Home</Link></li>
            <li className='hover:border-b-2 h-6 w-14 pb-1'><Link to="/login">Sign in</Link></li>
            <li className='hover:border-b-2 h-6 w-14 pb-1'><Link to="/signup">Sign up</Link></li>
          </ul>
          <ul ref={navY} className='hidden  w-[200px] items-center'>
            <li className='w-[50%] flex gap-1 text-xl'>
              <p>{user?.usrename}</p>
              <img className='rounded-xl w-[40%] bg-gray-400 px-1' src="/src/assets/images/person-male-svgrepo-com.svg" alt="#" />
            </li>
            <li className='w-[40%] ml-[40px]  text-xl'>
              <button className='border-2 p-2 rounded-lg hover:bg-slate-500' onClick={logoutAction} >logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

import React, {  useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const nameRef = useRef()
  const passwordRef = useRef()
  const move = useNavigate()
      

  const submit = (e) => {
    e.preventDefault()
    const storedData = localStorage.getItem("userData")
    if (!storedData) {
      alert("You don't have an account")
      return
    }

    const parsedData = JSON.parse(storedData)
    
    if (
      nameRef.current.value === parsedData.usrename &&
      passwordRef.current.value === parsedData.usrepassword
    ) {
      localStorage.setItem("usersign",true)
      alert(`Welcome back ${parsedData.usrename}!`)
      
      nameRef.current.value = ""
      passwordRef.current.value = ""
      setTimeout(()=>{
       move("/")
      },1000)
     
    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className='bg-slate-900 h-[1000px] md:h-[750px] flex justify-center items-center'>
      <div className='container w-[90%] m-auto text-slate-200 grid md:grid-cols-2 grid-cols-1'>
        <div className='w-[90%] md:ml-auto m-auto'>
          <img className='w-full' src="./src/assets/images/illustration-stay-productive.png" alt="#" />
        </div>
        <div>
          <form
            onSubmit={submit}
            className='lg:w-[60%] md:w-[90%] gap-3 lg:h-[70%] md:h-[80%] h-[100%] grid grid-cols-1 my-10 m-auto border-2 rounded-xl p-4'
          >
            <h2 className='text-center text-3xl my-2'>Sign in</h2>
            <input
              ref={nameRef}
              className='text-black p-1 h-10 md:h-8 rounded-lg outline-0'
              type="text"
              placeholder='Enter your username'
              required
            />
            <input
              className='text-black p-1 h-10 md:h-8 rounded-lg outline-0'
              ref={passwordRef}
              type="password"
              placeholder='Enter your password'
              required
            />
            <input
              className='border-1 shadow-[0_0_10px_#ddd] m-auto rounded-[30px] text-base lg:text-lg w-[40%] md:w-[30%] h-[40px] hover:bg-slate-400 hover:text-white transition duration-150'
              type="submit"
              value="Sign in"
            />
            <p className='text-center '>
              Don't have an account?
              <Link className='text-blue-500' to="/signup">
                Sign up
              </Link>
            </p>
            <p className='text-center '>
              <Link className='text-blue-500' to="/forgetpass">
               Forget password
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
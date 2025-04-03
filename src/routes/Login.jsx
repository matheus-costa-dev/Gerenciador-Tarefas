import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import { useState } from 'react'
import { formStyle } from '../customStyle'
import { getUserData, loginFirebase } from '../firebase/firebaseFunctions'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const {bgForm, bgButton, bgOnFocus, bgOutFocus, textButton, textColor} = formStyle


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isEmailFocus, setIsEmailFocus] = useState(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState(false)

  const navigate = useNavigate()

  async function onHandleSubmit(e){
    e.preventDefault()
    const toastId = toast.loading("Validando dados",{duration:5000})

    try {
        const user = await loginFirebase(email, password)
        const userData = await getUserData(user.uid)
        toast.success(`Bem vindo ${userData.fname}`, {id:toastId})
        navigate("/app")
    } catch (error) {
        toast.error(error.message, {id:toastId})
    }
  }

    return (
    <Layout>
    <Navbar />
    <Section >
    <form className={`text-2xl lg:text-base flex flex-col gap-4 p-2 lg:p-5 rounded-2xl ${bgForm} ${textColor}`} onSubmit={(e)=>onHandleSubmit(e)} >
    <h1 className='text-center text-3xl font-thin tracking-tight'>Login</h1>
        <input type="email" placeholder='Email' className={`rounded-2xl px-4 focus:outline-none ${isEmailFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setIsEmailFocus(true)  } onBlur={()=>setIsEmailFocus(false)}/>
        <input type="password" placeholder='Senha' className={`rounded-2xl px-4 focus:outline-none ${isPasswordFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setIsPasswordFocus(true)  } onBlur={()=>setIsPasswordFocus(false)}/>
        <button type='submit' className={`rounded-2xl  w-min px-5 py-1 mx-auto ${bgButton} ${textButton}`}>Logar</button>
    </form>

    </Section>
<Toaster />
    </Layout>
  )
}

export default Login

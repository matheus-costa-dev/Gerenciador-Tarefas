import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import { useState } from 'react'
import { formStyle } from '../customStyle'
import { signupFirebase } from '../firebase/firebaseFunctions'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const {bgForm, bgButton, bgOnFocus, bgOutFocus, textButton, textColor} = formStyle

function SignUp() {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isFNameFocus, setIsFNameFocus] = useState(false)
  const [isLNameFocus, setIsLNameFocus] = useState(false)
  const [isEmailFocus, setIsEmailFocus] = useState(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState(false)

  const navigate = useNavigate()

  async function onHandleSubmit(e){
    e.preventDefault()
    const toastId = toast.loading("Cadastrando",{duration:5000})

    try {
        await signupFirebase(email, password, fName, lName)
        toast.success("Cadastrado com sucesso", {id:toastId})
        navigate("/app")
    } catch (error) {
        toast.error(error.message, {id:toastId})
    }
  }


    return (
    <Layout>
    <Navbar />
    <Section >
    <form className={`flex flex-col gap-4 text-2xl lg:text-base lg:p-5 rounded-2xl ${bgForm} ${textColor}`} onSubmit={(e)=> onHandleSubmit(e)} >
    <h1 className='text-center text-3xl  font-thin tracking-tight'>SignUp</h1>
        <input type="text" placeholder='Nome' className={`rounded-2xl px-4 focus:outline-none ${isFNameFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setFName(e.target.value)} onFocus={()=>setIsFNameFocus(true)  } onBlur={()=>setIsFNameFocus(false)}/>
        <input type="text" placeholder='Sobrenome' className={`rounded-2xl px-4 focus:outline-none ${isLNameFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setLName(e.target.value)} onFocus={()=>setIsLNameFocus(true)  } onBlur={()=>setIsLNameFocus(false)}/>
        <input type="email" placeholder='Email' className={`rounded-2xl px-4 focus:outline-none ${isEmailFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setIsEmailFocus(true)  } onBlur={()=>setIsEmailFocus(false)}/>
        <input type="password" placeholder='Senha' className={`rounded-2xl px-4 focus:outline-none ${isPasswordFocus ? bgOnFocus : bgOutFocus}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setIsPasswordFocus(true)  } onBlur={()=>setIsPasswordFocus(false)}/>
        <button type='submit' className={`rounded-2xl  w-min px-5 py-1 mx-auto ${bgButton} ${textButton}`}>Cadastrar</button>
    </form>

    </Section>

        <Toaster />
    </Layout>
  )
}

export default SignUp

import Layout from "../components/Layout"
import NavbarApp from "../components/NavbarApp"
import { useAuth } from "../context/UseAuth"
import SectionApp from "../components/SectionApp"
import { formStyle } from "../customStyle"
import { useState } from "react"


function Profile() {
    const {user, isLoading} = useAuth()
    
    const [fname, setFname] = useState(user.fname)
    const [lname, setLname] = useState(user.lname)
    const [email, setEmail] = useState(user.email)
    
    const [fnameOnFocus, setFnameOnFocus] = useState(false)
    const [lnameOnFocus, setLnameOnFocus] = useState(false)
    const [emailOnFocus, setEmailOnFocus] = useState(false)


    const {bgForm, bgOnFocus, bgOutFocus,textButton,textColor } = formStyle
    
    if (isLoading) return <div>Carregando...</div>


    function onHandleSubmit(e){
        e.preventDefault()
        console.log(fname, lname, email)
    }
  return (
    <Layout>
        <NavbarApp />
        <SectionApp title={"Dados"}>
            <form 
            onSubmit={(e)=>{onHandleSubmit(e)}} 
            className={`flex flex-col gap-4 rounded-2xl p-4 w-full lg:w-1/2 ${bgForm}`}>
                <label htmlFor="fname">Nome</label>
                <input 
                type="text" 
                className={`rounded-2xl px-4 w-full ${fnameOnFocus ? bgOnFocus : bgOutFocus}`}
                value={fname} 
                name="fname"  
                onFocus={()=>setFnameOnFocus(true)} 
                onBlur={()=>setFnameOnFocus(false)}
                onChange={(e=>setFname(e.target.value))}
                />
                
                <label htmlFor="lname">Sobrenome</label>
                <input 
                type="text" 
                className={`rounded-2xl px-4 w-full ${lnameOnFocus ? bgOnFocus : bgOutFocus}`}
                value={lname} 
                name="lname"  
                onFocus={()=>setLnameOnFocus(true)} 
                onBlur={()=>setLnameOnFocus(false)}
                onChange={(e=>setLname(e.target.value))}
                />

                <label htmlFor="email">email</label>
                <input 
                type="email"
                className={`rounded-2xl px-4 w-full ${emailOnFocus ? bgOnFocus : bgOutFocus}`}
                 value={email}
                  name="email" 
                  onFocus={()=>setEmailOnFocus(true)} 
                  onBlur={()=>setEmailOnFocus(false)} 
                  onChange={(e=>setEmail(e.target.value))}
                  />

                <button 
                className={`${textButton} ${textColor} rounded-2xl bg-amber-400 px-4 lg:w-1/2 mx-auto`}
                type="submit">Alterar</button>
                
            </form>
        </SectionApp>
    </Layout>
  )
}

export default Profile

import Layout from "../components/Layout"
import NavbarApp from "../components/NavbarApp"
import { useAuth } from "../context/UseAuth"
import SectionApp from "../components/SectionApp"
import { formStyle } from "../customStyle"
import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

function Profile() {
  const { user, isLoading, changeUserData } = useAuth()

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")


  useEffect(() => {
    if (user) {
      setFname(user.fname || "")
      setLname(user.lname || "")
      setEmail(user.email || "")
    }
  }, [user])


  const [fnameOnFocus, setFnameOnFocus] = useState(false)
  const [lnameOnFocus, setLnameOnFocus] = useState(false)
  const [emailOnFocus, setEmailOnFocus] = useState(false)




  const { bgForm, bgOnFocus, bgOutFocus, textButton, textColor } = formStyle

  function onHandleSubmit(e) {
    e.preventDefault()
    const toastId = toast.loading("Alterando dados...")

    if (fname === "" || lname === "" || email === "") {
      toast.error("Preencha todos os campos", { id: toastId })
      return;
    }
    try {
      changeUserData(fname, lname, email)
      toast.success("Dados alterados com sucesso", { id: toastId })
    } catch (error) {
      console.error(error.message)
      toast.error("Erro ao alterar dados", { id: toastId })
    }
  }


  if (isLoading) return <Layout> <div>Carregando...</div></Layout>

  return (
    <Layout>
      <NavbarApp fname={fname}/>
      <SectionApp title={"Dados"}>
        <form
          onSubmit={(e) => { onHandleSubmit(e) }}
          className={`flex flex-col gap-4 rounded-2xl p-2 lg:p-5 w-full lg:w-1/2 ${bgForm}`}>
          <label htmlFor="fname">Nome</label>
          <input
            type="text"
            className={`rounded-2xl px-4 w-full ${fnameOnFocus ? bgOnFocus : bgOutFocus}`}
            value={fname}
            name="fname"
            onFocus={() => setFnameOnFocus(true)}
            onBlur={() => setFnameOnFocus(false)}
            onChange={(e => setFname(e.target.value))}
          />

          <label htmlFor="lname">Sobrenome</label>
          <input
            type="text"
            className={`rounded-2xl px-4 w-full ${lnameOnFocus ? bgOnFocus : bgOutFocus}`}
            value={lname}
            name="lname"
            onFocus={() => setLnameOnFocus(true)}
            onBlur={() => setLnameOnFocus(false)}
            onChange={(e => setLname(e.target.value))}
          />

          <label htmlFor="email">email</label>
          <input
            type="email"
            className={`rounded-2xl px-4 w-full ${emailOnFocus ? bgOnFocus : bgOutFocus}`}
            value={email}
            name="email"
            onFocus={() => setEmailOnFocus(true)}
            onBlur={() => setEmailOnFocus(false)}
            onChange={(e => setEmail(e.target.value))}
          />

          <button
            className={`${textButton} ${textColor} rounded-2xl bg-amber-400 px-4 lg:w-1/2 mx-auto`}
            type="submit">Alterar</button>

        </form>
      </SectionApp>
      <Toaster />
    </Layout>
  )
}

export default Profile

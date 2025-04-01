import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/UseAuth'

const links = [
    {text:"Perfil", path:"profile"},
]

function NavbarApp() {
    const { user, isLoading ,logOut } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    if (isLoading) return <div className='w-full mx-auto'>Carregando...</div>
    if (!user) return <div className='w-full mx-auto'>Usuário não logado</div>
    

    const handleNavigation = (path) => {
        // Se já estivermos na rota alvo, não navegar novamente
        if (!location.pathname.endsWith(path)) {
            navigate(path)
        }
    }

    return (
        <nav className='flex justify-around'>
            <h2 
                className='text-2xl cursor-pointer' 
                onClick={() => navigate("/app")}
            >
                {user.fname}
            </h2>
            <ul className='flex gap-4 items-center'>
                {links.map((link, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => handleNavigation(link.path)}
                            className='hover:underline'
                        >
                            {link.text}
                        </button>
                    </li>
                ))}
                <li>
                    <button 
                        onClick={() => logOut()}
                        className='bg-red-500 px-4 rounded-2xl text-white hover:bg-red-600'
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarApp
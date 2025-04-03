import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const onSubsCribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                navigate("/login");
                setIsLoading(false);
                return;
            }

            try {
                // Buscar os dados do usuário no Firestore
                const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                if (userDoc.exists()) {
                    setUser({
                        ...currentUser,
                        ...userDoc.data(),
                        // tasks: userDoc.data().tasks || [] 
                    });
                } else {
                    setUser(currentUser);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUser(currentUser); // Define o usuário mesmo se falhar ao buscar tarefas
            } finally {
                setIsLoading(false);
            }
        });



        return () => onSubsCribe();
    }, [navigate])


    async function addNewTask(newTask) {
        if (!user) return null
        try {
            const updatedTasks = [...(user.tasks || []), newTask]
            const userDoc = doc(db, "users", user.uid)
            await updateDoc(userDoc, { tasks: updatedTasks })
            setUser((prevUser) => ({ ...prevUser, tasks: updatedTasks }))
        } catch (error) {
            console.error(error.message)
        }
    }


    async function removeTask(taskId) {
        if (!user || !user.tasks) return null
        try {
            const updatedTasks = user.tasks.filter(task => task.id !== taskId)
            const userDoc = doc(db, "users", user.uid)
            await updateDoc(userDoc, { tasks: updatedTasks })
            setUser((prevUser) => ({ ...prevUser, tasks: updatedTasks }))

        } catch (error) {
            console.error(error.message)
        }
    }

    async function changeStatusTask(taskId) {
        if (!user || !user.tasks) return null

        try {
            const updatedTasks = user.tasks.map(task => {
                if (task.id === taskId) {
                    task.isCompleted = !task.isCompleted
                    if (task.isCompleted) task.finishedAt = new Date().toLocaleDateString()
                }

                return task
            }
            )

            const userDoc = doc(db, "users", user.uid)
            await updateDoc(userDoc, { tasks: updatedTasks })
            setUser((prevUser) => ({ ...prevUser, tasks: updatedTasks }))
        } catch (error) {
            console.error(error.message)
        }
    }


    function getTask(taskId) {
        if (!user || !user.tasks) return null
        const task = user.tasks.find(task => task.id === taskId)
        return task
    }

    async function getUserData() {
        if (!user) return null;

        try {
            const userDoc = doc(db, "users", user.uid);
            const userData = await getDoc(userDoc);
            if (userData.exists()) {
                return userData.data();
            }

            return null;


        } catch (error) {
            console.error(error.message)
        }
    }

    function logOut() {
        auth.signOut()
        setUser(null)
        navigate("/")
    }

    async function changeUserData(fname, lname, email) {

        try {
            const userDoc = doc(db, "users", user.uid)
            await updateDoc(userDoc, {
                fname,
                lname,
                email
            })
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <AuthContext.Provider value={{ user, isLoading, addNewTask, removeTask, changeStatusTask, getTask, logOut, getUserData, changeUserData }}>
            {children}
        </AuthContext.Provider>
    )

}
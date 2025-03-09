import React, { useState } from "react"
import { auth } from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../LoginComponent/LoginComponent.css"

const LoginComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("Login successful! 🎉 Redirecting...", {
                position: "bottom-right",
                autoClose: 1000,
                closeButton: false,
            })
            setTimeout(() => navigate("/"), 1500)
        } catch (err) {
            toast.error(err.message, {
                position: "bottom-right",
                autoClose: 3000,
                closeButton: false,
            })
        }
    }

    return (
        <div className="login-container">
            <ToastContainer />
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    className="login-input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="login-input password-input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="toggle-password-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginComponent

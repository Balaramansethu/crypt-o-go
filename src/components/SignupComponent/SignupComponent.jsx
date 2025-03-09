import React, { useState } from "react"
import { auth, googleProvider } from "../../../firebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../SignupComponent/SignupComponent.css"

const SignupComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            toast.success("Signup successful! 🎉 Redirecting...", {
                position: "bottom-right",
                autoClose: 2000,
                closeButton: false,
            })
            setTimeout(() => navigate("/"), 2500)
        } catch (err) {
            toast.error("User already registered. Redirecting to Login...", {
                position: "bottom-right",
                autoClose: 3000,
                closeButton: false,
            })
            setTimeout(() => navigate("/login"), 3000)
        }
    }

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            if (result?.user) {
                toast.success("Google signup successful! 🎉 Redirecting...", {
                    position: "bottom-right",
                    autoClose: 2000,
                    closeButton: false,
                })
                setTimeout(() => navigate("/"), 2500)
            }
        } catch (err) {
            toast.error("Google signup failed. Try again later.", {
                position: "bottom-right",
                autoClose: 3000,
                closeButton: false,
            })
        }
    }

    return (
        <div className="signup-container">
            <ToastContainer />
            <h2 className="signup-title">Signup</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <input
                    type="email"
                    className="signup-input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="signup-input password-input"
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
                <button type="submit" className="signup-btn">
                    Signup
                </button>
                <button
                    type="button"
                    className="google-btn"
                    onClick={handleGoogleSignup}
                >
                    Signup with Google
                </button>
            </form>
        </div>
    )
}

export default SignupComponent

import React, { useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    useLocation,
    Navigate,
} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../../firebaseConfig"
import HomeComponent from "../../components/HomeComponent/HomeComponent"
import ContactUsComponent from "../../components/ContactUsComponent/ContactUsComponent"
import AboutComponent from "../../components/AboutComponent/AboutComponent"
import Signup from "../../components/SignupComponent/SignupComponent"
import Login from "../../components/LoginComponent/LoginComponent"
import "../NavigationComponent/NavigationComponent.css"

const NavigationControls = ({
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
}) => {
    return (
        <div className="nav-controls">
            <input
                type="text"
                className="search-bar"
                placeholder="Search by symbol or price..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                className="search-bar"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All</option>
                <option value="gainers">Gainers (Price Increase)</option>
            </select>
            <select
                className="search-bar"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="price">Sort by Price</option>
                <option value="market_cap">Sort by Market Cap</option>
            </select>
        </div>
    )
}

const NavigationComponent = () => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [sort, setSort] = useState("price")
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setAuthChecked(true)
        })

        return () => unsubscribe()
    }, [])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    return (
        <Router>
            <div className="heading">
                <div className="nav-links">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                    <Link to="/contact">
                        <p>Contact us</p>
                    </Link>

                    {authChecked ? (
                        user ? (
                            <Link to="#" onClick={handleLogout}>
                                <p>Logout</p>
                            </Link>
                        ) : (
                            <>
                                <Link to="/login">
                                    <p className="pages">Login</p>
                                </Link>
                                <Link to="/signup">
                                    <p className="pages">Signup</p>
                                </Link>
                            </>
                        )
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={
                        !authChecked ? (
                            <div className="loading">Loading...</div>
                        ) : user ? (
                            <>
                                <NavigationControls
                                    search={search}
                                    setSearch={setSearch}
                                    filter={filter}
                                    setFilter={setFilter}
                                    sort={sort}
                                    setSort={setSort}
                                />
                                <HomeComponent
                                    search={search}
                                    filter={filter}
                                    sort={sort}
                                />
                            </>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactUsComponent />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default NavigationComponent

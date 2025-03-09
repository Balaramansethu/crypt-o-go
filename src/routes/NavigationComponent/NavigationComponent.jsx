import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import HomeComponent from "../../components/HomeComponent/HomeComponent"
import ContactUsComponent from "../../components/ContactUsComponent/ContactUsComponent"
import AboutComponent from "../../components/AboutComponent/AboutComponent"
import "../NavigationComponent/NavigationComponent.css"
const NavigationComponent = () => {
    return (
        <Router>
            <div className="heading">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="About">
                    <p>About</p>
                </Link>
                <Link to="contact">
                    <p>Contact us</p>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="About" element={<AboutComponent />} />
                <Route path="contact" element={<ContactUsComponent />} />
            </Routes>
        </Router>
    )
}

export default NavigationComponent

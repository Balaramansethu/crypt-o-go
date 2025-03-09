import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    useLocation,
} from "react-router-dom"
import HomeComponent from "../../components/HomeComponent/HomeComponent"
import ContactUsComponent from "../../components/ContactUsComponent/ContactUsComponent"
import AboutComponent from "../../components/AboutComponent/AboutComponent"
import "../NavigationComponent/NavigationComponent.css"

const NavigationControls = ({
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
}) => {
    const location = useLocation()

    if (location.pathname !== "/") {
        return null
    }

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

    return (
        <Router>
            <div className="heading">
                <div className="nav-links">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="about">
                        <p>About</p>
                    </Link>
                    <Link to="contact">
                        <p>Contact us</p>
                    </Link>
                </div>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <NavigationControls
                                search={search}
                                setSearch={setSearch}
                                filter={filter}
                                setFilter={setFilter}
                                sort={sort}
                                setSort={setSort}
                            />
                        }
                    />
                </Routes>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeComponent
                            search={search}
                            filter={filter}
                            sort={sort}
                        />
                    }
                />
                <Route path="about" element={<AboutComponent />} />
                <Route path="contact" element={<ContactUsComponent />} />
            </Routes>
        </Router>
    )
}

export default NavigationComponent

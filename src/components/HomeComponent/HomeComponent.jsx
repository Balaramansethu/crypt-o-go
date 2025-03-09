import React, { useEffect, useState } from "react"
import "./HomeComponent.css"
import ContentComponent from "../ContentComponent/ContentComponent"
import axios from "axios"
import ModalComponent from "../../elements/ModalComponent/ModalComponent"

const HomeComponent = () => {
    const [fetchApi, setFetchApi] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12
    const [selectedCoin, setSelectedCoin] = useState(null)

    const handleApi = () => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
            )
            .then((response) => {
                setFetchApi(response.data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }

    useEffect(() => {
        handleApi()
    }, [])

    const totalPages =
        fetchApi.length > 0 ? Math.ceil(fetchApi.length / itemsPerPage) : 1
    const displayedData = fetchApi.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div>
        <div className="main-container">
 {displayedData.length > 0 ? (
                    displayedData.map((result, index) => (
                        <div
                            className="coin-row"
                            key={index}
                            onClick={() => setSelectedCoin(result)}
                        >
                            <ContentComponent value={result} />
                        </div>
                    ))
                ) : (
                    <p>No matching results found.</p>
                )}


        </div>
                    {fetchApi.length > 0 && (
                        <div className="pagination">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
                            >
                                Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )}
                                {selectedCoin && (
                <ModalComponent
                    coin={selectedCoin}
                    onClose={() => setSelectedCoin(null)}
                />
            )}
                    </div>
    )
}

export default HomeComponent

import React from "react"
import "./HomeComponent.css"
import { useEffect, useState } from "react"
import ContentComponent from "../ContentComponent/ContentComponent"
import axios from "axios"

const HomeComponent = () => {
    const [fetchApi, setFetchApi] = useState()

    const handleApi = () => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
            )
            .then((response) => {
                setFetchApi(response.data)
            })
            .catch((error) => {
                {
                    error
                }
            })
    }

    useEffect(() => {
        handleApi()
    }, [])

    return (
        <div className="main-container">
            <div className="coin-row">
                {fetchApi &&
                    fetchApi.map((result, index) => (
                        <ContentComponent key={index} value={result} />
                    ))}
            </div>
        </div>
    )
}

export default HomeComponent

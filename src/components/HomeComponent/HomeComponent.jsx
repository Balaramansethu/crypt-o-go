import React from "react"
import "./HomeComponent.css"
import ContentComponent from "../ContentComponent/ContentComponent"

const HomeComponent = (props) => {
    return (
        <div className="main-container">
            <div>
                <div className="heading">
                    <p>Name</p>
                    <p className="coin-name">coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Market</p>
                </div>
                {props.value &&
                    props.value.map((result, index) => (
                        <ContentComponent key={index} value={result} />
                    ))}
            </div>
        </div>
    )
}

export default HomeComponent

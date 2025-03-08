import React from "react"
import "../ContentComponent/ContentComponent.css"
const ContentComponent = (props) => {
    return (
        <div className="coin-row">
            <p>{props.value.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.value.image} alt="image-symbol" />
                <p>{props.value.symbol.toUpperCase()}</p>
            </div>
            <p>${props.value.current_price.toLocaleString()}</p>
            <p>{props.value.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="hide-mobile">
                ${props.value.total_volume.toLocaleString()}
            </p>
            <p className="hide-mobile">
                ${props.value.market_cap.toLocaleString()}
            </p>
        </div>
    )
}

export default ContentComponent

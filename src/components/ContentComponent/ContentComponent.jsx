import React from "react"
import "../ContentComponent/ContentComponent.css"
const ContentComponent = (props) => {
    return (
        <div className="elements-inside-card">
            <div className="img-symbol">
                <img src={props.value.image} alt="image-symbol" />
                <p>{props.value.symbol.toUpperCase()}</p>
            </div>
            <p>
                <b>Current Price : </b>$
                {props.value.current_price.toLocaleString()}
            </p>
            <p>
                <b>Price Drop 24hrs : </b>
                {props.value.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="hide-mobile">
                <b>Total volume : </b>$
                {props.value.total_volume.toLocaleString()}
            </p>
            <p className="hide-mobile">
                <b>Market cap : </b>${props.value.market_cap.toLocaleString()}
            </p>
        </div>
    )
}

export default ContentComponent

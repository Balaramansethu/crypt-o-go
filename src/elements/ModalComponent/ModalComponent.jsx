import React from "react"
import "./ModalComponent.css"

const ModalComponent = ({ coin, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <h2>
                    {coin.name} ({coin.symbol.toUpperCase()})
                </h2>
                <p>
                    <b>Current Price:</b> ₹{coin.current_price.toLocaleString()}
                </p>
                <p>
                    <b>24h Change:</b>{" "}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p>
                    <b>Market Cap:</b> ₹{coin.market_cap.toLocaleString()}
                </p>
                <p>
                    <b>Total Volume:</b> ₹{coin.total_volume.toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default ModalComponent

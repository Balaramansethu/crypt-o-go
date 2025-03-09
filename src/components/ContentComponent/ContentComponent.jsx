import React from 'react'
import '../ContentComponent/ContentComponent.css'
const ContentComponent = (props) => {
    
  return (
    <div className='elements-inside-card'>
           {/* <div> <p>{props.value.market_cap_rank}</p></div> */}
            <div className='img-symbol'>
                <img src={props.value.image} alt='image-symbol'/>
                <p>{props.value.symbol.toUpperCase()}</p>
            </div>
            <p>Current Price : ${props.value.current_price.toLocaleString()}</p>
            <p>Price Drop 24hrs : {props.value.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="hide-mobile">Total volume : ${props.value.total_volume.toLocaleString()}</p>
            <p className="hide-mobile">Market cap : ${props.value.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default ContentComponent
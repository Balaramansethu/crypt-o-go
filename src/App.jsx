import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import axios from "axios";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

const App = (props) => {

const [fetchApi, setFetchApi] = useState()

const handleApi =()=>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
  .then((response)=>{setFetchApi(response.data)
  console.log(response.data[0])})
  .catch((error)=>{{error}})
}

useEffect(()=>{
  handleApi()
},[])

  return (
    <React.Fragment>
      <NavBarComponent/>
      <HomeComponent value={fetchApi}/>
    </React.Fragment>
  );
};

export default App;
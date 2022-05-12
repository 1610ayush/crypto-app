import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { LineChart } from "./LineChart";
import { Loader } from "./Loader";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

export function Coin(){

    const {coinId} = useParams()
    const [priceData, setPriceData] = useState(null)
    const [labels, setLabels] = useState(null)
    const [coin, setCoin] = useState(null)
    const {user} = useContext(AuthContext)

  
    useEffect(() => {
        const date = new Date()
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const firstDayUnix = firstDay.getTime() / 1000
        const currentDayUnix = date.getTime() / 1000

        function formatUnix(unixTimestamp) {
            const date = new Date(unixTimestamp)
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` 
        }
    
        async function fetchCoinMarketData(){
            return await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=inr&from=${firstDayUnix}&to=${currentDayUnix}`)
            .then(res => {
            setPriceData(res.data.prices.map(item => item[1]))
            setLabels(res.data.prices.map(item => formatUnix(item[0])))
            return res
            })
            .catch(err => {
            console.log(err)
            })
        }

        async function fetchCoin(){
            return await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => {
              console.log(res.data)
              setCoin(res.data)
              return res
            })
            .catch(err => {
              console.log(err)
            })
          }

          if(user){
            fetchCoinMarketData()
            fetchCoin()
          }
  
  
    }, [coinId, user]);

    return(
        <div> 
            {user ? (
                <>
                    {(!coin || !priceData) && <Loader /> }

                    {coin && priceData && (
                        <>
                            <TitleDiv className="py-5 d-flex align-items-centerr">
                                <img src={coin.image.small} alt={coin.name} />
                                <h2 className="fs-4 ms-2 pt-2" style={{"color": "#5d5d5d"}} >{coin.name}</h2>
                            </TitleDiv>
                        
                    
                        
                                <>
                                    {priceData && labels && (
                                    <LineChart 
                                        labels={labels} 
                                        coinId={coinId} 
                                        priceData={priceData} />
                                    )}
                                </>
                        
                        </>
                    )}
                </>
                ) : (
                    <p>You need to be logged in to view the chart</p>
                )}
             
        </div>
    )
}

const TitleDiv = styled.div`
    border-top: 1px solid #D3D3D3;
`
 



import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export function Home() {
  
    const [coins, setCoins] = useState(null)
  
    useEffect(() => {
  
      async function fetchCoinList(){
        return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res => {
          console.log(res)
          setCoins(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }

      fetchCoinList()
  
    }, []);
  
    
  
    return (
      <div> 
        
        {coins && (
          <ul>
            {coins.map(coin => {
              return(
                  <List key={coin.id} className="py-3 px-3 mt-2">
                    <img src={coin.image} alt={coin.id} style={{"height": "30px", "width": "30px"}} />
                    <StyledLink className='ms-3' to={`/${coin.id}`} >
                        {coin.name}
                    </StyledLink>
                  </List>
              )
            })}
          </ul>
        )}
      </div>
    );
  }

  const List = styled.li`
      list-style: none;
      border: 1px solid #D3D3D3;
      border-radius: 2px;
    `;

    const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-weight: 600;
    &:hover:{
      color: #0000FF;
    }
  `;
  
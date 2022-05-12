import React from "react";
import styled from "styled-components";


export function Loader(){
    return(
        <LoadingDiv className="py-5 ">
            <h4 style={{"color": "#525252", "fontSize": "1.5rem"}}>Loading...</h4>
        </LoadingDiv>
    )
}

const LoadingDiv = styled.div`
    background-color: #c5c5c5;
    text-align: center;
    border-radius: 25px;

`
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext';

export function Navbar () {

    const {user, logout, login} = useContext(AuthContext)


    return(
      <nav className='py-5 d-flex flex-row align-items-center justify-content-between'>
        <ul>
          <List>
            <button type="button" className='btn btn-light mt-2'><Link style={{"text-decoration": "none", "color": "black"}} to="/">Home</Link></button>
          </List>
        </ul>
        {user ? (
            <button type="button" className='btn btn-dark mb-2 ms-2' onClick = {logout}>Logout</button>
          ) : (
            <button type="button" className='btn btn-dark mb-2 ms-2' onClick = {login}>Login</button>
        )}
        
      </nav>
  
    )
  }

  const List = styled.li`
        list-style: none;
    `
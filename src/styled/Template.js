import React from 'react';
import styled from 'styled-components'

export const Header = styled.header`
  text-align: center;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;

`
export const Container =styled.div`
dispaly:flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 80%;
height: 80vh;
`

export const Main =(props) =>{
  return(
    <container>
      {props.children}
    </container>
  )
}

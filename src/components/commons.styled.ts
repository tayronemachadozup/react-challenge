import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }     

  body {
    
    font-family: Arial, sans-serif;
    background-color: #0f171e;
  }

`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 19px;
    padding: 0px 0px 0px 50px;
    margin:10px 0px;
    color:#ffffff;
`
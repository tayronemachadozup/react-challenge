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

export const Prev = styled.div`

  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0px 10px 0px 10px;
  color: #ffff;
  cursor: pointer;
  z-index: 1;
  `

export const Next = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0px 10px 0px 10px;
  color: #ffff;
  cursor: pointer;
`

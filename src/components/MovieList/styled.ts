import styled from 'styled-components'

export const Row = styled.section`
  width:100%;
  position:relative;
`

export const Content = styled.section`
  padding: 0px 0px 0px 50px; 
  position: relative;
  display: flex;
  width: 100%; 

`
export const List = styled.ul`
  list-style: none;
  display: flex;
  overflow-x: hidden;
  transform:translateX(5px);
  transition: transform .5s ease;
`
// overflow-x: hidden;

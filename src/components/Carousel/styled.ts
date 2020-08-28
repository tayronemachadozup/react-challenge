import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CarouselContent = styled.div`
  
    width: 100%;
    position: relative;
    
    
`
export const CarouselList = styled.ul`
    display: flex;
    list-style: none;
    
    @media(min-width: 1024px) {
        width:80%;
    }

`

export const CarouselFolder = styled.li`
   
    width: 100%;
    height:300px;
    position: relative;
    flex-shrink: 0;
    
`

export const Folder = styled.img`
    width:1550px;
    height:300px;
`

export const Next = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 0px 10px 0px 10px;
    color: #ffff;
    cursor: pointer;
`

export const Prev = styled.div`

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

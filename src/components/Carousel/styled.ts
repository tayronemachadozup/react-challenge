import styled from 'styled-components'

export const CarouselContent = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
   
    
`
export const CarouselList = styled.ul`
    display: flex;
    list-style: none;
    
    @media(min-width: 1024px) {
        margin:0 auto;
        width:90%;  
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

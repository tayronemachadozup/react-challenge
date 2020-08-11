import styled from 'styled-components';

export const CarouselContent = styled.div`
    width: 100%;
    max-width: 1600px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
`
export const CarouselList = styled.ul`
    display: flex;
    list-style: none;
    width:100%;
    overflow: scroll;

`

export const CarouselFolder = styled.li`
    max-width: 100%;
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
    height: 333px;
  
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

export const Prev = styled.div`
    height: 333px;
    background-color: black;
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 0px 10px 0px 10px;
    color: #ffff;
    cursor: pointer;

`


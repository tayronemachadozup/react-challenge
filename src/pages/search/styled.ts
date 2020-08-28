import styled from 'styled-components'
import Search from './index'

export const SearchList = styled.div`
    width: 98%;
    margin: 0 auto;

`

export const SearchInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 8px 16px 8px;
    border-bottom: 1px solid #657e8d; 
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    color: #ffff;
    background-color: #425265;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
`

export const SearchResults = styled.section`
    padding: 10px 20px 0px 20px;
`

export const ResultList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
export const ListItem = styled.li`
    width: 220px;
    height: auto;
    margin-left: 10px;
    margin-top: 10px;
    background-color:#000;

`

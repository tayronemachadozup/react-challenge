import styled from 'styled-components';

export const Nav = styled.nav`
 
  min-height: 70px;
  background-color: #1a232e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 25px;
  color:#fff;
`

export const Menu = styled.ul`
  flex: 1;
  text-align: left;
  margin-left: 25px;
`
export const MenuItem = styled.li`
  list-style: none;
  display: inline-block; 
  padding: 5px;  
  text-decoration: none;
  color: #ffffff
`

export const Search = styled.div`
  position: relative;
  margin-right: 30px;
`
export const SearchInput = styled.input`
  width: 85%;
  border:none;
  outline: none;
  padding: 10px;
  padding-left: 40px;
  border: 1px solid #c9d9dd;
  color: #ffff;
  border-radius: 3px;
  background-color: #18202b;
  position: relative;
  font-size: 17px;
  line-height: 24px;
`

export const UserMenu = styled.div`
  width: 50px;
  height: 20px;
  font-size: 20px;
  color: #bbbdc0;
  margin-right: 30px;
`
  


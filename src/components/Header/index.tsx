import React, {FC} from 'react';
import Logo from '../../core/assets/prime-brand.png'
import {Nav, Menu, MenuItem, Search, SearchInput, UserMenu} from './styled'

const Header: FC = () =>{
    return(
        <Nav>
            <img src={Logo} alt="amazon-brand"/>
            <Menu>
                <MenuItem>Ínicio</MenuItem>
                <MenuItem>Séries</MenuItem>
                <MenuItem>Filmes</MenuItem>
                <MenuItem>Infantil</MenuItem>
            </Menu>
            <Search>
                <SearchInput placeholder="Busca"></SearchInput>
            </Search>
            <UserMenu></UserMenu>
        </Nav>
    );   
}

export default Header;
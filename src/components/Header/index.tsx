import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../core/assets/prime-brand.png';
import {Nav, Menu, MenuItem, Search, SearchInput, UserMenu} from './styled';

const Header: FC = () =>{
    return(
        <Nav>
            <img src={Logo} alt="amazon-brand"/>
            <Menu>
               <Link to="/"> <MenuItem>Ínicio</MenuItem></Link>
               <Link to="/series"><MenuItem>Séries</MenuItem></Link>
               <Link to="/movies"><MenuItem>Filmes</MenuItem></Link>
               <Link to="/childish"><MenuItem>Infantil</MenuItem></Link>
            </Menu>
            <Search>
                <SearchInput placeholder="Busca"></SearchInput>
            </Search>
            <UserMenu></UserMenu>
        </Nav>
    );   
}

export default Header;
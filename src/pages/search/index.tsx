import React, {FC, useState, useEffect} from 'react';
import {SearchList, SearchInfo, Button, SearchResults, ResultList, ListItem} from './styled'



const Search:FC = ()=>{


    
    return(
        <>
            <SearchList>
                <SearchInfo>
                    <Button>Refinar</Button>
                </SearchInfo>
            </SearchList>

            <SearchResults>
                <ResultList>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                    <ListItem>x</ListItem>
                </ResultList>
            </SearchResults>
        </>
    );

}

export default Search; 
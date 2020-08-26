import React, {FC, useEffect, useState} from 'react';
import {Row, Content, List} from './styled'
import ListItem from '../ListIIem/index'
import {getMovies} from '../../core/services/index';

interface Movies {
    path:string;
}

const MovieList: FC <Movies>= ({path}) =>{
    
    const [movies, setMovies] = useState([] as any[]);

    async function handleRequest() {
        const request = await getMovies(path);
        console.log(request);
        setMovies(request.data.results);
    }

    useEffect(()=>{
        handleRequest();
    },[])

    return (
        <Row>
            <Content>
                <List>
                    {movies && movies.map( movie =>(<ListItem poster={movie.poster_path} key={movie.id} />))}                
                </List>
            </Content>
        </Row>
    );
}



export default MovieList;
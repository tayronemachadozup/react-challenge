import React, {FC} from 'react';
import {Row, Content, List} from './styled'
import ListItem from '../ListIIem/index'

interface Movies {
    movies:any[];
}

const MovieList: FC <Movies>= (props) =>{
    const {movies} = props;
    //console.log('Movies List: ', movies);
  
    return (
        <Row>
            <Content>
                <List>
                    {movies && movies.map((movie, index)=>(<ListItem poster={movie.poster_path} key={index} />))}                
                </List>
            </Content>
        </Row>
    );
}



export default MovieList;
import React, {FC,useState,useEffect} from 'react';
import {Title} from '../../components/commons.styled'
import Carousel from '../../components/Carousel/index';
import MovieList from '../../components/MovieList';

import {seriesCarousel} from '../../components/Carousel/carouselFolders';


const Series:FC =()=>{
    const [folder, setFolders] = useState([] as any[])

    useEffect(()=>{
        setFolders(seriesCarousel);
    })
    return(
        <>
           <Carousel folder={folder}/>
            <Title>Próximas séries para assistir</Title>
            <MovieList  path={'/tv/popular?'}/>
            <Title>Séries Amazon Originals e exclusivas</Title>
            <MovieList  path={'/tv/on_the_air?'}/>
            <Title>Séries adicionadas recentemente</Title>
            <MovieList  path={'/tv/airing_today?'}/>
            <Title>Melhores séries</Title>
            <MovieList  path={'/tv/top_rated?'}/>
            <Title>Séries de suspense</Title>
            <MovieList  path={'/discover/tv?with_genres=9648&'}/>
            <Title>Séries de drama</Title>
            <MovieList  path={'/discover/tv?with_genres=18&'}/>

        </>    
    );
}

export default Series;
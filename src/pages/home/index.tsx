import React, {FC, useEffect, useState} from 'react';
import {Title} from './styled'
import Carousel from '../../components/Carousel/index';
import MovieList from '../../components/MovieList';
import {indexCarousel} from '../../components/Carousel/carouselFolders';

const Home: FC = () => {
    
    const [folder, setFolders] = useState([] as any[]);
    
    useEffect(()=>{
        setFolders(indexCarousel);
       
    },[])

    
    return (
        <>
            <Carousel folder={folder}/>
            <Title>Assista a seguir</Title>
            <MovieList  path={'/search/trending?'}/>
            <Title>Séries Amazon Originals e exclusivas</Title>
            <MovieList  path={'/tv/on_the_air?'}/>
            <Title>Filmes que achamos que você vai curtir</Title>
            <MovieList  path={'/movie/upcoming?'}/>
            <Title>Filmes adicionados recentemente</Title>
            <MovieList  path={'/movie/popular?'}/>
            <Title>Filmes de suspense</Title>
            <MovieList  path={'/discover/movie?with_genres=18&'}/>
            <Title>Séries adicionadas recentemente</Title>
            <MovieList  path={'/tv/airing_today?'}/>

        </>
    ); 
}

export default Home;


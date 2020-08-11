import React, {FC, useEffect, useState} from 'react';
import {Title} from './styled'
import Carousel from '../../components/Carousel/index';
import MovieList from '../../components/MovieList';
import {getMovies} from '../../core/services/index';
//import {indexCarousel} from '../../components/Carousel/carouselFolders'

const Home: FC = () => {
    
    const [movies, setMovies] = useState([] as any[]);
    //const [folder, setFolders] = useState([] as any[]);
    
    async function handleRequest() {
        const request = await getMovies('/tv/on_the_air');
        setMovies(request.data.results);
    }

    //setFolders(indexCarousel); 
    //console.log(folder);

    useEffect(()=>{
        handleRequest();
    })

    
    return (
        <>
            <Carousel/>
            <Title>Assista a seguir</Title>
            <MovieList movies={movies}/>
            <Title>Séries Amazon Originals e exclusivas</Title>
            <MovieList movies={movies}/>
            <Title>Filmes que achamos que você vai curtir</Title>
            <MovieList movies={movies}/>
            <Title>Filmes adicionados recentemente</Title>
            <MovieList movies={movies}/>
            <Title>Filmes de suspense</Title>
            <MovieList movies={movies}/>
            <Title>Séries adicionadas recentemente</Title>
            <MovieList movies={movies}/>

        </>
    ); 
}

export default Home;


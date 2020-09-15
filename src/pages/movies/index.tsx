import React, { FC, useState, useEffect } from 'react'
import { Title } from '../../components/commons.styled'
import Carousel from '../../components/Carousel/index'
import MovieList from '../../components/MovieList'
import { moviesCarousel } from '../../components/Carousel/carouselFolders'

const Movies: FC = () => {
  const [folder, setFolders] = useState([] as any[])

  useEffect(() => {
    setFolders(moviesCarousel)
  })

  return (
    <>
      <Carousel folder={folder} />
      <Title>Próximos filmes para assistir</Title>
      <MovieList path="/movie/upcoming?" />
      <Title>Filmes Amazon Originals e exclusivos</Title>
      <MovieList path="/movie/now_playing?" />
      <Title>Filmes adicionados recentemente</Title>
      <MovieList path="/movie/popular?" />
      <Title>Melhores filmes</Title>
      <MovieList path="/movie/top_rated?" />
      <Title>Filmes de suspense</Title>
      <MovieList path="/discover/movie?with_genres=9648&" />
      <Title>Filmes de drama</Title>
      <MovieList path="/discover/movie?with_genres=18&" />
    </>
  )
}

export default Movies

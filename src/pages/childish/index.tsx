import React, { FC, useState, useEffect } from 'react'
import { Title } from '../../components/commons.styled'
import Carousel from '../../components/Carousel/index'
import MovieList from '../../components/MovieList'
import { childishCarousel } from '../../components/Carousel/carouselFolders'

const Childish: FC = () => {
  const [folder, setFolder] = useState([] as any[])

  useEffect(() => {
    setFolder(childishCarousel)
  })

  return (
    <>
      <Carousel folder={folder} />
      <Title>Séries Amazon Originals para crianças</Title>
      <MovieList path="/discover/tv?with_genres=10762&" />
      <Title>Melhores filmes</Title>
      <MovieList path="/movie/now_playing?" />
      <Title>Ação e aventura</Title>
      <MovieList path="discover/tv?with_genres=16&" />
      <Title>Séries educativas</Title>
      <MovieList path="/movie/top_rated?" />
      <Title>Filmes e séries para crianças mais velhas</Title>
      <MovieList path="/discover/movie?with_genres=9648&" />
      <Title>Animações</Title>
      <MovieList path="/discover/movie?with_genres=18&" />

    </>
  )
}

export default Childish

import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ListItem from '../ListIIem/index'
import { getMovies } from '../../core/services/index'
import { Next, Prev } from '../commons.styled'
import {
  Row,
  Content,
  List,
} from './styled'

interface Movies {
    path: string,
}

const MovieList: FC<Movies> = ({ path }) => {
  const [movies, setMovies] = useState([] as any[])

  async function handleRequest() {
    const request = await getMovies(path)
    console.log(request)
    setMovies(request.data.results)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return (
    <Row>
      <Prev><FontAwesomeIcon icon={faAngleLeft} /></Prev>
      <Content>
        <List>
          {movies && movies.map((movie) => (
            <ListItem poster={movie.poster_path} key={movie.id} />)
          )}
        </List>
      </Content>
      <Next><FontAwesomeIcon icon={faAngleRight} /></Next>
    </Row>
  )
}

export default MovieList

import React, { FC, useEffect, useState, useRef } from 'react'
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
  const elementRef = useRef() as React.MutableRefObject<HTMLDivElement>
   
  async function handleRequest() {
    const request = await getMovies(path)
    setMovies(request.data.results)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  const scrollNext = () =>{
    elementRef.current.scrollLeft += 1100
  }
  const scrollPrev = () =>{
    elementRef.current.scrollLeft -= 1100 
  }
  return (

    <Row>
      <Prev onClick={ scrollPrev }><FontAwesomeIcon icon={faAngleLeft} /></Prev>
      <Content>
        <List ref={elementRef}>
          {movies && movies.map((movie) => (
            <ListItem poster={movie.poster_path} key={movie.id} />)
          )}
        </List>
      </Content>
      <Next onClick={ scrollNext }><FontAwesomeIcon icon={faAngleRight} /></Next>
    </Row>
  )
}

export default MovieList

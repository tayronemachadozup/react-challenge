import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSearchValue } from '../../core/services/index'
import {
  SearchList, 
  SearchInfo, 
  Button, 
  SearchResults, 
  ResultList, 
  ListItem,
} from './styled'

const Search: FC = () => {
  const [content, setContent] = useState([] as any[])
  const params: string = useParams() 


  async function handleRequest() {
    const request = await getSearchValue(params)
    console.log(request)
    setContent(request.data.results)
  }
  useEffect(() => {
    handleRequest()
  }, [])

  return (
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
  )
}

export default Search

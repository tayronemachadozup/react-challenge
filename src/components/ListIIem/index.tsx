import React, { FC } from 'react'
import { Movie } from '../../core/types'
import {
  StyledListItem,
  Folder,
} from './styled'

const ListItem: FC <Movie> = (props) => {
  const { poster } = props
  const url_path = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

  return <StyledListItem><Folder src={url_path + poster} /></StyledListItem>
}

export default ListItem

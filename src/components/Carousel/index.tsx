import React, {FC} from 'react';
//import Movie1 from '../../core/assets/folder.jpg'
import {CarouselContent, CarouselList, CarouselFolder, Folder, Next, Prev} from './styled';

interface Folders {
    folder:Record<string, string>[];
}


const Carousel: FC<Folders>= (props) =>{

    const {folder} = props;
    const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
        
    return (
        <CarouselContent>
            <Prev></Prev>
            
            <CarouselList>
               {folder&&folder.map( folder=>(<CarouselFolder key={folder.poster_path}><Folder src={IMG_URL + folder.poster_path}/></CarouselFolder>))}
            </CarouselList>

            <Next></Next>
        </CarouselContent>
    );
}

export default Carousel;


//eslint

// {movies && movies.map((movie, index)=>(<ListItem poster={movie.poster_path} key={index} />))}   

//folder.map((folder,index)=>(<CarouselFolder> <Folder src={IMG_URL + folder.poster_path} >  </CarouselFolder>))
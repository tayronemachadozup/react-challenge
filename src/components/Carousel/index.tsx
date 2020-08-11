import React, {FC} from 'react';
import Movie1 from '../../core/assets/folder.jpg'
import {CarouselContent, CarouselList, CarouselFolder, Folder, Next, Prev} from './styled'



const Carousel: FC  = () =>{
    
    //const {folder} = props;
    const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
        
    return (
        <CarouselContent>
            <Prev></Prev>
            
            <CarouselList>
                <CarouselFolder> <Folder src={Movie1} alt="movie-folder"/>  </CarouselFolder>
                <CarouselFolder> <Folder src={Movie1} alt="movie-folder"/>  </CarouselFolder>
                <CarouselFolder> <Folder src={Movie1} alt="movie-folder"/>  </CarouselFolder>
            </CarouselList>
            
            <Next></Next>
        </CarouselContent>
    );
}

export default Carousel;
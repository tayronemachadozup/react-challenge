import React, {FC} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {
    CarouselContent, 
    CarouselList, 
    CarouselFolder, 
    Folder, 
    Next, 
    Prev
} from './styled';


interface Folders {
    folder:Record<string, string>[];
}


const Carousel: FC<Folders>= (props) =>{

    const {folder} = props;
    const IMG_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
       
    return (
        <CarouselContent>
            <Prev> <FontAwesomeIcon icon={faAngleLeft} /> </Prev>
        
            <CarouselList>
               {folder&&folder.map( folder=>(<CarouselFolder key={folder.poster_path}><Folder src={IMG_URL + folder.poster_path}/></CarouselFolder>))}
            </CarouselList>

            <Next> <FontAwesomeIcon icon={faAngleRight} /> </Next>
        </CarouselContent>
    );
}

export default Carousel;



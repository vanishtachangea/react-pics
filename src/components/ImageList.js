import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = props =>{
    console.log(props);
/*     const images= props.images.map(({description, id, urls})=>{
            return (
                //<img src={urls.regular} key={id} alt={description}/>
                <ImageCard />
            );
        }); */
        const images= props.images.map((image)=>{
            return (
                //<img src={urls.regular} key={id} alt={description}/>
                <ImageCard key={image.id} image={image}/>
            );
        });
return(
    <div className="image-list">{images}</div>
);
}
export default ImageList;
import './ImageList.css'
import ImageShow from './ImageShow'

function ImageList({imag,onLike,onDislike}){
    const renderedImages = imag.map((image)=>{
        return <ImageShow key={image.id} image={image} onLike={onLike} onDislike={onDislike} />
    })

    return <div className='image-list'>{renderedImages} </div>

}

export default ImageList
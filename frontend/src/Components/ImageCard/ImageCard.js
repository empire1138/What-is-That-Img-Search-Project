import React, { useState, useEffect } from 'react'

function ImageCard(props) {

    const { description, urls } = props.image;
    let imageRef = React.createRef();

    const [spans, setSpans] = useState([0]);


   const setSpan = () => {
        const height = imageRef.current.clientHeight;
        console.log(height, 'height')

        const spans = Math.ceil(height / 10 + 1);

        console.log(spans, 'spans')

        setSpans(spans);
    }


    useEffect(() => {
        imageRef.current.addEventListener('load', setSpan());
    })



    console.log(props, 'Props ImgCard')


    return (
        <div>
            <div style={{ gridRowEnd: `span ${spans}` }}>
                <img ref={imageRef} alt={description} src={urls.regular} />
            </div>
        </div>
    )
}

export default ImageCard

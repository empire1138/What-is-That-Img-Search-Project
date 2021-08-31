import React, { useState, useEffect, useCallback } from 'react'

function ImageCard(props) {

    const { description, urls } = props.image;
    let imageRef = React.useRef(props);

    const [spans, setSpans] = useState([0]);


   const setSpan = useCallback(() => {
        const height = imageRef.current.clientHeight;
        console.log(height, 'height')

        const spans = Math.ceil(height / 10 + 1);

        console.log(spans, 'spans')

        setSpans(spans);
    },[])


    useEffect(() => {
        imageRef.current.addEventListener('load', setSpan());
    },[imageRef, setSpan, setSpans])



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

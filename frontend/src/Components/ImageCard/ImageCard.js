import React, { useState, useEffect, useCallback, useRef } from 'react'

function ImageCard(props) {

    console.log(props, 'Props')
    const { description, urls } = props.image;
    const createdBy = props.image.user.name;
    // let imageRef = React.createRef();
    let imageRef = useRef(true);

    const [spans, setSpans] = useState([0]);


    const setSpan = () => {
        const height = imageRef.current.clientHeight;
        console.log(height, 'height')

        const spans = Math.ceil(height / 10 + 1);

        console.log(spans, 'spans')

        setSpans(spans);
    }


    useEffect(() => {
        if (imageRef.current) {
            setSpan();
        }
    }, [])




    console.log(props, 'Props ImgCard')
    console.log(imageRef, 'imgreF')

    return (

        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img ref={imageRef} alt={description} src={urls.regular} />
            <p>Created By: {createdBy}</p>
        </div>

    )
}

export default ImageCard

import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';

const ImageCard = ({image}) => {
    return (
        <Fragment>
            <Image src={image} alt='firebaseImage' fluid />
        </Fragment>
    )
}

export default ImageCard

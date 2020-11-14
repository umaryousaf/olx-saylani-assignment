import React, { Fragment } from 'react';
import {
     Card, 
     Image 
    } from 'react-bootstrap';
import IMAGE from '../../../images/staticmap.png'

const LocationCard = ({city, country}) => {
    return (
        <Fragment>
            <section className='LocationCard'>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title ><h4>Location</h4> </Card.Title>
                     
                            <p >{city}, {country}</p>
                            <Image src={IMAGE} alt='map' fluid />
                      
                    </Card.Body>
                </Card>
            </section>
        </Fragment >
    )
}

export default LocationCard

import React, { Fragment } from 'react';
import {
     Card,
      Row, 
      Col
     } from 'react-bootstrap'

const PriceCard = ({ price, country, city ,title, condition}) => {
    const priceWithComas = (x) => {
        let price = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return price
    }
    return (
        <Fragment>
            <section className='PriceCard mt-3'>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title >
                            <Row>
                                <Col md={10}>Rs {price && priceWithComas(price)}</Col>
                                <Col md={2}><i className='far fa-heart'></i></Col>
                            </Row>
                        </Card.Title>
                        <Card.Text> This product is Availble in {condition} condition.</Card.Text>
                        <Card.Text> {title} is Availble for sale in {city}</Card.Text>
                        <Row>
                            <Col md={9}>{city}, {country}</Col>
                            <Col md={3}> 12 Oct</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </section>
        </Fragment>
    )
}

export default PriceCard

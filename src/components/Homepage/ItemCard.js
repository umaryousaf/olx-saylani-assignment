import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const ItemCard = ({ item  }) => {
    return (
        <Card className='my-3 rounded'>
            <Link to={`/item/${item.key}`}>
                <Card.Img src={item.image} alt='picture' variant='top' className='p-1' />
            </Link>
            < Card.Body>
                <Card.Text as='h3'>
                    ${item.price}
                </Card.Text>
                <Link to={`item/${item.key}`}>
                    <Card.Title as='h4'>
                        <strong>{item.title}</strong>
                    </Card.Title>
                </Link>
                <Row>
                    <Col md={7}>
                        <small>{item.state}</small>
                    </Col>
                    <Col md={5}>
                        <small> {item.date}</small>
                    </Col>
                </Row>
            </Card.Body >
        </Card >
    )
}

export default ItemCard
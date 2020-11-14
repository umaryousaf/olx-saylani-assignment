import React, { Fragment } from 'react';
import {
    Card,
    Row,
    Col
} from 'react-bootstrap'

const DetailCard = ({ description, condition, number }) => {
    return (
        <Fragment>
            <section className='DetailCard mt-3'>
                <Card>

                    <Card.Body>
                        <Card.Title>Detail</Card.Title>
                        <Row>
                            <Col>Condition</Col>
                            <Col>{condition}</Col>
                            <Col>Contact</Col>
                            <Col>{number}</Col>
                        </Row>

                        <hr />
                        <Card.Title>Description</Card.Title>

                        <Card.Text> {description}</Card.Text>

                    </Card.Body>
                </Card>
            </section>
        </Fragment>
    )
}

export default DetailCard

import React, { Fragment } from 'react';
import {
    Card,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import IMAGE from '../../../images/avatar.png'
import Time from './Time'

const SellerCard = ({ number }) => {
    return (
        <Fragment>
            <section className='SellerCard'>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title><h4>Seller description</h4></Card.Title>
                        <Row>
                            <Col md={3}>
                                <Image src={IMAGE} alt='avatar' width='45px;' />
                            </Col>
                            <Col md={9}>
                                <Row>
                                    <Col md={7}>
                                        <b>Umar Yousaf </b>
                                    </Col>
                                    <Col md={5}>
                                        <small className='text-secondary'><Time /></small>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Card.Text style={{ textAlign: 'center' }}>
                            Contact Number: {number}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section >
        </Fragment >
    )
}

export default  SellerCard

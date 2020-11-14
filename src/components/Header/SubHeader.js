import React, { Fragment } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SubHeader = () => {
    return (
        <Fragment >
            <section style={{ borderBottom: '1px solid rgba(0, 47, 52, .64)', padding: '7px' }}>
                <Container >
                    <Row>
                        <Col>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="/">Mobile Phones</Link>
                                </li> {' '}
                                <li className="list-inline-item">
                                    <Link to="/">Cars</Link>
                                </li>{' '}
                                <li className="list-inline-item">
                                    <Link to="/"> Motorcycles</Link>
                                </li>{' '}
                                <li className="list-inline-item">
                                    <Link to="/">Houses</Link>
                                </li>{' '}
                                <li className="list-inline-item">
                                    <Link to="/">TV-Audio-Video</Link>
                                </li>{' '}
                                <li className="list-inline-item">
                                    <Link to="/">Tablets</Link>
                                </li>{' '}
                                <li className="list-inline-item">
                                    <Link to="/">Land & Plots</Link>
                                </li>{' '}

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default SubHeader

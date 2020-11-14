import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <ul className='widgets'>
                                <li className='widgets-title'>
                                    <h6>POPULAR CATEGORIES</h6>
                                </li>
                                <li>
                                    <Link to='/' >Car</Link>
                                </li>
                                <li>
                                    <Link to='/' >Flat for Rent</Link>
                                </li>
                                <li>
                                    <Link to='/' >Jobs</Link>
                                </li>
                                <li>
                                    <Link to='/' >Mobile Phone</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='widgets'>
                                <li className='widgets-title'>
                                    <h6>TRENDING SEARCHES</h6>
                                </li>
                                <li>
                                    <Link to='/' >Bikes</Link>
                                </li>
                                <li>
                                    <Link to='/' >Watches</Link>
                                </li>
                                <li>
                                    <Link to='/' >Books</Link>
                                </li>
                                <li>
                                    <Link to='/' >Dogs</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='widgets'>
                                <li className='widgets-title'>
                                    <h6>ABOUT US</h6>
                                </li>
                                <li>
                                    <Link to='/' >About OLX Group</Link>
                                </li>
                                <li>
                                    <Link to='/' >OLX Blog</Link>
                                </li>
                                <li>
                                    <Link to='/' >Contact Us</Link>
                                </li>
                                <li>
                                    <Link to='/' >OLX for Businesses</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='widgets'>
                                <li className='widgets-title'>
                                    <h6>OLX</h6>
                                </li>
                                <li>
                                    <Link to='/' >Help</Link>
                                </li>
                                <li>
                                    <Link to='/' >Sitemap</Link>
                                </li>
                                <li>
                                    <Link to='/' >Legal and Privacy information</Link>
                                </li>

                            </ul>
                        </Col>
                        <Col>
                            <ul className='widgets'>
                                <li className='widgets-title'>
                                    <h6>FOLLOW US</h6>
                                </li>
                                <li>
                                    <Link to='/' ><i className="fab fa-facebook"></i> Facebook</Link>
                                </li>
                                <li>
                                    <Link to='/' ><i className="fab fa-twitter"></i> Twitter</Link>
                                </li>
                                <li>
                                    <Link to='/' ><i className="fab fa-instagram"></i> Instagram</Link>
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </footer>
            <FooterBottom />
        </Fragment >

    )
}

export default Footer

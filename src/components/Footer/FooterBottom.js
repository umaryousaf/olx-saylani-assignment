import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const FooterBottom = () => {
    return (
        <Fragment>
            <section className='footerbottom'>
                <Container>
                    <Row>
                        <Col>
                            <ul className='bottom'>
                                <li >
                                    <span>Other Countries
                                     <Link to="/"> India</Link>-<Link to="/">South Africa</Link>-<Link to="/">Indonesia</Link>
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='bottom1'>
                                <li >
                                    <span>Free Classifieds in Pakistan. © 2006-2020 OLX</span>
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default FooterBottom

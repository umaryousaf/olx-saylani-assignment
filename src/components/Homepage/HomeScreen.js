import React, {
    Fragment,
    useEffect
} from 'react';
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import IMAGE from '../../images/background-top-image.PNG';
import ItemCard from './ItemCard';
import { connect } from 'react-redux'
import { getAds } from '../../actions/ads'
import Loader from './Loader'


const HomeScreen = ({ getAds, ads }) => {
    useEffect(() => {
        getAds()
    }, [getAds])

    return (
        <Fragment>
            <Image className='home-top-image' src={IMAGE} alt='poster' />
            <Container>
                <h1 className='mt-4'>Fresh recommendations</h1>
                <hr />
                <Row>
                    {ads.length > 0
                        ? ads.map((item, index) => {
                            return (
                                <Col md={3} key={index}>
                                    <ItemCard item={item} />
                                </Col>
                            )
                        })
                        :
                        <Loader />}
                </Row>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    ads: state.ads.ads
})

export default connect(mapStateToProps, { getAds })(HomeScreen)

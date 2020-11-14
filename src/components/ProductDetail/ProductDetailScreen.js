import React, {
    Fragment,
    useEffect
} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ImageCard from './items/ImageCard';
import DetailCard from './items/DetailCard';
import PriceCard from './items/PriceCard';
import SellerCard from './items/SellerCard';
import LocationCard from './items/LocationCard';
import Title from './items/Title';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getSingleAd } from '../../actions/ads'


const ProductDetailScreen = ({ getSingleAd, ad, match }) => {
    useEffect(() => {
        getSingleAd(match.params.id) 
    }, [getSingleAd, match.params.id])

    return (
        <Fragment>
            <Container className='py-5'>
                <Link
                    className='btn btn-dark my-3'
                    to='/'
                >
                    Go Back
                  </Link>
                <Row>
                    <Col md={8}>
                        <ImageCard image={ad.image}/>
                        <DetailCard
                            description={ad.description}
                            number={ad.number}
                            condition={ad.condition}
                        />
                    </Col>
                    <Col md={4}>
                        <Title title={ad.title} />
                        <PriceCard
                            price={ad.price}
                            country={ad.country}
                            city={ad.city}
                            title={ad.title}
                            condition={ad.condition}
                        />
                        <SellerCard
                            number={ad.number}
                        />
                        <LocationCard
                            country={ad.country}
                            city={ad.city}
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    ad: state.ads.ad
})

export default connect(mapStateToProps, { getSingleAd })(ProductDetailScreen)

import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';


const Title = ({ title }) => {
    return (
        <Fragment>
            <Card style={{ width: '24rem' }}>
                <Card.Title
                    style={{
                        textAlign: 'center'
                    }}
                    className='pt-2 mt-1'
                >
                    <h1>{title}</h1>
                </Card.Title>
            </Card>
        </Fragment>
    )
}

export default Title

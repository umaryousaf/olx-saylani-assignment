import React, { Fragment } from 'react'
import {
    Button,
    Container
} from 'react-bootstrap';
import LoginModel from './LoginModel'

const LogoutPost = () => {
    return (
        <Fragment>
            <Container>
                <h4
                    style={{
                        textAlign: 'center',
                        marginTop: '30px'
                    }}>WANNA POST AD. PLEASE LOGIN
                </h4>

                <Button
                    style={{
                        marginTop: '30px',
                        marginBottom: '328px'
                    }}
                    variant='dark'
                    block
                >
                    <LoginModel />
                </Button>
            </Container>
        </Fragment>
    )
}

export default LogoutPost

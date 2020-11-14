import React from "react";
import {
    Navbar,
    FormControl,
    Container,
    InputGroup,
    NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SubHeader from "./SubHeader";
import LoginModel from './LoginModel'
import LOADING from '../../images/olx.png';
import { connect } from 'react-redux'
import { addUser, logoutUser } from '../../actions/auth'


function Logo() {
    return (
        <div>
            <img src={LOADING} width="75" alt='pic' />
        </div>
    )
}



const Header = ({ isAuth, logoutUser, user }) => {
    const logout = () => {
        logoutUser()
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'> <Navbar.Brand ><Logo /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Find Mobiles, Cars and more..."
                                aria-label="Amount (to the nearest dollar)"
                                className='search'
                            /> 
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    <i className="fa fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        {isAuth ?
                            (<NavDropdown title={`Hi, ${user.displayName}`} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>

                            </NavDropdown>
                            ) : (
                                <h5 className="login">< LoginModel /></h5>
                            )
                        }

                        <h5 className="sell">
                            <Link to='/addyourpost'> +SELL</Link>
                        </h5>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <SubHeader />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    logout: state.auth.isAuth,
    user: state.auth.user
})


export default connect(mapStateToProps, { addUser, logoutUser })(Header)















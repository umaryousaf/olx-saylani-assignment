import React, {
    Fragment,
    useState
} from 'react';
import {
    Modal,
    Button,
    Image
} from 'react-bootstrap';
import IMAGE from '../../images/loginEntryPointPost.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addUser } from '../../actions/auth'



const LoginModel = ({ addUser }) => {
    const googleLogin = () => {
        addUser()
    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <section className='LoginModel'>
                <Link to='/' onClick={handleShow}>
                    Login
                </Link>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Login </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className='text-center '>
                            <Image src={IMAGE} alt='post' width='140px' />
                            <p>Help make OLX safer place to buy and sell</p>
                        </div>
                        <Button size="lg" block onClick={googleLogin}>
                            Continue With Google
                        </Button>
                        <div className='text-center '>

                            <p>We won't share your personal details with anyone</p>
                            <p>If you continue, you are accepting <Link to="/">OLX Terms and Conditions</Link> and <Link to="/">Privacy Policy</Link> </p>
                        </div>
                    </Modal.Body>

                </Modal>



            </section>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, { addUser })(LoginModel)

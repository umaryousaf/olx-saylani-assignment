import React, { useState } from 'react';
import {
    Card,
    ListGroup,
    FormControl,
    InputGroup,
    Form,
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addNewAd } from '../../actions/ads'
import { addUser } from '../../actions/auth'
import LOADING from '../../images/olx.png';
import { storage } from '../../config/firebase'


function Logo() {
    return (
        <div>
            <img src={LOADING} width="100" alt='pic' />
        </div>
    )
}


const AdsForm = ({ addNewAd, isAuth }) => {

    const [formData, setFormData] = useState({
        title: " ",
        city: " ",
        description: " ",
        price: " ",
        number: " ",
        condition: " ",
        country: " "
    });

    const [added, setAdded] = useState(false);
    const [image, setImage] = useState(null);
    const [ImageURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);

    const {
        title,
        city,
        price,
        country,
        description,
        number,
        condition,
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    var upload = {
        title: title,
        city: city,
        description: description,
        price: price,
        number: number,
        condition: condition,
        country: country,
        image: ImageURL
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addNewAd(upload)
        setAdded(true)
    }

    if (added) {
        setTimeout(
            function () {
                window.location.reload()
            }, 5000);
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(ImageURL => {
                        setImageURL(ImageURL);
                    });
            }
        );
    };


    return (
        <div className='adsForm'>
            <Container>
                {isAuth ? (
                    <Card>
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='cata'>
                                    <h4>PUT THE DETAILS ABOUT YOUR AD AND POST IT.</h4>
                                </ListGroup.Item>

                                <ListGroup.Item className='deta'>
                                    <h4> INCLUDE SOME DETAILS</h4>

                                    <Row>
                                        <Col md={6}>
                                            <InputGroup size="md">
                                                <Col>
                                                    <h6>AD TITLE*</h6>
                                                    <Form.Control
                                                        name='title'
                                                        value={title}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add Title
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>SET PRICE*</h6>
                                                    <FormControl
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        name='price'
                                                        value={price}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add Price
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>YOUR COUNTRY*</h6>
                                                    <Form.Control
                                                        name='country'
                                                        value={country}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add Country
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>ADD PHONE NUMBER*</h6>
                                                    <Form.Control
                                                        name='number'
                                                        value={number}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add Phone Number
                                                    </small>
                                                    </Col>
                                            </InputGroup>
                                        </Col>


                                        <Col md={6}>
                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>AD DESCRIPTION*</h6>
                                                    <Form.Control
                                                        name='description'
                                                        value={description}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add Description
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>CONDITION*</h6>
                                                    <Form.Control
                                                        name='condition'
                                                        value={condition}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        What About Condition? Add here
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <InputGroup size="md">
                                            <Col>
                                                    <h6>CITY*</h6>
                                                    <Form.Control
                                                        name='city'
                                                        value={city}
                                                        onChange={(e) => onChange(e)}
                                                    />
                                                    <small>
                                                        Please Add City
                                                    </small>
                                                    </Col>
                                            </InputGroup>

                                            <div>
                                                <br />
                                                <br />
                                                <br />
                                                <input type="file" onChange={handleChange} />
                                                <button onClick={handleUpload} type='button'>Upload</button>
                                                <br />
                                                <br />
                                                <progress value={progress} max="100" />
                                            </div>

                                            


                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item >
                                    <Button
                                        variant="dark"
                                        size="lg"
                                        block
                                        type='submit'
                                    >
                                        POST YOUR AD
                            </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Form>
                    </Card>
                ) : (
                        <Container>
                            <Row>
                                <Col className='text-center'>
                                    <Logo style={{
                                        textAlign: 'center',
                                        marginTop: '30px'
                                    }} />
                                </Col>
                            </Row>

                            <h4
                                style={{
                                    textAlign: 'center',
                                    marginTop: '30px',
                                    marginBottom: '250px'
                                }}>WANNA POST AD. PLEASE LOGIN
                        </h4>
                        </Container>)}
            </Container>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, { addNewAd, addUser })(AdsForm)
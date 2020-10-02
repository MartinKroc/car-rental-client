import React, {useState} from "react";
import {Container, Form, Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import axios from "axios";

const SignIn = (props) => {

    console.log(props);

    const [signin, setsignin] = useState({
        email: '',
        password: ''
    })
    const [signup, setsignup] = useState({
        email: '',
        password: '',
        name: '',
        age: 0
    })

    const manageSignIn = () => {
        //todo api call
        props.setCred(signin.email,signin.password);
        axios.post(`http://localhost:3001/catalog/users/login`,signin)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const manageSignUp = () => {
        //todo api call
        axios.post(`http://localhost:3001/catalog/users/create`,signup)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
/*    setTimeout(() => {
        props.history.push('/')
    },10000);*/
    return (
        <Container>
            <Row>
                <Col>
                    <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                        <Form>
                            <h3>Masz już konto? Zaloguj się</h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>adres E-mail</Form.Label>
                                <Form.Control type="email" placeholder="email" value={signin.email} onChange={(e) => {setsignin({...signin, email: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="hasło" value={signin.password} onChange={(e) => {setsignin({...signin, password: e.target.value})}}/>
                            </Form.Group>
                            <Link to="/user"><Button variant="primary" type="submit" onClick={manageSignIn}>
                                Potwierdź
                            </Button>
                            </Link>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                        <Form>
                            <h3>Rejestracja</h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>adres E-mail</Form.Label>
                                <Form.Control type="email" placeholder="email" value={signup.email} onChange={(e) => {setsignup({...signup, email: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="hasło" value={signup.password} onChange={(e) => {setsignup({...signup, password: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="imie" value={signup.name} onChange={(e) => {setsignup({...signup, name: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicAge">
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="wiek" value={signup.age} onChange={(e) => {setsignup({...signup, age: e.target.value})}}/>
                            </Form.Group>
                            <Link to="/user"><Button variant="primary" type="submit" onClick={manageSignUp}>
                                Potwierdź
                            </Button>
                            </Link>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        userCred: state.userCred
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCred: (email,password) => {dispatch({type: 'SIGNIN', email: email, password: password})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
import React, {useState} from "react";
import {Container, Form, Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const SignIn = () => {

    const [signin, setsignin] = useState({
        login: '',
        password: ''
    })
    const [signup, setsignup] = useState({
        login: '',
        password: ''
    })

    const manageSignIn = () => {
        //todo api call
    }

    const manageSignUp = () => {
        //todo api call
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                        <Form>
                            <h3>Masz już konto? Zaloguj się</h3>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>adres E-mail</Form.Label>
                                <Form.Control type="email" placeholder="email" value={signin.login} onChange={(e) => {setsignin({...signin, login: e.target.value})}}/>
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
                                <Form.Control type="email" placeholder="email" value={signup.login} onChange={(e) => {setsignup({...signup, login: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="hasło" value={signup.password} onChange={(e) => {setsignup({...signup, password: e.target.value})}}/>
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
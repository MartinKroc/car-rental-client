import React, {useState} from "react";
import {Container, Form, Button, FormControl, Col} from "react-bootstrap";

export const Contact = () => {

    const [conform, setconform] = useState({
        name: '',
        email: '',
        header: '',
        text: ''
    })

    const manageForm = () => {
        //todo api call
    }

    return (
        <Container>
            <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                <Col>
                    <h3>Masz pytania? Napisz do nas</h3>
                    <Form.Group>
                        <Form.Label>Imie</Form.Label>
                        <FormControl
                            value={conform.name}
                            name='name'
                            onChange={(e) => setconform({...conform,name: e.target.value})}
                            placeholder='imie'
                        />
                        <br />
                        <Form.Label>Adres E-mail</Form.Label>
                        <FormControl
                            value={conform.email}
                            name='email'
                            onChange={(e) => setconform({...conform,email: e.target.value})}
                            placeholder='email'
                        />
                        <br />
                        <Form.Label>Temat</Form.Label>
                        <FormControl
                            value={conform.header}
                            name='header'
                            onChange={(e) => setconform({...conform,header: e.target.value})}
                            placeholder='temat'
                        />
                        <br />
                        <Form.Label>Treść</Form.Label>
                        <FormControl
                            value={conform.text}
                            name='message'
                            onChange={(e) => setconform({...conform,text: e.target.value})}
                            placeholder='tresc'
                        />
                        <br />
                    </Form.Group>
                    <Button variant='primary' type='submit' onClick={manageForm}>
                        Wyślij
                    </Button>
                </Col>
            </div>
        </Container>
    )
}
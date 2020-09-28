import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Accordion, Card} from "react-bootstrap";
import MapPoints from "../MapPoints";
import {MainAbout} from "../MainAbout";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {Link} from "react-router-dom";

export const RentForm = () => {

    const [reservation,setreservation] = useState({
        age: 0,
        placea: '',
        placeb: '',
        datea: new Date(Date.now()),
        dateb: new Date(Date.now())
    })

    const searchReservation = () => {
    //    todo api call
    }

    return (
        <Container>
            <Row>
                <Col className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Wiek
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    placeholder="wiek kierowcy"
                                    value={reservation.age}
                                    onChange={(e) => (setreservation({...reservation, age: e.target.value}))}
                                />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Miejsce odbioru
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" onChange={(e) => {setreservation({...reservation,placea: e.target.value})}}>
                                        <option>Galeria Lorem</option>
                                        <option>Lotnisko</option>
                                        <option>Dworzec centralny</option>
                                    </Form.Control>
                                </Col>
                                <Form.Label column sm={2}>
                                    Data odbioru
                                </Form.Label>
                                <Col sm={10}>
                                    <Calendar
                                        onChange={(date) => setreservation({...reservation, datea: date})}
                                        value={reservation.datea}
                                    />
                                </Col>
                                <Form.Label column sm={2}>
                                    Data zwrotu
                                </Form.Label>
                                <Col sm={10}>
                                    <Calendar
                                        onChange={(date) => setreservation({...reservation, dateb: date})}
                                        value={reservation.dateb}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <Accordion defaultActiveKey="1">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Nie zwrócę auta w miejscu odbioru
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <fieldset>
                                            <Form.Group as={Row}>
                                                <Form.Label as="legend" column sm={2}>
                                                    Miejsce zwrotu
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control as="select" onChange={(e) => {setreservation({...reservation,placeb: e.target.value})}}>
                                                        <option>Galeria Lorem</option>
                                                        <option>Lotnisko</option>
                                                        <option>Dworzec centralny</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                        </fieldset>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p></p>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit" onClick={searchReservation}>Szukaj rezerwacji</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="shadow-sm p-3 mb-5 bg-white rounded">
                    <h2>Nasza siedziba</h2>
                    <p>Ulica Naniby 10</p>
                    <p>Kielce</p>
                    <p>Telefon: 555 555 555</p>
                    <Link to="/contact"><Button>Skontaktuj się mailowo</Button></Link>
                </Col>
            </Row>
            <Row>
                    <MapPoints />
            </Row>

        </Container>
    )
}
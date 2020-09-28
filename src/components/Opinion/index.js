import React from "react";
import {Container, Form, Button, Card, Col} from "react-bootstrap";

export const Opinion = ({
                              id,
                              name,
                              description,
                              photo,
                                mark
                          }) => {
    return (
        <Col>
            <Card style={{ width: '320px', height: '380px' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        opis: {description}<br/>
                        cena: {price}<br/>
                        ilość siedzeń: {seats}<br/>
                    </Card.Text>
                    <Button variant="primary">Zamów</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}
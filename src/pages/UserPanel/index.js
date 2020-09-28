import React from "react";
import {Container, Form, Button, Card, CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

export const UserPanel = () => {
    return (
        <Container>
            <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Link to="/active">
                            <Card.Title>Aktualne zamówienia</Card.Title>
                            <Card.Text>
                            {/*    TODO informacje o statusie zamówienia z komponentu niżej*/}
                            </Card.Text>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Link to="/history">
                            <Card.Title>Historia zamówień</Card.Title>
                            <Card.Text>
                                {/*TODO historia o ostatnim zamówieniu*/}
                            </Card.Text>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Link to="/documents">
                            <Card.Title>Faktury</Card.Title>
                            <Card.Text>
                                Pobierz fakturę w formacie PDF.
                            </Card.Text>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ustawienia profilu</Card.Title>
                            <Card.Text>
                                Zmień hasło, zmień dane do zamówień
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Dodaj opinie</Card.Title>
                            <Card.Text>
                                Opinia do ostatnich dokonanych zamówień
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Reklamacje</Card.Title>
                            <Card.Text>
                                Poinformuj nas w razie problemu z wypożyczeniem, zauważonych uszkodzeniach.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </Container>
    )
}
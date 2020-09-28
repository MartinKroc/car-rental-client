import React, {useEffect, useState} from "react";
import {Container, Form, Button, Row, Col, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SingleCar} from "../../components/SingleCar";
import {tempCars} from "../../helpers/tempCars";
import axios from 'axios';

export const Offers = () => {

    const [cars,setcars] = useState([]);
    const [category, setcategory] = useState('');
    const cat = ['Osobowy', 'SUV', 'Dostawczy', 'Motocykl'];

    useEffect(() => {
        /*setcars(tempCars);*/
        axios.get(`http://localhost:3001/cars`)
            .then(res => {
                const cars = res.data;
                setcars(cars);
            })
    })

    return (
        <Container>
            <div className="shadow-none p-3 mb-5 bg-light rounded mt-5">
                <Row>
                    <Col>
                        <p>Wybierz rodzaj pojazdu</p>
                    </Col>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            {cat.map(cate => (
                                <Button
                                    key={cate}
                                    variant="secondary"
                                    value={cate}
                                    onClick={(event) => setcategory(event.target.value)}
                                >
                                    {cate}
                                </Button>
                                ))}
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {cars.map((car) =>
                        <SingleCar
                            key={car.id}
                            name={car.name}
                            description={car.description}
                            price={car.price}
                            seats={car.seats}
                            photo={car.photo}
                        />
                    )}
                </Row>
            </div>
        </Container>
    )
}
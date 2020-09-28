import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {RentForm} from "../../containers/RentForm";
import {MainAbout} from "../../containers/MainAbout";
import {Link} from "react-router-dom";

export const Main = () => {
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Poznaj naszą atrakcyjną ofertę</h1>
                    <p></p>
                    <Button variant="outline-primary"><Link to="/offers">Nasze auta</Link></Button>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        <RentForm />
        <MainAbout />
        </div>
    )
}
import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {connect} from 'react-redux'

const Demo = (props) => {
    const cred = props.userCred;
    console.log(props)
    return (
        <Container>
            <p>{cred.email}</p>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        userCred: state.userCred
    }
}

export default connect(mapStateToProps)(Demo)
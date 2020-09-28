import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '60%',
    height: '60%'
}

class MapPoints extends Component {

    render() {
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 50.872053,
                    lng: 20.636911
                }}
                zoom={15}
            >
                <Marker
                    title={'Punkt odbioru w galerii Lorem'}
                    name={'SOMA'}
                    position={{lat: 50.871599, lng: 20.642406}} />
                <Marker
                    title={'Punkt odbioru na dworcu'}
                    name={'SOMA'}
                    position={{lat: 50.873650, lng: 20.639745}} />
                <Marker
                    title={'Punkt odbioru na lotnisku'}
                    name={'SOMA'}
                    position={{lat: 50.871892, lng: 20.636673}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCX7gMWiZpir-bA3CUpPIxYfwh-I-6LQIc")
})(MapPoints)
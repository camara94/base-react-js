import React, { Component } from 'react';
import Cars from './Cars';
class MyCars extends Component {
    state={

    }
    render() {
        return( 
            <div>
                <h1>{this.props.titre}</h1>
                <Cars couleur="white">Rénault</Cars>
                <Cars couleur="green">Mercedes</Cars>
                <Cars couleur="yellow">Peugeot</Cars>
            </div>
        )
    }
}

export default MyCars;
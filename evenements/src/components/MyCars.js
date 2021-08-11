import React, { Component } from 'react';
import { CARS } from '../shared/cars';
import Cars from './Cars';
class MyCars extends Component {
    
    state = {
        titre: 'Mon Catalogue Voiture',
        cars: CARS
    }
   
    changerEnDur = () => {
        this.setState( {
            titre: 'Nouveau Titre'
        } )
    }
    changerViaParam = (titre) => {
        this.setState( { titre: titre })
    }
    changerViaBind = (titre) => {
        this.setState( { titre: titre })
    }
    chnageViaInput = (e) => {
        this.setState( {
            titre: e.target.value
        } )
    }

    render() {
        return (
            <div style={{border: '1px solid', width: '700px', margin: '10px auto', padding:'5px', textAlign: 'center'}}>
                <h1>{this.state.titre}</h1>
                <Cars cars={this.state.cars} />
                <input type="text" value={this.state.titre} onChange={(e)=>this.chnageViaInput(e)} /> <br/>
                <button onClick={this.changerEnDur}>Changer en dur</button>&nbsp;
                <button onClick={() => this.changerViaParam('Titre avec Param')}>Changer via param</button>&nbsp;
                <button onClick={ this.changerViaBind.bind(this, 'Titre avec Bind') }>Changer via bind</button>&nbsp;
            </div>
        )
    }
}
export default MyCars;
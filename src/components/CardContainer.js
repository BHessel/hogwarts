import React, { Component } from 'react'
import Card from './Card'

export default class CardContainer extends Component {
    render() {
        return (
            <div className ='card'>
                {this.props.hogs.map(hog => <Card hogData={hog}/>)}  
            </div>
        )
    }
}


// render() {
//     return <div className="ui cards">{this.props.pets.map(pet => <Pet onAdopt={this.props.onAdoptPet} key={pet.id} petData={pet}/>)}</div>
//     }
//   }
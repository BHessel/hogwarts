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
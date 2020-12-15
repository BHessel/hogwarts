import React, { Component } from 'react'


export default class Card extends Component {

    getImage = (hogName) => {
        let formattedName = hogName.split(" ").join("_").toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
      };

    handleClick = (e) => {
        console.log(e)
        //when clicked (event fires)
        //change div style invisible
        //to visible
        
    }

    render() {
        return (
            <div className='card' onClick={(e) => this.handleClick(e)}>
                <div className='nameHeader'>
                    <a className='name'>
                        {this.props.hogData.name}
                    </a>
                    <div>
                        <img src={this.getImage(this.props.hogData.name)} alt="" />
                    </div>
                    <div className = 'weight' style="invisible">
                        <p>Weight: {this.props.hogData.weight}</p>
                    </div>
                    <div className = 'greasiness'>
                        <p>Is greased: {String(this.props.hogData.greased)}</p>
                    </div>
                    <div className = 'specialty'>
                        <p>Specialty: {this.props.hogData.specialty}</p>
                    </div>
                </div>
            </div> 
        )
    }
}

//Ray's Way:
//.replace(/[\s]/g, "_").toLowerCase()
//on hogName on line 7
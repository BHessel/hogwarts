import React, { Component } from 'react'


export default class Card extends Component {
    
    state = {showing : false}

    getImage = (hogName) => {
        let formattedName = hogName.split(" ").join("_").toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
      };

    handleClick = () => {

        this.setState({
            showing: !this.state.showing
        }
        )
        
        //when clicked (event fires)
        //change div style invisible
        //to visible
        
    }

    render() {
        return (
            <div className='card' onClick={() => this.handleClick()}>
                <div className='nameHeader'>
                    
                    <a className='name'>
                        {this.props.hogData.name}
                    </a>
                    <div>
                        <img src={this.getImage(this.props.hogData.name)} alt="" />
                    </div>

                    { this.state.showing ? 
                    <div>
                    <div className = 'weight'>
                        <p>Weight: {this.props.hogData.weight}</p>
                    </div>
                    <div className = 'greasiness'>
                        <p>Is greased: {String(this.props.hogData.greased)}</p>
                    </div>
                    <div className = 'specialty'>
                        <p>Specialty: {this.props.hogData.specialty}</p>
                    </div> 
                        </div> : null }

                </div>
            </div> 
        )
    }
}



//Ray's Way:
//.replace(/[\s]/g, "_").toLowerCase()
//on hogName on line 7
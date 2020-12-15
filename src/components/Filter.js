import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className='form'>
                <h3>Pig Filter</h3>
                <div className='field'>
                    <select name='type' id='type'>
                        <option value='all'>All</option>
                        <option value='greasy'>Greasy Pigs</option>
                        <option value='name'>Name A-Z</option>
                        <option value='weight'>Weight low-high</option>
                    </select>
                </div>
                    <div className='button-container'>
                        <button className='button'>Find Your Hog!</button>
                    </div>
            </div>
        )
    }
}



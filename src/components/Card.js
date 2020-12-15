import React, { Component } from 'react'


export default class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div classname='nameHeader'>
                    <a className='name'>
                        {this.props.hogData.name}
                    </a>
                    <div>
                        
                        <img src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/news/r-d/how-can-the-prenatal-phase-influence-the-lifelong-performance-of-a-pig/8769254-1-eng-GB/How-can-the-prenatal-phase-influence-the-lifelong-performance-of-a-pig_wrbm_large.jpg' />
                    </div>
                </div>
            </div>
        )
    }
}


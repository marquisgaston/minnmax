import React, { Component } from 'react';
import FeaturedContent from '../featured-content/featured-content';
import FeaturedCarousel from '../featured-content/featured-carousel';
import Schedule from '../homepage/schedule';
import Upcoming from '../homepage/upcoming';
import NewTweets from './new-tweets';

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='homepage'>               
                <div className='featured-content-wrapper'>
                    <FeaturedContent />
                    <NewTweets/>
                </div>
                <Schedule/>
            <Upcoming/>
                <FeaturedCarousel />
            </div>
         );
    }
}
 
export default Homepage;
import React, { Component } from 'react';

class Schedule extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='schedule-wrapper'>
                <div className='schedule'>
                    <div className='schedule-day'>
                        <h2><div>Monday</div> MinnFAQs</h2>
                    </div >
                    <div className='schedule-day'>
                        <h2><div>Tuesday</div> The Great GOTY Hunt</h2>
                    </div >
                    <div className='schedule-day'>
                        <h2><div>Wednesday</div> The Deepest Dive</h2>
                    </div>
                    <div className='schedule-day'>
                        <h2><div>Thursday</div> The MinnMax Show</h2>
                    </div>
                    <div className='schedule-day'>
                        <h4>Misc...</h4>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Schedule;
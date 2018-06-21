import React, { Component }from 'react';
import backArrow from '../images/back-btn.png'


class BackButton extends Component {
    

    render() {
        
        return(
            <div>
                <input type="image" src={backArrow} className="" onClick={this.props.backToHome}/>
            </div>
        )
    }
}

export default BackButton;
import React, { Component }from 'react';
import backArrow from '../images/back-btn.png'


class BackButton extends Component {
    

    render() {
        
        return(
            <div>
                {/* <p>{this.props.backToHome}</p> */}
                {/* <button type="button" className="btn btn-primary" onClick={this.props.backToHome}>Back</button> */}
                <input type="image" src={backArrow} className="" onClick={this.props.backToHome}/>
            </div>
        )
    }
}

export default BackButton;
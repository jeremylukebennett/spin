import React, { Component }from 'react';
import ReactDOM from 'react-dom';


class BackButton extends Component {
    

    render() {
        
        return(
            <div>
                {/* <p>{this.props.backToHome}</p> */}
                <button type="button" className="btn btn-primary" onClick={this.props.backToHome}>Back</button>
            </div>
        )
    }
}

export default BackButton;
import React from 'react';
import './ViewAbout.css';
import ViewNav from './ViewNav';
import record from '../images/spin-icon.jpg'


class ViewAbout extends React.Component {
    
        state={

        }

   


    render() {

        return (
        <div>
            <ViewNav title="About Spin" backToHome={this.props.backToHome}/>
            <section>
                <div className="about-text">
                    <p>Spin is a reference tool for vinyl DJs. It sorts information about your record collection in a fluid, easily searchable format so that you spend less time aimlessly flipping through records and more time actually selecting music.</p>
                    <img id="spin-icon" src={record} alt="Logo" />
                </div>
            </section>
        </div>
        );
    }
}

export default ViewAbout;
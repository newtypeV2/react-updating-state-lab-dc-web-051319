// Code DigitalClicker Component Here
import React from "react";

// const DigitalClicker = () => {
//     return (
//         <div>"DIGITAL CLICKER"</div>
//         )
// }

// export default DigitalClicker

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state ={
            timesClicked: 0
        }
    }

    clickHandler = (e) => {
        let newTimesClicked = this.state.timesClicked + 1;
        this.setState({
            timesClicked: newTimesClicked
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
            
        )
    }
}
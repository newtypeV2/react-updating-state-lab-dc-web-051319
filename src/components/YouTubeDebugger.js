// Code YouTubeDebugger Component Here
import React from "react";

// const YouTubeDebugger = () => {
//     return (
//         <div>
//             "YouTubeDebugger"
//         </div>
//         )
// }

// export default YouTubeDebugger

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    clickBitrateHandler = (e) => {
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    clickResolutionHandler = (e) => {
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.clickBitrateHandler}>Bitrate</button>
                <button className="resolution" onClick={this.clickResolutionHandler}>Resolution</button>
            </div>
        )
    }
}
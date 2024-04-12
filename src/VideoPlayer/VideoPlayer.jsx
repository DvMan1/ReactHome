import { Component } from "react";
import { VideoList } from "./VideoList";
import { Player } from "./Player";
import videos from "../videos.json"

export class VideoPlayer extends Component{
    state={
        selectedVideo:null
    }

    selectVideo = link =>{this.setState({selectedVideo: link})}

    render(){
        return(
            <div style={{padding:24}}>
                <h1>Selceted Video:{this.state.selectedVideo}</h1>
                <VideoList videos={videos} onSelect={this.selectVideo}></VideoList>
                <Player url={this.state.selectedVideo}></Player>
            </div>
        )
    }
}
import React, { Component } from "react";
import { PlayerWrapper, StyledPlayer } from "./Player.styled.js";

export class Player extends Component {
    state={
        isVideoLoad: false,
    }
    componentDidUpdate(prevProps){
      if (prevProps.url!==this.props.url) {
        this.setState({isVideoLoad:false})
      }

    }
  render() {
    const { url } = this.props;
    const {isVideoLoad} = this.state

    return (
      <div>
       {url && !isVideoLoad && <h2>Loading... 🆘</h2>}
        {url && (
            

          <PlayerWrapper>
            <StyledPlayer url={url} onReady={()=>this.setState({isVideoLoad: true})} controls />
          </PlayerWrapper>
        )}
      </div>
    );
  }
}

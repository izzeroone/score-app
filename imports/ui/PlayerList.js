import React from "react";
import Player from "./Player"
import PropTypes from "prop-types"

export default class PlayerList extends React.Component{
    render(){
        return (
        <div className = "item"> 
            {this.renderPlayer()}
        </div>);
    }
    renderPlayer(){
        if(this.props.players.length === 0){
            return (
                <div>
                    <p> Add a player to start fool! </p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key = {player._id} player = {player}/>;
            })
        }
    }
}

PlayerList.propTypes = {
    players: PropTypes.array
};


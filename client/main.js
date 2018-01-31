import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players} from "../imports/api/players";
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";
import PlayerList from "../imports/ui/PlayerList"
// import Player from "../imports/ui/Player"


// const renderPlayers = (playersList) => playersList.map((player) => <Player key = {player._id} player = {player}/>);



Meteor.startup(() => {
    Tracker.autorun(function () {
        let players = Players.find().fetch();
        let title = "Score Keeper";
        let name = "Decode talker";
        let jsx =(
            <div>
                <TitleBar title = {title}/>
                {/* <p>Hello {name}!</p> */}
                <div className = "wrapper">
                     <PlayerList players = {players}/>
                     <AddPlayer score = {10}/>
                </div>
            </div>);
        ReactDOM.render(jsx, document.getElementById('app'));
    });


});
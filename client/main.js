import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

// function is called once the DOM is ready
Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionPlayers = calculatePlayerPositions(players);
    let title = 'Score Keeper';
    ReactDOM.render(<App title={title} players={positionPlayers}/>, document.getElementById('app'));
  });
});

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Col from "./Column";
import friends from "./friends.json";

function ranFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    // SET INITIAL STATE
    state = {
        friends,
        answer: '',
        topScore: 0,
        currentScore: 0,
        clicked: []
    };

    //HANDLE TO SHUFFLE UP THE FRIENDS
    handleShuffle = () => {
        let shuffledFriends = ranFriends(friends);
        this.setState({ friends: shuffledFriends });
    };

    //HANDLE THE CLICKS
    handleClick = id => {

    };

    //HANDLE TH ESCORE INCREASE OR RESET AND TOPSCORE
    handleScore = () => {

    };

    //HANDLE THE RESET OF THE GAME
    handleReset = () => {
        this.setState({
            friends,
            answer: '',
            topScore: 0,
            currentScore: 0,
            clicked: []
        });
        this.handleShuffle();
    };


}

export default App;

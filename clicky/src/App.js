import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./container";
import Row from "./row";
import Col from "./col";
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
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleScore();
            this.setState({
                clicked: this.state.clicked.concat(id)
            });
        } else {
            this.handleReset();
        }
    };

    //HANDLE TH ESCORE INCREASE OR RESET AND TOPSCORE
    handleScore = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            answer: "Correct!!"
        });
        // HANDLE TOP SCORE AND GAME WIN
        if (newScore >= this.state.topScore) {
            this.setState({
                topScore: newScore
            });
        } else if (newScore === 12) {
            this.setState({
                answer: "You won the game!"
            });
            this.handleReset();
        };
        this.handleShuffle();
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

    render() {
        return (
            <Wrapper>
                <Nav
                    title="Kalebs Click Game"
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    answer={this.state.answer}
                />
                <Title>
                    Click images to score but dont click the same one twice or yah loose!
                </Title>
                <Container>
                    <Row>
                        {this.state.friends.map(friend => (
                            <Col size="md-3 sm-6">
                                <FriendCard
                                    key={friend.id}
                                    handleClick={this.handleClick}
                                    handleIncrement={this.handleIncrement}
                                    handleReset={this.handleReset}
                                    handleShuffle={this.handleShuffle}
                                    id={friend.id}
                                    image={friend.image}
                                    name={friend.name}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Wrapper>
        )
    }


}

export default App;

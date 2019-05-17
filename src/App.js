import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuessWord from "./guessWord/GuessWord";
import Congrats from "./congrats/Congrats"

class App extends React.Component {
    render() {
        return <div className="container">
            <h1>Jotto</h1>
            <Congrats success={false} />
            <GuessWord guessedWords={[]} />
        </div>
    }
}

export default App;

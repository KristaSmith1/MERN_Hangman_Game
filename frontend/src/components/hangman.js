// this file will contain the hangman components

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//import { ReactSession } from "react-client-session";
import WinStatus from "./winStatus";


export default function Hangman() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const wordChoices = ["password", "keyboard", "name", "computer"]; // THIS WILL BE A FILE FULL OF WORDS

    const [word, setWord] = useState('');
    const [correctLetter, setCorrectLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [status, setStatus] = useState('');

    const [usedList, setUsedList] = useState([]);
    const [repeatMessage, setMessage] = useState('');

    // function to retrieve a random word from wordChoices
    const getWord = () => setWord(wordChoices[Math.floor(Math.random() * wordChoices.length)].toUpperCase());

    const resetGame = () => {
        getWord();
        setStatus('');
        setCorrectLetter([]);
        setWrongLetter([]);
    }

    const makeGuess = letter => {
        // handle event of user choosing a letter
        console.log("We have selected a letter");
        setMessage("");
        if (!usedList.includes(letter)) {
            if (word.includes(letter)) {
                // when the user chooses a correct letter:
                // set state of component to correct letter
                console.log("It was a good letter");
                setCorrectLetter([...correctLetter, letter]);
                setUsedList([letter]);
            } else {
                // when user chooses a wrong letter:
                console.log("It was a bad letter");
                setWrongLetter([...wrongLetter, letter]);
                setUsedList([letter]);
            }
        } else {
            // if wrong letter is in list:
            console.log("You have already chosen this");
            setMessage("You have chosen this letter already");
        }

    }

    useEffect(() => {
        // handle win scenario
        if (correctLetter.length && word.split('').every(letter => correctLetter.includes(letter))) {
            console.log("Winner");
            setStatus('win');
        }
    }, [correctLetter]);

    useEffect(() => {
        // handle fail scenario (runs out of 6 guesses)
        if (wrongLetter.length === 6) {
            console.log("Out of guesses");
            setStatus('lost');
        }
    }, [wrongLetter]);

    useEffect(resetGame, []); // reset the game board to blank

    // if user has guessed a correct letter, show the letter; else show the "_"
    const hideWord = word.split('').map(letter => correctLetter.includes(letter) ? letter : ' _ ').join('');

    // return the hidden word, the alphabet, wrong letters, win status
    return (
        <div>
            <p>{hideWord}</p>
            {alphabet.map((letter, index) =>
                <button
                    onClick={() => makeGuess(letter)}
                    key={index}>{letter}
                </button>)}
            <p>Previous incorrect guesses: </p>
            <p>{wrongLetter}</p>
            <p>{repeatMessage}</p>
            <WinStatus status={status} word={word} reset={resetGame} />
        </div>
    );
}


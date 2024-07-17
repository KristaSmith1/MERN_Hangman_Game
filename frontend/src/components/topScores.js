// the homepage will ask the user to enter their name,
// then navigate them to the game

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";


export default function TopScores() {

    async function onClick(e) {
        // when the user submits the form:
        // store user name

        e.preventDefault();


        navigate("/hangman");
    }


    // form to display scores
    return (
        <div>
            <h3>Top Scores</h3>
            <table style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Guesses</th>
                        <th>Word Length</th>
                    </tr>
                </thead>
                <tbody>PLACEHOLDER</tbody>
            </table>
            <br />
            <button onClick={onClick}>Return to Game</button>
        </div>

};


// const HangmanDrawing = ({ incorrectGuesses }) => {
//     const drawingParts = [

//         <line class="" x1="1%" y1="95%" x2="99%" y2="95%"></line>,
//         <line class="" x1="30%" y1="95%" x2="30%" y2="5%"></line>,
//         <line class="" x1="30%" y1="5%" x2="70%" y2="5%"></line>,
//         <line class="" x1="70%" y1="5%" x2="70%" y2="25%"></line>,
//         <circle class="" cx="70%" cy="30%" r="2%"></circle>,
//         <line class="" x1="70%" y1="35%" x2="70%" y2="45%"></line>,
//         <line class="" x1="70%" y1="45%" x2="68%" y2="55%"></line>,
//         <line class="" x1="70%" y1="45%" x2="72%" y2="55%"></line>,
//         <line class="" x1="70%" y1="38%" x2="72%" y2="46%"></line>,
//         <line class="draw" x1="70%" y1="38%" x2="72%" y2="46%"></line>

//     ];

//     return <div className="hangman">
//         <svg xmlns="http://www.w3.org/2000/svg">
//             {drawingParts.slice(0, incorrectGuesses)}
//         </svg>

//     </div>
// }

// export default HangmanDrawing;


import React from "react";



const HangmanDrawing = ({ wrongLetter }) => {
    console.log("Length of wrongLetter: " + wrongLetter);
    const wrongChoices = wrongLetter;
    console.log("Length: " + wrongChoices);

    return (
        <svg height="250" width="200" className="hangmanContainer" >
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {wrongChoices > 0 && <circle cx="140" cy="70" r="20" />}

            {wrongChoices > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
            {wrongChoices > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
            {wrongChoices > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
            {wrongChoices > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
            {wrongChoices > 5 && <line x1="140" y1="150" x2="160" y2="180" />}

        </svg>
    );
};

export default HangmanDrawing;

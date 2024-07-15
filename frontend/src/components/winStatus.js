const WinStatus = ({ status, word, reset }) => {
    if (!status) {
        return;
    }

    return <div className="winStatus">
        <p>You {status}!</p>
        <p>The word was: {word}</p>
        <button onClick={reset}>Try again?</button>
    </div>

}

export default WinStatus;

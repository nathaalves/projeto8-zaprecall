import React from 'react'

export default function HomeScreen () {

    const [homeScreen, setHideHomeScreen] = React.useState("home-screen")

    function startRecall () {
        setHideHomeScreen("hide-home-screen")
    }

    return (
        <div className={homeScreen}>
            <img className="logo" src="./images/logo.png" alt="logo"></img>
            <h1>ZapRecall</h1>
            <div className="btn-start-recall" onClick={startRecall}>Iniciar Recall!</div>
        </div>
    )
}
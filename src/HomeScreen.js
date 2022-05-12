import React from 'react'

export default function HomeScreen ({showHomeScreen, setShowHomeScreen}) {

    /* const [homeScreen, setHideHomeScreen] = React.useState(true)

    function startRecall () {
        setHideHomeScreen("hide-home-screen")
    } */

    return (
        <div className="home-screen">
            <img className="logo" src="./images/logo.png" alt="logo"></img>
            <h1>ZapRecall</h1>
            <div className="btn-start-recall" >Iniciar Recall!</div>
        </div>
    )
}
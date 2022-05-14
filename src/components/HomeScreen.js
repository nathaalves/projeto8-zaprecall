import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../assets/images/logo.png"

export default function HomeScreen () {

    return (
        <div className="home-screen">
            <img className="logo" src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>

            <Link to="/flashcard">
                <div className="btn-start-recall">Iniciar Recall!</div>
            </Link>
        </div>
    )
}
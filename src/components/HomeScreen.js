import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../assets/images/logo.png"

export default function HomeScreen ( { goal, setGoal } ) {

    const [validValue, setValidValue] = React.useState(true)
    const [activeBtn, setActiveBtn] = React.useState("btn-unactive")
    const [path, setPath] = React.useState("")
    
    function validateValue (e) {
        if (!isNaN(Number(e.target.value)) && e.target.value !== "" && e.target.value >= 1) {
            setGoal(e.target.value)
            setValidValue(true)
            setActiveBtn("btn-start-recall")
            setPath("/flashcards")
        } else {
            e.target.value = goal
            setValidValue(false)
            setActiveBtn("btn-unactive")
            setPath("")
        }
    }

    return (
        <div className="home-screen">
            <img className="logo" src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>
            <input className='meta-input' placeholder='Digite sua meta de zaps...' onChange={validateValue}></input>
            {validValue ? <></> : <div className='invalid-value'>Informe um valor numérico</div>}
            <Link to={path}>
                <div className={"btn-start-recall " + activeBtn}>Iniciar Recall!</div>
            </Link>
        </div>
    )
}
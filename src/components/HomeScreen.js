import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../assets/images/logo.png"

export default function HomeScreen ( { goal, setGoal } ) {

    const decks = [
        {deck: "React",
        flashCards: [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "OUsamos o npm para __", answer: "6. gerenciar os pacotes necessários e suas dependências"},
        {question: "OUsamos props para __", answer: "passar diferentes informações para componentes"},
        {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]},

        {deck: "React",
        flashCards: [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "OUsamos o npm para __", answer: "6. gerenciar os pacotes necessários e suas dependências"},
        {question: "OUsamos props para __", answer: "passar diferentes informações para componentes"},
        {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]}
    ]

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
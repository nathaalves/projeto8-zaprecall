import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomeScreen from './HomeScreen'
import FlashcardPage from './FlashcardPage'
import "../assets/styles/reset.css"
import "../assets/styles/style.css"

let deck = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "OUsamos o npm para __", answer: "6. gerenciar os pacotes necessários e suas dependências"},
    {question: "OUsamos props para __", answer: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]

export default function App() {

    const [goal, setGoal] = React.useState("")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen deck={deck} setGoal={setGoal} />}/>
                <Route path="/flashcards" element={<FlashcardPage deck={deck} goal={goal} />}/>
            </Routes>
        </BrowserRouter>
    )
}
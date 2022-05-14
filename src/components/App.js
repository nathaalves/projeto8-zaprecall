import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomeScreen from './HomeScreen'
import FlashcardPage from './FlashcardPage'
import "../assets/styles/reset.css"
import "../assets/styles/style.css"

export default function App() {

    const [goal, setGoal] = React.useState("")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen goal={goal} setGoal={setGoal} />}/>
                <Route path="/flashcards" element={<FlashcardPage goal={goal} />}/>
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './HomeScreen'
import FlashcardPage from './FlashcardPage'
import "../assets/styles/reset.css"
import "../assets/styles/style.css"

export default function App() {

    return (
        <BrowserRouter>
            <FlashcardPage />
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/flashcards" element={<FlashcardPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
import React from 'react'
import HomeScreen from './HomeScreen'
import FlashcardPage from './FlashcardPage'

export default function App() {

    const [showHomeScreen, setShowHomeScreen] = React.useState(false) /* true */

    return (
        <>
            {showHomeScreen ? <HomeScreen showHomeScreen={showHomeScreen} setShowHomeScreen={setShowHomeScreen} /> : <FlashcardPage />}
        </>
    )
}
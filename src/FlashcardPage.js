import React from "react"

export default function FlashcardPage () {

    const [conpleted, setComplited] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    return (
        <>
            <header className="flashcard-page-header">
                <img src="./images/logo-pequeno.png" alt="logo"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="flashcard-page-main">

            </main>
            <footer className="flashcard-page-footer">
                {conpleted}/{total} CONCLUÍDOS
            </footer>
        </>
    )
}
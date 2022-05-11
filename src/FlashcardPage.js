import React from "react"

export default function FlashcardPage () {

    const questions = [
        {title: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {title: "Pergunta 2", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {title: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {title: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {title: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {title: "Pergunta 6", question: "OUsamos o npm para __", answer: "6. gerenciar os pacotes necessários e suas dependências"},
        {title: "Pergunta 7", question: "OUsamos props para __", answer: "passar diferentes informações para componentes"},
        {title: "Pergunta 8", question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]

    const [conpleted, setComplited] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    function Question ({ title }) {
        return (
            <div className="question-layout">
                <div>
                    <h2>{ title }</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        )
    }

    return (
        <>
            <header className="flashcard-page-header">
                <img src="./images/logo-pequeno.png" alt="logo"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="flashcard-page-main">
                {questions.map( (question, index) => <Question 
                    key={index} 
                    title={question.title}
                />)}
            </main>
            <footer className="flashcard-page-footer">
                {conpleted}/{total} CONCLUÍDOS
            </footer>
        </>
    )
}
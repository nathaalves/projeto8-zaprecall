import React from "react"

export default function FlashcardPage () {

    const flashCardsObj = [
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

/*     function FlashCard ({ key, title }) {
        return (
            <div className="flash-card" key={index} onClick={ () => openQuestion(index)}>
                <div>
                    <h2>{ question.title }</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        )
    } */

    function Answer ({ index }) {
        return (
            <div className="answer">
                <h2>{flashCardsObj[index].answer}</h2>
                <div className="btn-container">
                    <div className="btn-not-remember">Não lembrei</div>
                    <div className="btn-almost-not-remember">Quase não lembrei</div>
                    <div className="btn-zap">Zap</div>
                </div>
            </div>
        )
    }

    function answerQuestion (index) {
        flashCards.splice(index, 1, <Answer index={index}/>)
        setflashCards([...flashCards])
    }

    function Question ({index}) {
        return (
            <div className="question" onClick={() => answerQuestion(index)}>
                <h2>{flashCardsObj[index].question}</h2>
                <img src="./images/setinha.png"></img>
            </div>
        )
    }

    const [flashCards, setflashCards] = React.useState(flashCardsObj.map( (question, index) => (
    <div className="flash-card" key={index} onClick={ () => openQuestion(index)}>
        <div>
            <h2>{ question.title }</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    </div>)))

    function openQuestion (index) {
        flashCards.splice(index, 1, <Question index={index}/>)
        setflashCards([...flashCards])
    }
    
    return (
        <>
            <header className="flashcard-page-header">
                <img src="./images/logo-pequeno.png" alt="logo"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="flashcard-page-main">
                {flashCards}
            </main>
            <footer className="flashcard-page-footer">
                {conpleted}/{flashCards.length} CONCLUÍDOS
            </footer>
        </>
    )
}
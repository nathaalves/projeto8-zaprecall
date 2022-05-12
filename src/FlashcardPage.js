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

    const [flashCards, setFlashCards] = React.useState(flashCardsObj.map( (flashCard, index) => <FlashCard index={index} title={flashCard.title} />))

    const [answerHistoric, setAnswerHistoric] = React.useState([])
    const [answeredCount, setAnsweredCount] = React.useState(0)

    function AnsweredFlashCard ({index, icon, style}) {
        return (
            <div className={"flash-card " + style} key={index} onClick={ () => openQuestion(index)}>
                <div>
                    <h2>{ flashCardsObj[index].title }</h2>
                    {icon}
                </div>
            </div>
        )
    }

    function reply (value, index) {

        if (value === "dont-remember") {
            setAnswerHistoric(prevHistoric => [...prevHistoric, <span className={value}><ion-icon name="close-circle"></ion-icon></span>])
            flashCards.splice(index, 1, <AnsweredFlashCard index={index} icon={<span><ion-icon name="close-circle"></ion-icon></span>} style={value}/>)
            setFlashCards([...flashCards])
        }

        if (value === "almost-dont-remember") {
            setAnswerHistoric(prevHistoric => [...prevHistoric, <span className={value}><ion-icon name="help-circle"></ion-icon></span>])
            flashCards.splice(index, 1, <AnsweredFlashCard index={index} icon={<span><ion-icon name="help-circle"></ion-icon></span>} style={value}/>)
            setFlashCards([...flashCards])
        }

        if (value === "zap") {
            setAnswerHistoric(prevHistoric => [...prevHistoric, <span className={value}><ion-icon name="checkmark-circle"></ion-icon></span>])
            flashCards.splice(index, 1, <AnsweredFlashCard index={index} icon={<span><ion-icon name="checkmark-circle"></ion-icon></span>} style={value}/>)
            setFlashCards([...flashCards])
        }
        
        setAnsweredCount(prevCount => prevCount + 1)
    }

    function Answer ({ index }) {
        return (
            <div className="answer" key={index}>
                <h2>{flashCardsObj[index].answer}</h2>
                <div className="btn-container">
                    <div onClick={ () => reply("dont-remember", index)}>Não lembrei</div>
                    <div onClick={ () => reply("almost-dont-remember", index)}>Quase não lembrei</div>
                    <div onClick={ () => reply("zap", index)}>Zap</div>
                </div>
            </div>
        )
    }

    function answerQuestion (index) {
        flashCards.splice(index, 1, <Answer index={index}/>)
        setFlashCards([...flashCards])
    }

    function Question ({index}) {
        return (
            <div className="question" onClick={() => answerQuestion(index)} key={index}>
                <h2>{flashCardsObj[index].question}</h2>
                <img src="./images/setinha.png" alt="setinha"></img>
            </div>
        )
    }

    function openQuestion (index) {
        flashCards.splice(index, 1, <Question index={index}/>)
        setFlashCards([...flashCards])
    }

    function FlashCard ({ index, title }) {
        return (
            <div className="flash-card" key={index} onClick={ () => openQuestion(index)}>
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
                {flashCards}
            </main>
            <footer className="flashcard-page-footer">
                {answeredCount}/{flashCards.length} CONCLUÍDOS
                <div>{answerHistoric}</div>
            </footer>
        </>
    )
}
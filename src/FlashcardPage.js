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

    const [flashCards, setFlashCards] = React.useState(flashCardsObj.map( (flashCard, index) => <FlashCard index={index}><ion-icon onClick={ () => openQuestion(index)} name="play-outline"></ion-icon></FlashCard>))

    const [answerHistoric, setAnswerHistoric] = React.useState([])
    const [answeredCount, setAnsweredCount] = React.useState(0)
    
    const [congrats, setCongrats] = React.useState(true)

    function Message () {

        let source = "./images/party.png"
        let message1 = "Parabéns"
        let message2 = "Você não esqueceu de nenhum flashcard!"

        if (congrats === false) {
            source = "./images/sad.png"
            message1 = "Putz..."
            message2 = "Ainda faltam alguns... Mas não desanime"
        }

        return (
            <div className="message">
                <div>
                    <img src={source} alt="congrats"></img>
                    <h3>{message1}</h3>
                </div>
                <p>{message2}</p>
            </div>
        )
    }

    function Icon ({name}) {
        return (
            <span className={name}><ion-icon name={name}></ion-icon></span>
        )
    }

    function reply (value, index) {

        if (value === "close-circle") {
            setCongrats(false)
        }

        setAnswerHistoric(prevHistoric => [...prevHistoric, <Icon name={value}/>])
        flashCards.splice(index, 1, <FlashCard index={index} style={value}><Icon name={value}/></FlashCard>)
        
        setFlashCards([...flashCards])
        setAnsweredCount(prevCount => prevCount + 1)
    }

    function Card ({ index, text, children }) {
        return (
            <div className="question" key={index}>
                <div>
                    <h2>{ text }</h2>
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }

    function answerQuestion (index) {
        flashCards.splice(index, 1, 
            <Card index={index} text={flashCardsObj[index].answer}>
                <div className="btn-container">
                        <div onClick={ () => reply("close-circle", index)}>Não lembrei</div>
                        <div onClick={ () => reply("help-circle", index)}>Quase não lembrei</div>
                        <div onClick={ () => reply("checkmark-circle", index)}>Zap</div>
                    </div>
            </Card>)
        setFlashCards([...flashCards])
    }

    function openQuestion (index) {
        flashCards.splice(index, 1, 
            <Card index={index} text={flashCardsObj[index].question}>
                <img src="./images/setinha.png" alt="setinha" onClick={() => answerQuestion(index)}></img>
            </Card>)
        setFlashCards([...flashCards])
    }

    function FlashCard ({ index, style, children}) {
        return (
            <div className={"flash-card " + style} key={index} >
                <div>
                    <h2 className={style}>{ `Pergunta ${index + 1}` }</h2>
                    {children}
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
                {(answeredCount === flashCards.length) ? <Message /> : <></>}
                {answeredCount}/{flashCards.length} CONCLUÍDOS
                <div>{answerHistoric}</div>
            </footer>
        </>
    )
}
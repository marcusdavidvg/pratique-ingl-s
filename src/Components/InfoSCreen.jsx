import {useState, useEffect, useRef} from "react"
import "./InfoScreen.css"
import ButtonNext from "../images/next.png"
import { baseListWord } from "../Data"

const InfoScreen = () =>
{

    const [listWord, setListWord] = useState(baseListWord)
    // const [currentTextInput, setCurrentTextInput] = useState('')
    // const [currentWord, setCurrentWord] = useState(getRandomWord())
    const currentWord = useRef(getRandomWord())
    const currentTextInput = useRef('')
    // const isCorrect = useRef(false)
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(() => console.log(baseListWord), [])

    function getTextInput(text)
    {
        // setCurrentTextInput(text)

        currentTextInput.current = text

        setIsCorrect(currentTextInput.current.toLowerCase() == currentWord.current.word.toLowerCase())
    }

    function verifyNewText()
    {
        return isCorrect ? "inputGreen":"inputRed"
    }

    function changeToNextWord()
    {
        if (isCorrect)
        {
            // getRandomWord()
            setIsCorrect(false)
        }
    }

    function getRandomWord() {
        let id = Math.floor(Math.random() * (listWord.length - 1 - 0) + 0)
        let word = listWord[id]
        listWord.splice(id, 1)
        console.log("chamou")
        return word
    }

    return (
        <div className="general">
        <div className="primaryContainer">
            <h1 className="word">{currentWord.current.word}</h1>
            <div className="boxContainer">
                <span>Tradução:</span>
                <h2 className="translation">{currentWord.current.translation}</h2>
            </div>
            <input onChange={(e)=> getTextInput(e.target.value)} className={verifyNewText()}  type="text" placeholder="Digite a palavra em inglês"/>
        </div>
        <div className="boxNextButton">
            <button onClick={changeToNextWord}><img src={ButtonNext} alt="" /></button>
        </div>
        </div>
    )
}

export default InfoScreen;
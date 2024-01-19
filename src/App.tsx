import {useEffect, useState} from 'react'

import citIcon from './assets/pngwing.com (2).png'
import negrIcon from './assets/22a22711fec7a9fb1ab7467f4fc1f52213f84a6a.jpeg'

import './App.css'

function App() {
    const [count, setCount] = useState(10)
    const [countCit, setCountCit] = useState(4)
    const [ipAddress, setIPAddress] = useState('')

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIPAddress(data.ip))
            .catch(error => console.log(error))
    }, []);
    const twoStageText = ["Красаучег", "Последний раз", "Молодец, продолжай", "Давай ещё", "Кликни по киту"]
    return (
        <>
            <div className={` ${count<=0 ? "main_deactivated" : "main"}`}>
                <h1 className="main__title">Find Yourself</h1>
                <button onClick={() => {setCount(count-1)}} className="main__button">Кликни {count}</button>
            </div>
            <div className={` ${count<=0 ? "two-stage" : "two-stage_deactivated"} ${countCit<=0 ? "two-stage_deactivated" : ""}`}>
                <h2 className="two-stage__title ">Молодец, я уже вычислил твой  IP:  </h2>
                <h3 className="two-stage__subtitle">{ipAddress}</h3>
                <img className="two-stage__image" onClick={() => {setCountCit(countCit-1)}} src={citIcon}/>
                <p className="two-stage__text">
                    {twoStageText[countCit]}
                </p>
            </div>
            <div className={` ${countCit<=0 ? "third-stage" : "third-stage_deactivated"} `}>
                <h2 className="third-stage__title ">А ты сообразительный</h2>

                <img className="third-stage__image" onClick={() => {setCountCit(countCit-1)}} src={negrIcon}/>
                <p className="third-stage__text">
                    Соображай, что будет дальше ...
                </p>
            </div>

        </>
    )
}

export default App

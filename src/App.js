import  React, { useState, useEffect, useRef } from 'react';
import './App.css';


const App = () => {
    const [ result, setResult ] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })


    const handelInput = (e) => { 
        setResult(result.concat(e.target.name));
    }

    const backspace = () => {
        setResult(result.slice(0, result.length -1))
    }

    const clearAll = () => {
        setResult("")
    }

    const calculate = (e) => {
        try {
            setResult(eval(result).toString());
        } catch(error) {
            setResult('Error')
        }
    }

    return (
        <div className="calc-app">
            <from>
                <input type="text" value={result} ref={inputRef}/>
            </from>

            <div className="keypad">
                <button onClick={clearAll} id="clear">Clear</button>
                <button onClick={backspace} id="backspace">C</button>
                <button name="+" onClick={handelInput}>+</button>
                <button name="7" onClick={handelInput}>7</button>
                <button name="8" onClick={handelInput}>8</button>
                <button name="9" onClick={handelInput}>9</button>
                <button name="-" onClick={handelInput}>-</button>
                <button name="4" onClick={handelInput}>4</button>
                <button name="5" onClick={handelInput}>5</button>
                <button name="6" onClick={handelInput}>6</button>
                <button name="*" onClick={handelInput}>&times;</button>
                <button name="1" onClick={handelInput}>1</button>
                <button name="2" onClick={handelInput}>2</button>
                <button name="3" onClick={handelInput}>3</button>
                <button name="/" onClick={handelInput}>/</button>
                <button name="0" onClick={handelInput}>0</button>
                <button name="." onClick={handelInput} className="dot">.</button>
                <button id="result" onClick={calculate}>Result</button>
            </div>
        </div>
    )
} 

export default App;
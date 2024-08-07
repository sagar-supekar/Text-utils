import React, { useState } from 'react';
import "./textform.css";

export default function TextForm(props) {
    const data = [
        { name: "sagar", age: "23", adhar: "xxxxxxxx6473", pin: "notps1177C" },
        { name: "mahesh", age: "23", adhar: "xxxxxxxx8970", pin: "89764C" }
    ];
    localStorage.setItem("user_data", JSON.stringify(data));

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const clearText = () => {
        let newText = '';
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    const [state, setState] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const toggleButton = () => {
        if (state.color === "black") {
            setState({
                color: "white",
                backgroundColor: "black"
            });
        } else {
            setState({
                color: "black",
                backgroundColor: "white"
            });
        }
    };

    return (
        <div style={{ backgroundColor: state.backgroundColor, color: state.color }}>
            <div className="main">
                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    <label htmlFor="MyText" className="form-label"></label>
                    <textarea 
                        className="form-control" 
                        placeholder='Enter a text' 
                        value={text} 
                        onChange={handleOnChange} 
                        id="MyText" 
                        rows="6" 
                        cols="7"
                    ></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={handleUpClick}>ToUppercase</button>
                    <button className="btn btn-primary" onClick={clearText}>Clear</button>
                    <button className="btn btn-primary" onClick={speak}>Speak</button>
                    <button type="submit" className="btn btn-primary" onClick={toggleButton}>Change mode</button>
                </div>
                <div className="summary">
                    <h3>Text Summary</h3>
                    <p>word = {text.split(" ").filter(word => word !== "").length} characters = {text.length}</p>
                </div>
            </div>
        </div>
    );
}

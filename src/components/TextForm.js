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
        color: "#132b4f",
        backgroundColor: "white"
    });

    const toggleButton = () => {
        if (state.color === "#132b4f") {
            setState({
                color: "white",
                backgroundColor: "#132b4f"
            });
        } else {
            setState({
                color: "#132b4f",
                backgroundColor: "white"
            });
        }
    };

    return (
        <div className="container">
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
                        rows="5" 
                        cols="0"
                    ></textarea>
                </div>
                <div className="container1">
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
        </div>
    );
}

import React, { useState } from 'react'
import "./text.css"

const TextForm = (props) => {
    // dark mode
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btnText, setBtnText] = useState("Enable dark mode")

    const toggleDarkMode = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setBtnText("Enable light mode")
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',

            })
            setBtnText("Enable dark mode")
        }
    }

    const [text, setText] = useState("");
    // text = "enter your name"   // wrong way to change the state
    // setText("enter your name")   // state ko update krne k lie   

    const handleUpClick = () => {
        // console.log("upperCase was clicked:" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleloClick = () => {
        // console.log("upperCase was clicked:" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("upperCase was clicked:" + text)
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className='main_container' style={myStyle}>
                {/* get heading from props */}
                <h1 className='container h1'>{props.heading}</h1>
                <div className="my-3 container">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    {/* <input value={text} onChange={handleOnChange} /> */}
                </div>
                <div className='container'>
                    <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleloClick}>Convert To LowerCase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClearClick}>Clear Text</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={toggleDarkMode}>{btnText}</button>
                </div>
                <div className='container'>
                    <h1 className='h1'>Your Text Summary</h1>
                    <p>Characters : {text.length} -- Words :{text.split(" ").length}</p>
                </div>

                <div className='container' >
                    <h1 className='h1'>Preview</h1>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}

export default TextForm

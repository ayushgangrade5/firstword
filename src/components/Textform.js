import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")
    const handleup = () => {
        console.log("uppercase was clicked");
        setText(text.toUpperCase())
    }
    const handlechange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handledown = () => {
        console.log("uppercase was clicked");
        setText(text.toLowerCase ())
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }
    const wordCount =()=>{
        if(text.length===0)
        {return 0}
        else
        return (text.split(" ").length)
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
             <div className='container mb-3'>
            {/* <label for="mybox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handlechange} placeholder="write something" id="mybox" rows="3"></textarea>
             </div>
                <button className='btn btn-primary mx-2' onClick={handleup} >Convert to uppercase</button>
           
            <button className='btn btn-primary mx-2' onClick={handledown} >Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <h1>Your text word and letter count</h1>
            <p>{wordCount()} words and {text.length} characters</p>
            <p>{0.008 * wordCount()} Minutes read </p>
        </div>
        </> 
    ) 
}

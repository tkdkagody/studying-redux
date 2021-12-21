import React from 'react';
import { useState } from 'react';

function Home () {

    const [text, setText] = useState(""); 
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>to do </h1>
            <form onSubmit={onSubmit}>
             <input type="text" value={text} onChange={onChange}></input>
             <button>Add</button>
            </form>
        </>
    )
}

export default Home ; 
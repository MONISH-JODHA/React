import React, { useState } from 'react';

export default function TextForm(props) {


    const onChangeHandler = (event) => {
        console.log("changed");
        setText(event.target.value)

    };

    const handleOnClickupper = () => {
        console.log("clicked for uppercase");

        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleOnClicklower = () => {
        console.log("clicked for uppercase");

        let newtext = text.toLowerCase();
        setText(newtext);
    };
    const [text, setText] = useState("Enter the Text");
    return (
        <div>
            <h2>{props.title}</h2>

            <div className="mb-3 my-3">
                <label htmlFor="mybox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={onChangeHandler}></textarea>
                <button className="btn btn-primary mt-3" onClick={handleOnClickupper}>To UpperCase</button>
                <button className="btn btn-primary mt-3 ms-2" onClick={handleOnClicklower}>To LowerCase</button>
            </div>

        </div>
    );
}

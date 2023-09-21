import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Text converted to uppercase.", "success");
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Text converted to lowercase.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let removeExtraspace = text.split(/[ ]+/);
    setText(removeExtraspace.join(" "));
    props.showAlert("Removed extra spaces from the text.", "success");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };
  const handleClearText = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text has been cleared", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 container my-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleLowClick}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3 mb-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview."}
        </p>
      </div>
    </>
  );
}

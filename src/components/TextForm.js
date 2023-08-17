import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleFirstCaps = () => {
    let newText = text.split(".");
    const capitalized = newText
      .map((sentence) => {
        let result = sentence.replace(/^\s+|\s+$/gm, "");
        return result.charAt(0).toUpperCase() + result.slice(1) + ".";
      })
      .join(" ");
    setText(capitalized);
    props.showAlert("Capitalized sentences!", "success");
  };

  const handleWordCaps = () => {
    let newText = text.split(" ");
    const capitalized = newText
      .map((word) => {
        let result = word.replace(/^\s+|\s+$/gm, "");
        return result.charAt(0).toUpperCase() + result.slice(1);
      })
      .join(" ");
    setText(capitalized);
    props.showAlert("Capitalized Words!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" my-3>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            my-3
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "dark" : "light",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleFirstCaps}
        >
          Capitalize Sentences
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleWordCaps}
        >
          Capitalize Words
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container" my-3>
        <h2>Your Text here</h2>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>

        <h3>Preview</h3>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it!"}
        </p>
      </div>
    </>
  );
}

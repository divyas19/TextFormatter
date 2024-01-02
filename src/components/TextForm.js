import React, { useState } from "react";

export default function TextForm({ mode, showAlert, heading }) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase!", "success");
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
    showAlert("Capitalized sentences!", "success");
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
    showAlert("Capitalized Words!", "success");
  };

  const handleClearClick = () => {
    setText("");
    showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Text copied!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra space removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" my-3>
        <h1
          style={{
            color: mode === "dark" ? "black" : "grey",
          }}
        >
          {heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            my-3
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: mode === "dark" ? "black" : "rgb(236, 245, 242)",
              color: mode === "dark" ? "white" : "black",
              border: "none",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"} mx-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleFirstCaps}
        >
          Capitalize Sentences
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleWordCaps}
        >
          Capitalize Words
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${mode === "dark" ? "dark" : "secondary"
            } mx-1 my-1`}
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" my-3>
        <h2
          style={{
            color: mode === "dark" ? "black" : "grey",
          }}
        >
          Your Text here
        </h2>
        <p
          style={{
            color: mode === "dark" ? "black" : "grey",
          }}
        >
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p
          style={{
            color: mode === "dark" ? "black" : "grey",
          }}
        >
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
      </div>
    </>
  );
}

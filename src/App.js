import React from "react";
import "./styles.css";
import { useState } from "react";

var bookDB = {
  personalfinance: [
    { bookname: "Rich Dad Poor Dad", rating: "5/5" },
    { bookname: "Psychology of money", rating: "5/5" }
  ],

  personaldevelopment: [
    { bookname: "Think Like a Monk", rating: "5/5" },
    { bookname: "Atomic Habits", rating: "5/5" },
    { bookname: "The Subtle Art of Not Giving a F*ck", rating: "5/5" }
  ],
  biography: [
    { bookname: "Wings of Fire", rating: "5/5" },
    { bookname: "Think Like a Monk", rating: "5/5" }
  ]
};

export default function App() {
  var [selectedTopic, setTopic] = useState("personalfinance");

  function topicClickHandler(topic) {
    setTopic(topic);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>GOOD BOOKS!!!</h1>

      <div>
        {Object.keys(bookDB).map((topic) => (
          <button
            onClick={() => topicClickHandler(topic)}
            style={{
              background: "#F0D9FF",
              borderRadius: "0.8rem",
              padding: "0.5rem  1rem",
              border: "1px solid #BFA2DB",
              margin: "1rem"
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      <hr />
      <div>
        <ol>
          {bookDB[selectedTopic].map((bk) => (
            <li
              keys={bk.bookname}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem ",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {bk.bookname} </div>
              <div style={{ fontSize: "smaller" }}> {bk.rating} </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

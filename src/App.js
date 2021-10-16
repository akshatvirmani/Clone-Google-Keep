import React, { useState, useEffect } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  useEffect(()=>{
   const notedata=window.localStorage.getItem("notes")
   setNotes(JSON.parse(notedata));
  },[]);
useEffect(()=>{
  window.localStorage.setItem("notes", JSON.stringify(notes));

}



)


  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "There are no notes"
            : `Showing ${notes.length} Note(s) in Database`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

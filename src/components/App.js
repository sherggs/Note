import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";




function App() {

  const [content, setContent] = useState("");
  return (
    <div>
      <Header />
     { notes.map(NewNote => <Note 
     key = {NewNote.key }
     title = {NewNote.title} 
    content = {NewNote.content}
    /> )}
    <button> new </button>
  
      <Footer />
    </div>
  );
}

export default App;

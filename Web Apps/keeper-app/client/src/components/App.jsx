import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import InputArea from "./InputArea"

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get("/api/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error(err))
  }, [])

  const createNote = (note) => {
    axios.post("/api/note/add", note)
      .then((res) =>
        setNotes((prevNotes) => {
          return [...prevNotes, res.data]
        })
      )
      .catch((err) => console.log(err))
  }

  const deleteNote = (id) => {
    axios.post("/api/note/delete", [id])
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Header />
      <InputArea onClick={createNote} />
      <div className="notes-container">
        {notes.map((note, key) => {
          return (
            <Note
              key={key}
              id={note._id}
              title={note.title}
              content={note.content}
              onClick={deleteNote}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App

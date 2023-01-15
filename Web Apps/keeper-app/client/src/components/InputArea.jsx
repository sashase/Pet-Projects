import { useState } from "react"
import Zoom from "@mui/material/Zoom"
import TitleField from "./TitleField"
import ContentField from "./ContentField"
import AddIcon from "@mui/icons-material/Add"

const InputArea = (props) => {
  const [isExpanded, setFormState] = useState(false)
  const [counter, setCounter] = useState(0)
  const [fieldIsEmpty, setFieldIsEmpty] = useState()

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const expandInputArea = () => {
    setFormState(true)
  }

  const changeHandler = (event) => {
    const value = event.target.value
    const name = event.target.name
    setFieldIsEmpty(false)
    setNote((prevState) => {
      if (name === "title") {
        return {
          title: value,
          content: prevState.content
        }
      } else {
        setCounter(value.length)
        return {
          title: prevState.title,
          content: value
        }
      }
    })
  }

  const createNote = (event) => {
    event.preventDefault()
    if (note.title === "" || note.content === "") {
      return setFieldIsEmpty(true)
    }
    props.onClick(note)
    setNote({
      title: "",
      content: ""
    })
    setCounter(0)
  }

  return (
    <div className="inputArea">
      <form>
        {isExpanded && (
          <TitleField onChange={changeHandler} value={note.title} />
        )}
        <ContentField
          onClick={expandInputArea}
          onChange={changeHandler}
          value={note.content}
          rows={isExpanded ? 2 : 1}
        />
        <div className="messages-container">
          <p
            className="characters-counter"
            style={counter === 300 ? { color: "red" } : {}}>
            {counter}/300
          </p>
          <p className="error-message">
            {fieldIsEmpty ? "You can not add note with an empty field!" : ""}
          </p>
        </div>
        {isExpanded && (
          <Zoom in={true}>
            <button onClick={createNote}>
              <AddIcon />
            </button>
          </Zoom>
        )}
      </form>
    </div>
  )
}

export default InputArea

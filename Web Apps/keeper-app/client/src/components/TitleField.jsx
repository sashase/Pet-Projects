const TitleField = (props) => {
  return (
    <input
      className="note-field title-field"
      onChange={props.onChange}
      name="title"
      placeholder="Title"
      value={props.value}
      maxLength={110}
    />
  )
}

export default TitleField

const ContentField = (props) => {
  return (
    <textarea
      className="note-field content-field"
      onClick={props.onClick}
      onChange={props.onChange}
      name="content"
      rows={props.rows}
      placeholder="Take a note..."
      value={props.value}
      maxLength={300}
    />
  )
}

export default ContentField

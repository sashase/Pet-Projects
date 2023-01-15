require("dotenv").config()
const express     = require("express")
const mongoose    = require("mongoose")
const app         = express()
 
const PORT        = process.env.PORT || 4747
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_URL      = process.env.DB_URL
const DB          = "keeperDB"
 
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Establish DB connection
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}?retryWrites=true`, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   connectTimeoutMS: 10000
})
 
const db = mongoose.connection
 
// Event listeners
db.once('open', () => console.log(`Connected to ${DB} database`))
 
// Create Schema
let NoteSchema = new mongoose.Schema(
   {
      title: String,
      content: String
   },
   { collection: "notes" }
)
 
// Create Model
let NoteModel = mongoose.model("NoteModel", NoteSchema)

// Function to render current notes from DB
const renderNotes = res => {
   NoteModel.find({}, {__v: 0}, (err, notes) => {
      if (!err) {
         res.json(notes)
      } else {
         res.status(400).json({"error": err})
      }
   })
}
 
// Route to Get all Notes
app.get("/api/notes", (req, res) => {
   renderNotes(res)
})
 
// Route to Add a Note
app.post("/api/note/add", (req, res) => {
   let note = new NoteModel(req.body)
   note.save((err, result) => {
      if (!err) {
         delete result._doc.__v
         res.json(result._doc)
      } else {
         res.status(400).json({"error": err})
      }
   })
})

// Route to Delete a Note
app.post("/api/note/delete", (req, res) => {
   const id = req.body[0]
   NoteModel.deleteOne({_id: mongoose.Types.ObjectId(`${id}`)}, err => {
      if (err) {
         console.log(err)
      }
      else {
         renderNotes(res)
      }
   })
})
 
app.listen(PORT, () => {
   console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT))
})
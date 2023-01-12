import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Message from "../components/Message"
import {
  arrayUnion,
  doc,
  onSnapshot,
  Timestamp,
  updateDoc
} from "firebase/firestore"

export default function Comments() {
  const route = useRouter()
  const routeData = route.query

  const [user, loading] = useAuthState(auth)
  const [allComments, setAllComments] = useState([])
  const [comment, setComment] = useState("")

  const getComments = async () => {
    const docRef = doc(db, "posts", routeData.id)
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setAllComments(snapshot.data()?.comments)
    })
    return unsubscribe
  }

  const createComment = async () => {
    const docRef = doc(db, "posts", routeData.id)
    await updateDoc(docRef, {
      comments: arrayUnion({
        avatar: user.photoURL,
        username: user.displayName,
        text: comment,
        timestamp: Timestamp.now()
      })
    })
    setComment("")
  }

  useEffect(() => {
    if (!route.isReady) return
    if (!routeData.id) return
    getComments()
  }, [route.isReady])

  if (routeData.id) {
    return (
      <div>
        <Message {...routeData}></Message>
        <h3 className="text-darker font-medium">Comments</h3>
        {!allComments && (
          <h3 className="text-darker font-medium">
            There are no comments yet, make a first one!
          </h3>
        )}
        <div>
          {allComments?.map((comment) => {
            {
              return (
                <div
                  className="bg-darker text-light rounded-lg shadow-xl my-4 p-3"
                  key={comment.timestamp}>
                  <div className="flex items-center gap-2 mb-1">
                    <img src={comment.avatar} className="w-8 rounded-full" />
                    <h3>{comment.username}</h3>
                  </div>
                  <h3>{comment.text}</h3>
                </div>
              )
            }
          })}
        </div>
        {user && (
          <div className="my-5">
            <h3 className="text-darker font-medium">Send your comment</h3>
            <div className="flex flex-col gap-3 rounded-lg my-2">
              <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type="text"
                className="rounded-lg border-darker border-2 text-darker p-1"
              />
              <button
                onClick={createComment}
                className="text-light bg-darker rounded-lg py-2 px-4 w-[30%]">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  } else {
    return <h2>error!</h2>
  }
}

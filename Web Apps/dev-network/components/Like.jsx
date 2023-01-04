import { useState, useEffect } from "react"
import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useRouter } from "next/router"

export default function Like(props) {
  const route = useRouter()

  const [user, loading] = useAuthState(auth)
  const [liked, setLiked] = useState(false)

  const addLike = async () => {
    if (!user) return route.push("/auth/login")
    const docRef = doc(db, "posts", props.post.id)
    if (!liked) {
      await updateDoc(docRef, {
        likedBy: arrayUnion({
          uid: user.uid,
        }),
      })
    } else {
      await updateDoc(docRef, {
        likedBy: arrayRemove({ uid: user.uid }),
      })
    }
  }

  useEffect(() => {
    if (!user) return
    setLiked(false)
    for (let i = 0; i < props.post.likedBy.length; i++) {
      if (props.post.likedBy[i].uid == user.uid) {
        setLiked(true)
      }
    }
  }, [addLike])

  return (
    <div className="flex items-center gap-2 mb-1">
      <p>{props.post.likedBy.length}</p>
      <button onClick={addLike}>
        {liked ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    </div>
  )
}
